import React, { useContext } from 'react'
import Card from '../Components/Card'
import { useState } from 'react';
import { useEffect } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist, setDentist] = useState([]);
  const {theme} = useContext(ContextGlobal)
  console.log('valor del theme', theme);
  const getDentists = async () => {
    try{
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setDentist(data);
    } catch (error) {
      console.error('Error fetching dentists', error);
    }
  }

  useEffect (() =>{
    getDentists();
  }, []);


  return (
    <main className={`main-${theme}`}>
      <h1>Home</h1>
      <div className={`card-grid card-grid-${theme}`}>
        {/* Aqui deberias renderizar las cards */}
        {dentist.length
         ? dentist.map(dentist => (<Card data={dentist} key={dentist.id} />))
         : null
        }
      </div>
    </main>
  );
}

export default Home