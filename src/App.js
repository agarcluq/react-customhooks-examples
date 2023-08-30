import React from 'react';
import './style.css';
import { useCounter } from "./useCounter";

const AnotherContador = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(10,2);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Sumar +1</button>
      <button onClick={handleDecrement}>Restar -1</button>
    </div>
  );
};

const Contador = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Sumar +1</button>
      <button onClick={handleDecrement}>Restar -1</button>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Contador/>
      <AnotherContador />
    </div>
  );
}
