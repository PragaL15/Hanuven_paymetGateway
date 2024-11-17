import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
      {/* Decrement Button */}
      <button
        className="bg-white p-1 focus:outline-none cursor-pointer 
                   sm:p-2" // Larger padding for screens >= sm
        onClick={decrement}
      >
        <RemoveIcon
          className="text-black hover:bg-yellow-100 rounded-full"
          style={{
            width: "0.75rem", // Smaller icon size for mobile
            height: "0.75rem",
          }}
        />
      </button>

      {/* Count Display */}
      <span className="mx-2 text-sm sm:text-lg">{count}</span> {/* Smaller font size for mobile */}

      {/* Increment Button */}
      <button
        className="bg-white p-1 focus:outline-none cursor-pointer 
                   sm:p-2" // Larger padding for screens >= sm
        onClick={increment}
      >
        <AddIcon
          className="text-black hover:bg-yellow-100 rounded-full"
          style={{
            width: "0.75rem", // Smaller icon size for mobile
            height: "0.75rem",
          }}
        />
      </button>
    </div>
  );
};

export default Counter;
