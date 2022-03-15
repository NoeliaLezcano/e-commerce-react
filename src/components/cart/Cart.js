import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import "./Cart.css";

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
    removeCartItem(cartItemID);
  }

  const handleClear = () => {
    clearCart();
  }

  const sendOrder = () => {

    if(buyer.name == '' || buyer.email == '' || buyer.phone == ''){
      alert("Completa tus datos para realizar la compra.");
      return;
    } 

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
    <div className="carrito">  
        {items.map(({ item, quantity }) => (
          <li className="producto">
            <img src={item.image} alt="Image" />
            <h5>{item.title}</h5>
            <h5>{item.author}</h5>
            <h5>${item.price}</h5>
            <h5>Cantidad: {quantity}</h5>
            <button onClick={() =>handleRemove(item.id)}> X </button>
          </li>
        ))}
        <h3 className="precioTotal">Precio total: ${getTotalPrice()}</h3>
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
      {orderId && (
        <h1 className="idCompra">Compra realizada. El id de tu compra es: {orderId}</h1>
      )}
    </div>
  );
};

export default Cart;