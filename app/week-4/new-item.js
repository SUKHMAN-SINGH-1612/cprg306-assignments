'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="flex flex-col items-center bg-white p-4 shadow rounded w-1/2 mx-auto">
      <div className="text-2xl mb-4 text-black">Quantity: {quantity}</div>
      <div className="flex space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 bg-red-500 rounded disabled:opacity-50"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-blue-300 rounded disabled:opacity-50"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
