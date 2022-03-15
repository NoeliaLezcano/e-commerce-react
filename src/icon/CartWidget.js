import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import cartSVG from './cart.svg'
import "./CartIcon.css";

const CartIcon = () => {
  const { items } = useContext(CartContext);
  return (
    <div>
      <img className='cart-icon' src={cartSVG} alt='cartSVG'/>
      <span className='cart-icon-counter'>{items.length}</span>
    </div>
  );
};

export default CartIcon;
