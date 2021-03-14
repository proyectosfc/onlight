//import React from 'react'
import React, { useState, useEffect } from 'react'
//import { ItemCount } from '../../components/ItemCount/ItemCount';
import { ItemList } from '../../components/ItemList/ItemList'
//import './ItemListContainer.css'

const items = [
	{
		id: 100001,
		title: "Led 10w",
		description: "Luz led bajo consumo",
		price: "50.000",
		pictureUrl: "https://www.miamishop.com.uy/imgs/productos/productos31_158989.jpg"
	},
	{
		id: 100002,
		title: "Led 120w",
		description: "Luz led 120w",
		price: "120.000",
		pictureUrl: "https://www.miamishop.com.uy/imgs/productos/productos35_158994.jpg"
	},
	{
		id: 100003,
		title: "Led alta potencia",
		description: "Luz led alta potencia",
		price: "350.000",
		pictureUrl: "https://www.miamishop.com.uy/imgs/productos/productos35_158986.jpg"
	},
	{
		id: 100004,
		title: "Luz fria exterior",
		description: "Luz fria exterior bajo consumo",
		price: "240.000",
		pictureUrl: "https://www.miamishop.com.uy/imgs/productos/productos35_160001.jpg"
	},
	{
		id: 100005,
		title: "Luz calida interior",
		description: "Luz calida interior basjo consumo",
		price: "210.000",
		pictureUrl: "https://www.miamishop.com.uy/imgs/productos/productos35_158709.jpg"
	}
]



export const ItemListContainer = ({greeting}) => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		const call = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(items)
			}, 2000)
		})
	
		call.then((response) => {
			console.log(response)
			setProducts(response)			
		})
	},[])

	//useEffect(() => {
	//	console.log(products)
	//},[products])	
	
	return (
		<div>
			<p>{greeting}</p>

			{/*<ItemCount stock={15} initial={1}/>*/}
			<ItemList items={products} />

		</div>
	
	)	
}