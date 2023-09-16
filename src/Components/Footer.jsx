import React from 'react'
import digital from"../images/DH.png"
import facebook from "../images/ico-facebook.png"
import instagram from "../images/ico-instagram.png"
import tiktok from "../images/ico-tiktok.png"
import whatsapp from "../images/ico-whatsapp.png"

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Powered by</p>
        <img src={digital} alt='DH-logo' />
        <div>
        <img src={facebook} alt="" style={{width : '30px', height: '30px'}}/>
        <img src={instagram} alt="" style={{width : '30px', height: '30px'}}/>
        <img src={tiktok} alt="" style={{width : '30px', height: '30px'}} />
        <img src={whatsapp} alt="" style={{width : '30px', height: '30px'}} />
        </div>
    </footer>
  )
}

export default Footer
