import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Summary from "../Components/summary";
import Counter from "../Components/Counter.jsx"; // Import the Counter component

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id, increment) => {
    updateQuantity(id, increment);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  };

  const handleContinueShopping = () => {
    navigate("/ProductPage");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="container mx-auto p-5">
        <div className="flex">
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
            {cart.length > 0 && (
              <div className="grid grid-cols-4 gap-4 border-b pb-4 mb-4 font-semibold text-gray-600">
                <div className="ml-6">Product Name</div>
                <div className="ml-40">Price</div>
                <div className="ml-32">Quantity</div>
                <div className="ml-28">Action</div>
              </div>
            )}

            {cart.length === 0 ? (
              <h3 className="text-center text-xl text-gray-700 py-6">
                Your cart is empty! Click Continue Shopping to add items.
              </h3>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4 p-4 border rounded-lg"
                >
                  <img
                    src={`./src/Components/Assets/slider4.jpg`}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                    onError={() => console.error(`Image failed to load: ${item.image}`)}
                  />
                 <div className="flex-1 ml-4 max-w-[6rem] whitespace-normal">
    <span className="block font-semibold text-gray-800">{item.name}</span>
</div>

                  <div>
                  <span className="block text-gray-500 ml-20">₹{item.price.toFixed(2)}</span>
                    </div>
                  <div className="flex items-center space-x-2 ml-10">
                    <Counter
                      initialCount={item.quantity || 1}
                      onIncrement={() => handleQuantityChange(item.id, 1)}
                      onDecrement={() => handleQuantityChange(item.id, -1)}
                    />
                  </div>
                  <button
                    className="ml-16 px-4 py-2 text-red-500 hover:text-red-600 font-semibold"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="flex flex-col items-end ml-16 space-y-4">
              <Summary calculateTotal={calculateTotal} />
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => navigate("/Checkout")}
              >
                CHECKOUT
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
          <div className="text-gray-700">
            <h4 className="text-lg font-semibold">Continue Shopping</h4>
            <p>Add more items to your cart</p>
          </div>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleContinueShopping}
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
