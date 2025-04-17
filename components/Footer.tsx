import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter, // Use faXTwitter for the new X (formerly Twitter)
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#14121F] text-white py-8">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-9">
        {/* Logo */}
        <div className="flex items-center space-x-2 ml-[-10px]"> {/* Adjusted margin to align left */}
          <Image
            src="/red-bike.svg" 
            alt="Logo"
            width={36} // Adjusted size for better proportion
            height={36}
            className="h-9 w-9" // Ensures consistent sizing
          />
          <span className="text-lg font-medium text-[#E2DDFE]">Bike Bliss</span> {/* Updated font size and color */}
        </div>

        {/* Links (Features, Testimonials, FAQs) */}
        <nav className="flex space-x-8 mt-4 md:mt-0">
          <Link href="#features" className="text-gray-400 hover:text-secondary transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-400 hover:text-secondary transition-colors">
            Testimonials
          </Link>
          <Link href="#faq" className="text-gray-400 hover:text-secondary transition-colors">
            FAQs
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Facebook */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-secondary transition-transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" className="w-6 h-6" />
          </a>

          {/* Instagram */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-secondary transition-transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" className="w-6 h-6" />
          </a>

          {/* X (formerly Twitter) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-secondary transition-transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-secondary transition-transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 my-8">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-center space-x-8 text-gray-400 mt-8">
          <Link href="/privacy-policy" className="hover:text-secondary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-secondary transition-colors">
            Terms of Service
          </Link>
          <Link href="/cookie-settings" className="hover:text-secondary transition-colors">
            Cookies Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;