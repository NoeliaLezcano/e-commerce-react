import React, { useEffect, useState } from "react";
import "./ItemCounter.css";

const ItemCounter = ({ stock, initial, setSotckSelected}) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setSotckSelected(counter);
  }, [counter]);

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
        <button id="minusCounter" onClick={minusCounter}> - </button>
        <span>{counter}</span>
        <button id="plusCounter" onClick={plusCounter}> + </button>
      </div>
    </>
  );
};

export default ItemCounter;
