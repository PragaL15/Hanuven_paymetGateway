import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faYoutube,
  faPinterestP,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../Components/Assets/logo.png";

const Footer = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/ProductPage" },
    { name: "News", path: "/news" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: faFacebookF,
      url: "https://www.facebook.com/profile.php?id=61565136075902",
    },
    { icon: faXTwitter, url: "https://x.com/hanuven" },
    {
      icon: faYoutube,
      url: "https://youtube.com/@hanvenhealthcareproducts?si=ILNDPsx_w-hFf0V2",
    },
    { icon: faPinterestP, url: "https://pin.it/5DC3weDoI" },
    { icon: faInstagram, url: "https://www.instagram.com/hanuven/" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">
              Tell us what you think...
            </h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-lg">
              Contact us
            </button>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Sitemap</h3>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link
                    to={page.path}
                    className="hover:text-blue-400 cursor-pointer transition duration-300"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <img
                src={Logo}
                alt="Logo"
                className="h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Follow us</h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-blue-400 transition duration-300"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 text-center text-sm">
          <p>&copy; 2024 All Rights Reserved Hanuven</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
