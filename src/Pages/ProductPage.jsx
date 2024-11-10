import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from 'react-router-dom'; 
import Footer from "../Components/Footer";
import Header from "../Components/Header";

// Hardcoded images for the products
const productImages = {
  "01": [
    "src/Components/Assets/slider1.jpg",
    "src/Components/Assets/slider2.jpg",
    "src/Components/Assets/slider3.jpg",
    "src/Components/Assets/slider4.jpg",
  ],
  "02": [
    "src/Components/Assets/slider5.jpg",
    "src/Components/Assets/slider6.jpg",
    "src/Components/Assets/slider7.jpg",
    "src/Components/Assets/slider5.jpg",
  ],
};

// Star Rating Component
const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="text-lg flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="cursor-pointer"
          onClick={() => handleStarClick(star)}
          style={{ color: star <= rating ? "#000000" : "#ccc" }}
        >
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-500">
        <a href="">1,072 Reviews</a>
      </span>
    </div>
  );
};

// Image Carousel Component
const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-xl h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images[currentSlide]}
          alt={`Product Image ${currentSlide + 1}`}
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button className="bg-gray-200 p-2 rounded-full" onClick={handlePrev}>
            ◀
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button className="bg-gray-200 p-2 rounded-full" onClick={handleNext}>
            ▶
          </button>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            className={`cursor-pointer w-20 h-20 object-cover rounded-md ${
              index === currentSlide ? "ring-2 ring-black" : ""
            }`}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

const ProductInfo = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.ProductID, // Use ProductID instead of id
      name: product.ProductName,
      price: parseFloat(product.ProductPrice), // Ensure price is a number
      quantity: quantity,
      image: product.ProductImage || "default-image-url.jpg" // Use a default image if not available
    };
    addToCart(cartItem);
    alert(`${product.ProductName} added to cart!`);
  };


  const handleBuyNow = () => {
    let price;
    if (typeof product.ProductPrice === 'string') {
      // If it's a string, try to remove non-numeric characters and parse
      price = parseFloat(product.ProductPrice.replace(/[^\d.]/g, ''));
    } else if (typeof product.ProductPrice === 'number') {
      // If it's already a number, use it directly
      price = product.ProductPrice;
    } else {
      console.error('Invalid price format:', product.ProductPrice);
      price = 0; // Default to 0 if the price is in an unexpected format
    }

    if (isNaN(price)) {
      console.error('Failed to parse price:', product.ProductPrice);
      price = 0; // Default to 0 if parsing fails
    }

    const productData = {
      product: {
        id: product.ProductID,
        name: product.ProductName,
        price: price,
        quantity: quantity,
        image: product.ProductImage || "default-image-url.jpg",
      }
    };
    console.log("Navigating to checkout with product data:", productData);
    navigate('/checkout', { state: productData });
  };
  
  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
      <h1 className="text-2xl font-semibold font-serif">
        {product.ProductName}
      </h1>
      <p className="text-gray-600 mt-2">{product.ProductDescription}</p>

      <StarRating />

      <div className="text-2xl text-red-600 mt-4">₹{product.ProductPrice}</div>
      <p className="font-bold mt-2">In Stock: {product.quantity || "N/A"}</p>

      <div className="flex items-center mt-4 space-x-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <div className="px-4 py-2 border rounded-md">{quantity}</div>
        <button
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div>

      <button
        className="w-full mt-4 py-2 bg-gray-700 text-white rounded-md hover:bg-black transition-all"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      <div className="flex space-x-4 mt-4">
        <button className="w-full py-2 bg-gray-700 text-white rounded-md hover:bg-black transition-all"
         onClick={handleBuyNow} 
        >
          Buy Now
        </button>
        <button
          className={`w-full py-2 border border-gray-400 rounded-md ${
            isWishlisted ? "bg-black text-white" : ""
          }`}
          onClick={handleWishlist}
        >
          {isWishlisted ? "Wishlisted" : "Wishlist"}
        </button>
      </div>
    </div>
  );
};

// Product Features Component
const ProductFeatures = ({ product }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Product Details</h2>
      <h3 className="font-bold">How to Use:</h3>
      <p className="text-gray-600 mb-4">{product.ProductHowToUse}</p>

      <h3 className="font-bold">Key Features:</h3>
      <ul className="list-disc ml-6 text-gray-600 mb-4">
        {product.ProductKeyFeatures.split(". ").map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h3 className="font-bold">Ingredients:</h3>
      <p className="text-gray-600 mb-4">{product.ProductIngredients}</p>

      <h3 className="font-bold">Description:</h3>
      <p className="text-gray-600">{product.ProductDescription}</p>
    </div>
  );
};

// Product Page Component
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.hanuven.in/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0) return <div>Loading...</div>;

  const currentProduct = products[currentProductIndex];

  const handlePrevProduct = () => {
    setCurrentProductIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6">
        <div className="relative">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
            onClick={handlePrevProduct}
          >
            ◀
          </button>
          <ImageCarousel images={productImages[currentProduct.ProductID]} />
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
            onClick={handleNextProduct}
          >
            ▶
          </button>
        </div>
        <ProductFeatures product={currentProduct} />
        <ProductInfo product={products[currentProductIndex]} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;