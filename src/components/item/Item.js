import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../item-counter/ItemCount";

const Item = ({ id, image, title, author, description, price, stock}) => {
  const [sotckSelected, setSotckSelected] = useState(0);


  return (
    <>
      <div>
        <img src={image} alt="Image" />
        <h2>Título: {title}</h2>
        <h2>Autor: {author}</h2>
        <h2>Precio: ${price} </h2>
     {/*   <ItemCounter stock={stock} initial={1} setSotckSelected={setSotckSelected} />  */}
        <Link to={`/item/${id}`}>Seleccionar producto</Link>
      </div>
      <hr />
    </>
  );
};

export default Item;

