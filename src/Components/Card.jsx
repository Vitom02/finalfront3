import React from "react";
import { Link } from 'react-router-dom';
import { useReducer, useEffect } from "react";
import doctor from "../images/doctor.jpg"


const Card = ({ data }) => {

  const favoritesReducer = (state, action) => {
    switch (action.type) {
      case "ADD_FAVORITE":
        if (!state.some((fav) => fav.id === action.payload.id)) {
          return [...state, action.payload];
        }
        return state;
      case "REMOVE_FAVORITE":
        return state.filter((fav) => fav.id !== action.payload.id);
      default:
        return state;
    }
  };
  
  
  const initialState = [];


  console.log('componente card renderizado');

  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    JSON.parse(localStorage.getItem("favorites")) || initialState
  );

  const addFav = () => {
    if (typeof data === 'object' && data !== null) {
      console.log('Adding to favorites:', data);
      const addAction = { type: "ADD_FAVORITE", payload: data };
      dispatch(addAction);
    } else {
      console.error('Data is not a valid object:', data);
    }
  };

  useEffect(() => {
    console.log('Use effect ejecutando');
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log("Favorites state changed:", favorites);
  }, [favorites]);

  return (
    <div className="card  ">
      <Link to={`/users/${data.id}`} className = 'card-link' >
        <img src={doctor} alt="imagen doctor" style={{width : '200px', borderRadius : "100px"}} />
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <h3>ID: {data.id}</h3>
        <h3>NAME: {data.name}</h3>
        <h3>USERNAME: {data.username}</h3>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>  
  );
};

export default Card;
