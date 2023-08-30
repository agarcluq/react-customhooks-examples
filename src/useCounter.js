import { useState } from "react";

export function useCounter(intialeCount = 0,itinerator = 1) {
  const [count, setCount] = useState(intialeCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + itinerator);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - itinerator));
  };

  return { count, handleIncrement, handleDecrement };
}
