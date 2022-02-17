import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { items } = useContext(CartContext);

  return (
    <div>
      <ul>
        {items.map(({ item }) => (
          <li>
            {item.title} - {item.author} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;