import React from 'react';
import { ItemCount } from '../../components/ItemCount/ItemCount';
//import './Item.css';

export const Item = ({item}) => {

  return (
    <React.Fragment>
      {/*<div>{item.title} {item.description}</div>*/}
      <br></br>           
      <div className="card-image">
        <img src={item.pictureUrl} className="img-responsive" />
      </div>
      <div className="card-header">
        <div className="card-title h5">{item.title}</div>
        <div className="card-subtitle text-gray">${item.price}</div>
      </div>
      <div><ItemCount stock={15} initial={1}/></div>
      {/*<div className="card-footer">
        <button className="btn btn-primary">Agregar al carrito</button>
  </div>*/}      
    </React.Fragment>
  )
}