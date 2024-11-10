import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Summary from "../Components/Summary";
import Counter from "../Components/Counter";
import EmptyCartImage from "../assets/EmptyCart.png"; 
import ProductImage from "../Components/Assets/slider4.jpg"


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
                <div className="ml-2">Product Name</div>
                <div className="ml-64">Price</div>
                <div className="ml-44">Quantity</div>
                <div className="ml-28">Action</div>
              </div>
            )}

            {cart.length === 0 ? (
              <div className="text-center py-6">
                <h3 className="text-xl text-gray-700">
                  Your cart is empty! Click Continue Shopping to add items.
                </h3>
                <img
                  src={EmptyCartImage}
                  alt="Empty Cart"
                  className="mx-auto w-20 h-20 mt-4"
                />
                        <div className="flex items-center justify-between mt-10 p-6 rounded-lg ">
        
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center justify-center ml-64"
            onClick={handleContinueShopping}
          >
            CONTINUE SHOPPING
          </button>
        </div>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4 p-4 border rounded-lg"
                >
                   <img
                  src={ProductImage}
                  alt="Product Image"
                  className="mx-auto w-20 h-20 ml-3"
                />
                  <div className="flex-1 whitespace-normal">
                    <span className="block font-semibold text-gray-800">
                      {item.name}
                    </span>
                  </div>

                  <div>
                    <span className="block text-gray-500 ml-12">
                      ₹{item.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 ml-12">
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


      </div>

      <Footer />
    </div>
  );
};

export default Cart;
