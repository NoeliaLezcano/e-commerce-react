import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemCount from "../item-counter/ItemCount";

const ItemDetailContainer = () => {
  const { products } = useProducts();
  const { id } = useParams();

  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  const onAdd = (counter) => {
    console.log({ ...selectedItem, quantity: counter })
    alert(`Agregaste: ${counter} articulos`)
}

  return (
    <div>
      <h3>Producto seleccionado</h3>
      {selectedItem && selectedItem.image && (
        <img src={selectedItem.image} alt="selectedItemImage" />
      )}
      <p>{selectedItem && selectedItem.title}</p>
      <p>{selectedItem && selectedItem.autor}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>${selectedItem && selectedItem.price}</p>
      <ItemCount stock={selectedItem && selectedItem.stock} initial={1} onAdd={onAdd}  /> 
      <div>
          <Link to='/cart'><button>Terminar la Compra</button></Link>
          <Link to='/'><button>Seguir Comprando</button></Link>
      </div>

    </div>
  );
};

export default ItemDetailContainer;