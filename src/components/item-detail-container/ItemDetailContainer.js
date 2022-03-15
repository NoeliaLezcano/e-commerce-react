import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import useProducts from "../../hooks/useProducts";
import ItemCounter from "../item-counter/ItemCounter";
import "./ItemDetailContainer.css";


const ItemDetailContainer = () => {
  
  const { products } = useProducts();
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(0);


  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  const handleAddToCart = () => {
    addItem({
      item: selectedItem,
      quantity,
    });
  };

  return (
    <div id="ItemDetailContainer">
      <h3>Producto seleccionado</h3>
      {selectedItem && selectedItem.image && (
        <img src={selectedItem.image} alt="selectedItemImage" />
      )}
      <p>{selectedItem && selectedItem.title}</p>
      <p>{selectedItem && selectedItem.autor}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>${selectedItem && selectedItem.price}</p>
      <ItemCounter
        stock={selectedItem?.stock || 10}
        initial={1}
        setSotckSelected={setQuantity}
      />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
      <div>
          <Link to='/cart'><button>Ir al carrito</button></Link>
          <Link to='/'><button>Seguir Comprando</button></Link>
      </div>

    </div>
  );
};

export default ItemDetailContainer;