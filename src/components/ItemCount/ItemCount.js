import React, {useState} from "react";

export const ItemCount = ({stock, initial}) => {

const [contador, setContador] = useState(initial);

const Aumentar = () => {
   if(contador >= stock) {
      alert ('Sin Stock');
   }  else{ 
      setContador(contador+1)	
      }   
}

const Disminuir = () => {
   if(contador > 1) {
      setContador(contador-1)
   }	
}

const agregarCarrito = () => {
   if (contador <= stock) {
      setContador(contador);
      alert(contador + " producto(s) agregado(s) al carrito!")
   }   
}

/*
const resetContador = () => {
	setContador(1)
}
*/

    
   return (
	<div>	 		
      <h5>Stock: {stock}</h5>
      <h5>Cantidad Seleccionada: {contador}</h5>
	   <button onClick={Disminuir}>-</button> <button onClick={Aumentar}>+</button>
		<br/><br/>
		<button onClick={agregarCarrito}>Agregar al Carrito</button>
      <br/>
      <br/>
      <br/>
      <br/>
	</div>
   )
}
