import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore";

const Cart = () => {
  const { items, clearCart, removeCartItem, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({
    name: "",
    email : "",
    phone : "",
  });

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

  const sendOrder = () => {
    const order = {
      buyer : buyer,
      items : items,
      total : getTotalPrice()
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));

  };


  return (
    <div>
      <ul>
        {items.map(({ item, quantity }) => (
          <li>
            {item.title} - {item.author} - ${item.price} - Cantidad: {quantity}
            <button onClick={() =>handleRemove(item.id)}> X </button>
          </li>
        ))}
        <h3>Precio total: ${getTotalPrice()}</h3>
        <form>
          <label>Nombre:
            <input
              type="text" 
              value={buyer.name}
              name="name"
              onChange={(e) => setBuyer({...buyer, name: e.target.value})}
            />
          </label>
          <label>Email:
            <input
              type="text" 
              value={buyer.email}
              name="email"
              onChange={(e) => setBuyer({...buyer, email: e.target.value})}
            />
          </label>
          <label>Teléfono:
            <input
              type="text" 
              value={buyer.phone}
              name="phone"
              onChange={(e) => setBuyer({...buyer, phone: e.target.value})}
            />
          </label>
        </form>
        <button onClick={handleClear}>Eliminar carrito</button>
        <button onClick={sendOrder}>Terminar compra</button>
      </ul>
      {orderId && (
        <h1>Compra realizada. El id de tu compra es: {orderId}</h1>
      )}
    </div>
  );
};

export default Cart;