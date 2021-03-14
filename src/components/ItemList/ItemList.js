import React from 'react';
import {Item} from '../Item/Item';
//import './ItemList.css;'


export const ItemList = ({items}) => {

  return (
    <React.Fragment>
        {items && items.map(it => <Item key={it.id} item={it} />)}      
    </React.Fragment>
  )
}


