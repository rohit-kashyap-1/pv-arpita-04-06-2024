
import { useState } from 'react';

function Counter() {
  let [counter, setCounter] = useState(0)

  const decrement = () => {
    setCounter(--counter)
  }

  const increment = () => {
    //counter++

    setCounter(++counter)
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
