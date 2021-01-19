import React, {useState, useEffect} from "react";

export const ItemCount = () => {


const [contador, setContador] = useState(1);

const Aumentar = () => {
	setContador(contador+1)	
}

const Disminuir = () => {
	setContador(contador-1)	
}

/*
const Disminuir = () => {
      if(this.useState.contador == 0){
        this.setContador({
            contador:0
        });
      }else {
        this.setContador({
            contador: this.useState.contador - 1
        });
      }
}
*/

const resetContador = () => {
	setContador(1)
}


    
   return (
	<div>
	 <div>
		<p>Número:</p>
       
       <button onClick={Aumentar}>+</button>
	   <button onClick={Disminuir}>-</button>
		<div> {contador} </div>
		<button onClick={resetContador}>Reset</button>
	 </div>
	</div>
   )
}
