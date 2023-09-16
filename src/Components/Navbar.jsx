import React from 'react';
import { useContext } from "react";
import { ContextGlobal } from './utils/global.context';
import '../index.css'
import logo from'../images/DH.png'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ContextGlobal);
  console.log("valor del theme", theme);
  return (
    <div className='container'>
        <img src={logo} alt="" style={{width: "300px"}}/>
      <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <ul className="nav-links" type= "none">
          <li><a href="/">Home</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/favs">Favs</a></li>
        </ul>
      </nav> 
          <button onClick={handleChangeTheme} style={{background: theme.background, color: theme.font }}>
            Cambiar tema
            </button>
    </div>
  )
}

export default Navbar