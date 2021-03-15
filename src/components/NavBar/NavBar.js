import React from "react";
import "./navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <div className="containerNav">
      <div className="logo">ONLIGHT - ILUMINACION</div>
      <nav className="nav">
        <a href="/">INICIO</a>
        <a href="/">CATEGORIAS</a>
        <a href="/">CARRITO</a>
      </nav>
      <CartWidget />
    </div>
  );
};
