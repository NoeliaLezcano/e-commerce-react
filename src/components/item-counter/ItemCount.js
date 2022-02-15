import React, { useEffect, useState } from "react";

const ItemCounter = ({ stock, initial, setSotckSelected, onAdd}) => {
  const [counter, setCounter] = useState(initial);

  const minusCounter = () => {
    if (counter <= initial) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };


  return (
    <>
      <div>
        <h1 > {counter}   </h1>
        <button onClick={minusCounter}> - </button>
        <button onClick={() => onAdd(counter)} disabled={counter < 1 && 'disabled'}> Agregar al Carrito </button>
        <button onClick={plusCounter}> + </button>
      </div>
    </>
  );
};

export default ItemCounter;
