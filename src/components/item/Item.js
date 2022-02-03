import { useState } from "react";
import ItemCounter from "../item-counter/ItemCount";

const Item = ({ id, title, author, description, price, stock, setSelectedItem }) => {
  const [sotckSelected, setSotckSelected] = useState(0);

  const selectItem = () =>
    setSelectedItem({ id, title, author, description, price, stock: sotckSelected });

  return (
    <>
      <div>
        <h2>Título: {title}</h2>
        <h2>Autor: {author}</h2>
        <h2>Descripción: {description}</h2>
        <h2>Precio: ${price} </h2>
        <ItemCounter stock={stock} initial={1} setSotckSelected={setSotckSelected} />
        <button onClick={selectItem}>Seleccionar producto</button>
      </div>
      <hr />
    </>
  );
};

export default Item;

