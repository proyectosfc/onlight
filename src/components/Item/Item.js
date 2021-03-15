import React from "react";
import { ItemCount } from "../../components/ItemCount/ItemCount";

export const Item = ({ item }) => {
  return (
    <div className="m-3 card item-product" style={{ flexBasis: "26.33%" }}>
      <div className="card-image">
        <img
          src={item.pictureUrl}
          className="img-responsive"
          alt={item.tile}
          width="180px"
        />
      </div>
      <div className="card-header">
        <div className="card-title h5 text-start">{item.title}</div>
        <div className="card-subtitle text-gray text-start">${item.price}</div>
        <div className="card-subtitle text-gray text-start mt-2">
          {item.title} {item.description}
        </div>
      </div>
      <ItemCount stock={15} initial={1} />
    </div>
  );
};
