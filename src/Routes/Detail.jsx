import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import doctor from "../images/doctor.jpg"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  console.log('ID from URL:', id);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const getDentist = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      console.log('Fetched data:', data);
      if (data){
        setDentist(data);
      }
    } catch (error) {
      console.error('Error fetching dentist:', error)
    }
  }

  useEffect(() => {
    getDentist();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>  
      <h1>Detail Dentist {dentist.id} </h1>
      <div className='card' style={{justifyContent: 'center'}}>
        <img src={doctor} alt="imagen doctor" style={{width : '200px'}} />
        <p>{dentist.name}</p>
        <p>{dentist.email}</p>
        <p>{dentist.phone}</p>
        <p>{dentist.website}</p>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default Detail