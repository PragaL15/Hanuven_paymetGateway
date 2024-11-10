
 import Slider from "../Components/Slider";
import Testimonials from "../Components/Testimonials";
import AboutProducts from "../Components/AboutProducts";
import LatestNews from "../Components/LatestNews";
import OurTeam from "../Components/OurTeam";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Testimonials />
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Products</h2>
          <p className="text-center text-gray-600 mb-2">
            Discover our range of natural and effective hair care solutions.
          </p>
        </div>
      </div>
      <Slider />
      <AboutProducts />
      <LatestNews />
      <OurTeam />
      <Footer />
    </>
  );
}