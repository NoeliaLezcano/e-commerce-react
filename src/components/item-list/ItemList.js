import React from 'react'
import Item from "../item/Item";

const ItemList = ({ productos, setSelectedItem }) => {

    return (

        <div>

            {
                productos.map((producto) => <Item key={producto.id} {...producto} setSelectedItem={setSelectedItem}/>)
            }

        </div>
    )
}

export default ItemList