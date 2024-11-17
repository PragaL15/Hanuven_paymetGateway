import React from "react";
import { useNavigate } from "react-router-dom";

const Summary = ({ calculateTotal,totalQuantity }) => {  //use only the small case while using state from other component
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>

      <hr className="border-t border-gray-300 my-4" />

      <div className="grid grid-cols-2 gap-y-5 border-b pb-4">
        <span className="text-gray-600">Total Quantity</span>
        <span className="text-gray-800 font-medium ml-24">{totalQuantity}</span>

        <span className="text-gray-600">Delivery Charge</span>
        <span className="text-gray-800 font-medium ml-24">₹0</span>

        <span className="text-gray-600">Discount</span>
        <span className="text-gray-800 font-medium ml-24">₹0</span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <strong className="text-lg text-gray-800">Grand Total</strong>
        <strong className="text-lg text-gray-900">₹{calculateTotal().toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Summary;
