import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {items.length ? (
        items.map((product) => <Item key={product.id} item={product} />)
      ) : (
        <div>
          <h3>Cargando</h3>
        </div>
      )}
    </div>
  );
};
