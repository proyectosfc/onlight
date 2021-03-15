import React, { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(initial);

  const Aumentar = () => {
    if (contador >= stock) {
      alert("Sin Stock");
    } else {
      setContador(contador + 1);
    }
  };

  const Disminuir = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const agregarCarrito = () => {
    if (contador <= stock) {
      setContador(contador);
      alert(contador + " producto(s) agregado(s) al carrito!");
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column">
      <span>Stock: {stock}</span>
      <p>Cantidad Seleccionada: {contador}</p>
      <div className="d-flex justify-content-around mb-3 ms-auto me-auto w-25">
        <button className="btn btn-secondary" onClick={Disminuir}>
          -
        </button>
        <button className="btn btn-primary" onClick={Aumentar}>
          +
        </button>
      </div>
      <button onClick={agregarCarrito} className="bnt btn-primary">
        Agregar al Carrito
      </button>
    </div>
  );
};
