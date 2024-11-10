import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductPage from "./Pages/ProductPage";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout"; 
import { CartProvider } from "./Pages/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ProductPage",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/checkout",  
    element: <Checkout />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
