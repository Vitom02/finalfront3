import React, { useEffect, useState } from 'react';
import doctor from "../images/doctor.jpg"
import '../index.css'
import { ContextGlobal } from '../Components/utils/global.context';
import { useContext } from 'react'


const Favs = () => {
  const [favorites, setFavorites] = useState([]);
  const {theme} = useContext(ContextGlobal)
  useEffect(() => {
    // Fetch favorites from local storage and parse the JSON
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log('Stored Favorites:', storedFavorites);
    setFavorites(storedFavorites);
  }, []);
  console.log('Favorites State:', favorites);
  return (
    <div className={`main-${theme}`}>
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className={`card-grid card-grid-${theme}`}>
          {favorites.map((favorite) => (
            <div key={favorite.id}className='card'>
              <img src={doctor} alt="imagen doctor"  style={{width : '200px', borderRadius : "100px"}} />
              <p>ID: {favorite.id}</p>
              <p>NAME: {favorite.name}</p>
              <p>USERNAME: {favorite.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favs;
