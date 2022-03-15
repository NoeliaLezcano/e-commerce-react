import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ id, image, title, author, price}) => {

  return (
    <>
      <div className="eachProduct">
        <img src={image} alt="Image" />
        <h2>Título: {title}</h2>
        <h2>Autor: {author}</h2>
        <h2>Precio: ${price} </h2>
        <button><Link to={`/item/${id}`}>Seleccionar producto</Link></button>
      </div>
      <hr />
    </>
  );
};

export default Item;

