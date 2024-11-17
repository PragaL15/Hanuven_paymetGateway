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
import ProductImage from "../Components/Assets/slider4.jpg";

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
        <div className="flex flex-col md:flex-row">
          {/* Main Cart Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3">
            {cart.length > 0 ? (
              <>
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 border-b pb-4 mb-4 font-semibold text-gray-600">
                  <div>Product Name</div>
                  <div className="text-center">Price</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-center">Action</div>
                </div>
                {/* Cart Items */}
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-4 items-center gap-4 mb-4 p-4 border rounded-lg"
                  >
                    <div className="flex items-center">
                      <img
                        src={ProductImage}
                        alt="Product"
                        className="w-20 h-20 object-cover mr-4"
                      />
                      <span className="font-semibold text-gray-800">{item.name}</span>
                    </div>
                    <div className="text-gray-500 text-center">
                      ₹{item.price.toFixed(2)}
                    </div>
                    <div className="flex justify-center">
                      <Counter
                        initialCount={item.quantity || 1}
                        onIncrement={() => handleQuantityChange(item.id, 1)}
                        onDecrement={() => handleQuantityChange(item.id, -1)}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        className="px-4 py-2 text-red-500 hover:text-red-600 font-semibold"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              // Empty Cart State
              <div className="text-center py-6">
                <h3 className="text-xl text-gray-700">
                  Your cart is empty! Click Continue Shopping to add items.
                </h3>
                <img
                  src={EmptyCartImage}
                  alt="Empty Cart"
                  className="mx-auto w-20 h-20 mt-4"
                />
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-6"
                  onClick={handleContinueShopping}
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            )}
          </div>

          {/* Summary Section */}
          {cart.length > 0 && (
            <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/3">
              <Summary calculateTotal={calculateTotal} />
              <button
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
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
