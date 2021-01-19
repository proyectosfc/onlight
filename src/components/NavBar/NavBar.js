import React from 'react'
import './navbar.css'
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    
   return (
	<div className='containerNav'>
	 <div className='logo'>
		ONLIGHT - ILUMINACION
	 </div>
	 <p><a href="#">INICIO</a></p>
	 <p><a href="#">CATEGORIAS</a></p>
	 <p><a href="#">CARRITO</a></p>
	 <CartWidget />
	</div>
   )
}