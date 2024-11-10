import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../Components/Assets/logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-100 py-5 px-6 md:px-10">
      <nav className="flex items-center justify-between flex-wrap">
        <div className="flex items-center space-x-4">
          <div className="logo cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 pr-10 w-72 rounded-full border border-gray-300"
            />
            <i className="fas fa-search absolute right-4 text-gray-500"></i>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button
            className="font-bold text-lg text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="font-bold text-lg text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={() => navigate("/ProductPage")}
          >
            Shop
          </button>
          <ScrollLink to="about" smooth={true} duration={500}>
            <button className="font-bold text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              About
            </button>
          </ScrollLink>
          <ScrollLink to="news" smooth={true} duration={500}>
            <button className="font-bold text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              News
            </button>
          </ScrollLink>
          <RouterLink to="/contact">
            <button className="font-bold text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              Contact
            </button>
          </RouterLink>
        </div>

        <div className="flex items-center space-x-4">
          <RouterLink to="/cart">
            <button className="text-gray-700 hover:text-blue-500 transition duration-300">
              <i className="fas fa-shopping-cart text-xl"></i>
            </button>
          </RouterLink>
          <RouterLink to="/profile">
            <button className="text-gray-700 hover:text-blue-500 transition duration-300">
              <i className="fas fa-user text-xl"></i>
            </button>
          </RouterLink>
        </div>
      </nav>
      
      {/* <div className="md:hidden mt-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pr-10 w-full rounded-full border border-gray-300"
          />
          <i className="fas fa-search absolute right-4 text-gray-500"></i>
        </div>
      </div> */}
    </header>
  );
}

export default Header;