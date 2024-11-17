import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { useCart } from './CartContext'; 
import Header from "../Components/Header";
import Summary from '../Components/Summary';

const Checkout = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState({
    street: localStorage.getItem('street') || '',
    city: localStorage.getItem('city') || '',
    zip: localStorage.getItem('zip') || '',
  });
  const [shipping, setShipping] = useState('India');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({});
  const { calculateTotal } = useCart();
  const { cart } = useCart();

  const product = location.state?.product;
  const totalAmount = product ? product.price : calculateTotal();
  const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);

  useEffect(() => {
    const savedValues = {
      email: localStorage.getItem('email') || '',
      name: localStorage.getItem('name') || '',
      address: localStorage.getItem('address') || '',
      shipping: localStorage.getItem('shipping') || 'India',
      contact: localStorage.getItem('contact') || '',
    };
    setEmail(savedValues.email);
    setName(savedValues.name);
    setAddress(savedValues.address);
    setShipping(savedValues.shipping);
    setContact(savedValues.contact);
  }, []);

  const validateFields = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!name) newErrors.name = "Name is required";
    if (!address) newErrors.address = "Address is required";
    if (!contact) newErrors.contact = "Contact number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const orderPlace = () => {
    console.log("Order placed");
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const pay = async () => {
    if (!validateFields()) {
      alert("Please fill in all required fields.");
      return;
    }

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_XVjWmoUyPibZ3l", 
      amount: parseInt(totalAmount * 100), 
      currency: "INR",
      name: name || "Customer", 
      description: "Purchase on E-Commerce Site",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        orderPlace();
      },
      prefill: {
        name: name,
        email: email,
        contact: contact,
      },
      notes: {
        address: address,
      },
      theme: {
        color: "#158993",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <Header />
      <div className="checkout-container flex md:ml-20 py-5 ">
        <div className="checkout-page flex flex-col  min-h-screen py-5 w-full">
          <h1 className="text-2xl font-semibold text-gray-800 mb-5">Billing</h1>
          <div className="checkout-form bg-slate-50 p-6 rounded-lg shadow-md w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800"></h2>
            <div className="form-group mb-4">
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  localStorage.setItem('email', e.target.value);
                  setErrors({ ...errors, email: '' });
                }}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div className="form-group mb-4">
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  localStorage.setItem('name', e.target.value);
                  setErrors({ ...errors, name: '' });
                }}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <div className="form-group mb-4">
              <label className="block text-gray-700 font-medium mb-1">Street Address</label>
              <input
                type="text"
                value={address.street}
                onChange={(e) => {
                  setAddress({ ...address, street: e.target.value });
                  localStorage.setItem('street', e.target.value);
                  setErrors({ ...errors, address: '' });
                }}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="form-group mb-4">
              <label className="block text-gray-700 font-medium mb-1">City</label>
              <input
                type="text"
                value={address.city}
                onChange={(e) => {
                  setAddress({ ...address, city: e.target.value });
                  localStorage.setItem('city', e.target.value);
                  setErrors({ ...errors, address: '' });
                }}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="form-group mb-4">
              <label className="block text-gray-700 font-medium mb-1">Zip Code</label>
              <input
                type="text"
                value={address.zip}
                onChange={(e) => {
                  setAddress({ ...address, zip: e.target.value });
                  localStorage.setItem('zip', e.target.value);
                  setErrors({ ...errors, address: '' });
                }}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="form-group mb-4">
              <label className="block text-gray-700 font-medium mb-1">Country</label>
              <select
                value={shipping}
                onChange={(e) => {
                  setShipping(e.target.value);
                  localStorage.setItem('shipping', e.target.value);
                }}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>
            </div>

            <div className="form-group mb-4">
              <label className="block text-gray-700 font-medium mb-1">Contact Number</label>
              <input
                type="text"
                placeholder="Enter Contact Number"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  localStorage.setItem('contact', e.target.value);
                  setErrors({ ...errors, contact: '' });
                }}
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              />
              {errors.contact && <span className="text-red-500 text-sm">{errors.contact}</span>}
            </div>
            <div className="form-group mb-6">
              <label className="block text-gray-700 font-medium mb-1">Total Amount</label>
              <div className="amount-display text-xl font-semibold text-gray-800">
                ₹{totalAmount.toFixed(2)}
              </div>
            </div>
            <button 
              className="pay-button w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
              onClick={pay}
            >
              Pay Now
            </button>
          </div>
        </div>
        <div className="hidden lg:block md:-ml-96 md:mt-16">
  <Summary calculateTotal={calculateTotal} totalQuantity={totalQuantity} />
</div>
      </div>
    </div>
  );
};

export default Checkout;
