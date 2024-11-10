// Counter.jsx
import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Counter = ({ initialCount, onIncrement, onDecrement }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount); // Update count if initialCount changes (e.g., from Cart)
  }, [initialCount]);

  const increment = () => {
    setCount(count + 1);
    onIncrement(); // Call parent increment function
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      onDecrement(); // Call parent decrement function
    }
  };

  return (
    <div className="flex items-center justify-center bg-white p-1 rounded border border-gray-300">
      <button 
        className="bg-white p-1 cursor-pointer focus:outline-none"
        onClick={decrement}
      >
        <RemoveIcon className="text-black text-sm" />
      </button>
      <span className="mx-3 text-lg font-bold">{count}</span>
      <button 
        className="bg-white p-1 cursor-pointer focus:outline-none"
        onClick={increment}
      >
        <AddIcon className="text-black text-sm" />
      </button>
    </div>
  );
};

export default Counter;
