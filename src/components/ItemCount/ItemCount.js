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
		<button onClick={Aumentar}>+</button>
      <h3>Stock: {stock}</h3>
      <h3>Cantidad Seleccionada: {contador}</h3>
	   <button onClick={Disminuir}>-</button>
		<br/>
      <br/>
		<button onClick={agregarCarrito}>Agregar al Carrito</button>
	</div>
   )
}
