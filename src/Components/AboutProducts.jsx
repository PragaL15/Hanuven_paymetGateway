import slider from '../Components/Assets/slider1.jpg';
import { useNavigate } from "react-router-dom";

function AboutProducts() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-16" id="about">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">About Our Products</h2>
        <p className="text-lg text-gray-600 mb-8">Natural and Effective Skin Care Solutions</p>
        <div className="flex items-center gap-10">
          <div className="flex-1">
            <p className="mb-4 leading-relaxed">
              Our skin care products are crafted with the finest natural ingredients to nourish and rejuvenate your skin. We believe in harnessing the power of nature to provide effective, gentle care for all skin types.
            </p>
            <p className="mb-4 leading-relaxed">
              From our signature Skin Care Oil to our specialized Hair Oil, each product is designed to enhance your natural beauty and promote healthy, glowing skin.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 text-lg rounded transition duration-300 hover:bg-blue-500" onClick={() => navigate("/ProductPage")}>
              Shop
            </button>
          </div>
          <div className="flex-1">
            <img
              src={slider}
              alt="Product Showcase"
              className="max-w-full rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProducts;
