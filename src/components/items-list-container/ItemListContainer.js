import { useState } from "react";
import Item from "../item/Item";

const items = [
    { id: "1", name: "El bosque de las cosas perdidas", price: "1820.00", author: "Ernshaw Shea" },
    { id: "2", name: "Catedrales", price: "2550.99", author: "Piñeiro Claudia" },
    { id: "3", name: "Strange", price: "2199.00", author: "Mirez Alex" },
    { id: "4", name: "La paciente silencionsa", price: "3100.00", author: "Michaelides Alex" },
  ];

const ItemListContainer = () => {
    const[selectedItem, setSelectedItem] = useState (null);

  return (
      <div>
        <h3>Producto seleccionado: </h3>
        <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
        <p>{selectedItem ? selectedItem.price : "Ninguno"}</p>
        <p>{selectedItem ? selectedItem.id : "Ninguno"}</p>
        <hr />
        {items.map(({id, name,author, price}) => (
            <Item 
                key={id}
                id = {id}
                name={name} 
                author={author}
                price={price}
                setSelectedItem={setSelectedItem}
            />
        ))}

      </div>
    );
};

export default ItemListContainer;
