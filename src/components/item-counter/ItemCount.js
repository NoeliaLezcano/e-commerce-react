import React, { useEffect, useState } from "react";

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
        <button onClick={minusCounter}> - </button>
        <span>{counter}</span>
        <button onClick={plusCounter}> + </button>
      </div>
    </>
  );
};

export default ItemCounter;
