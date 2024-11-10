import {
  faFacebookF,
  faXTwitter,
  faYoutube,
  faPinterestP,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const socialLinks = [
    { icon: faFacebookF, url: 'https://www.facebook.com/profile.php?id=61565136075902' },
    { icon: faXTwitter, url: 'https://x.com/hanuven' },
    { icon: faYoutube, url: 'https://youtube.com/@hanvenhealthcareproducts?si=ILNDPsx_w-hFf0V2' },
    { icon: faPinterestP, url: 'https://pin.it/5DC3weDoI' },
    { icon: faInstagram, url: 'https://www.instagram.com/hanuven/' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="text-center text-sm text-gray-600">
            We would love to hear from you! Fill out the form below.
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">Or connect with us on social media:</p>
          <div className="flex justify-center space-x-6 mt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600"
              >
                <FontAwesomeIcon icon={link.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;