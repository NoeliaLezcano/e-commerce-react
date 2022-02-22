import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { items, clearCart, removeCartItem, getTotalPrice } = useContext(CartContext);

  console.log(items.length);

  if (items.length == 0){
    return(
      <div>
          <h1>El carrito esta vacío</h1>
          <div>
          <Link to='/'><button>Seguir Comprando</button></Link>
          </div>
      </div>
    )
  }

  const handleRemove = (cartItemID) => {
    console.log(cartItemID);
    removeCartItem(cartItemID);
  }

  const handleClear = () => {
    clearCart();
  }

  const handleSubmit = () => {
    alert("Compra realizada");
    clearCart();
  }



  return (
    <div>
      <ul>
        {items.map(({ item, quantity }) => (
          <li>
            {item.title} - {item.author} - ${item.price} - Cantidad: {quantity}
            <button onClick={() =>handleRemove(item.id)}> X </button>
          </li>
        ))}
        <h3>Precio total: ${getTotalPrice(items)}</h3>
        <button onClick={handleClear}>Eliminar carrito</button>
        <button onClick={handleSubmit}>Terminar compra</button>
      </ul>
    </div>
  );
};

export default Cart;