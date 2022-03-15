import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (currentItem) => {
    if (items.some(({ item }) => item.id === currentItem.item.id)) return;
    setItems([...items, currentItem]);
  };

  const removeCartItem = (cartItemID) => {
    setItems(items.filter((item) => item.item.id !== cartItemID ));
  }

  const clearCart = () => {
    setItems([]);
  }

  const getTotalPrice = () =>{ 

    let totalPrice = 0;

    for(let i =0; i<items.length; i++){
        totalPrice = totalPrice + (items[i].quantity * items[i].item.price);
    }

    return totalPrice;
  } 

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        clearCart,
        removeCartItem,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
