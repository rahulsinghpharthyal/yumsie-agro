import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Background shows after scrolling 50px
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close all dropdowns when main menu is closed or an item is clicked
  const closeAllDropdowns = () => {
    setAboutOpen(false);
    setProductsOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      // If closing menu, also close dropdowns
      closeAllDropdowns();
    }
  };

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    closeAllDropdowns();
  };

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
        scrolling || menuOpen
          ? "bg-blur/90 backdrop-blur-xl shadow-lg border"
          : "bg-transparent"
      } rounded-4xl w-full max-w-screen-xl z-50 border-white/40 px-4 sm:px-10`}
    >
      <div className="flex justify-between items-center w-full max-w-screen-lg mx-auto">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 object-cover rounded-full border"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="text-black hover:text-blue-600 transition-colors flex items-center">
              About Us
              <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {aboutOpen && (
              <div className="absolute left-0 bg-white rounded-md shadow-lg w-48 py-2 z-20 border border-gray-200">
                <Link
                  to="/about-us"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  Company Infrastructure
                </Link>
                {/* <Link
              to="/about/team"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Our Team
            </Link> */}
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-black hover:text-blue-600 transition-colors flex items-center">
              Products
              <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {productsOpen && (
              
              <div className="absolute left-0 bg-white rounded-md shadow-lg w-40 py-2 z-20 border border-gray-200">
                <Link
                  to="/products/pickles"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  Pickles
                </Link>
                <Link
                  to="/products/tomato-ketchup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Tomato Ketchup
                </Link>
                <Link
                  to="/products/culinary-sauces-vinegar"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Culinary sauces & vinegar 
                </Link>
                <Link
                  to="/products/speciality-sauce"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Speciality sauce
                </Link>
                <Link
                  to="/products/mayonnaise-derivatives"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Mayonnaise & derivatives
                </Link>
                <Link
                  to="/products/cooking-paste"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Cooking paste 

                </Link>
                <Link
                  to="/products/canned-food"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                 Can food

                </Link>
              </div>
            )}
          </div>

          <Link
            to="/horeca"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Horeca
          </Link>
{/* 
          <Link
            to="/blogs"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Blog
          </Link> */}
          <Link
            to="/manufacturing-facility"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Manufacturing Facility
          </Link>
          <Link
            to="/contact-us"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 z-50 hover:cursor-pointer" // Ensure button is above mobile menu
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            to="/"
            className="block py-2 text-black hover:text-blue-600 transition-colors"
            onClick={handleMobileLinkClick}
          >
            Home
          </Link>

          {/* About Dropdown (click toggle) */}
          <div>
            <button
              onClick={() => {
                setAboutOpen(!aboutOpen);
                setProductsOpen(false);
              }}
              aria-expanded={aboutOpen}
              className="flex justify-between items-center w-full py-2 text-black hover:text-blue-600 transition-colors"
            >
              About Us
              <svg
                className={`w-4 h-4 ml-1 fill-current transform transition-transform ${
                  aboutOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {aboutOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  to="/about-us"
                  className="flex justify-between items-center w-full py-2 text-black hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Company Infrastructure
                </Link>
                {/* <Link to="/about/team" className="block text-sm text-gray-700">
              Our Team
            </Link> */}
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div>
            <button
              onClick={() => {
                setProductsOpen(!productsOpen);
                setAboutOpen(false);
              }}
              className="flex justify-between items-center w-full py-2 text-black hover:text-blue-600 transition-colors"
              aria-expanded={productsOpen}
            >
              Products
              <svg
                className={`w-4 h-4 ml-1 fill-current transform transition-transform ${
                  productsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {productsOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  to="/products/pickles"
                  className="flex justify-between items-center w-full py-2 text-black hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                 Pickles
                </Link>
                <Link
                  to="/products/tomato-ketchup"
                  className="flex justify-between items-center w-full py-2 text-black hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Tomato Ketchup
                </Link>
                <Link
                  to="/products/culinary-sauces-vinegar"
                  className="flex justify-between items-center w-full py-2 text-black hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Culinary sauces & vinegar 
                </Link>
                <Link
                  to="/products/speciality-sauce"
                  className="flex justify-between items-center w-full py-2 text-black hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Speciality sauce
                </Link>
                <Link
                  to="/products/mayonnaise-derivatives"
                  className="flex justify-between items-center w-full py-2 text-black hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Mayonnaise & derivatives
                </Link>
                <Link
                  to="/products/cooking-paste"
                  className="flex justify-between items-center w-full py-2 text-black hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Cooking paste 

                </Link>
                <Link
                  to="/products/canned-food"
                  className="flex justify-between items-center w-full py-2 text-black hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                 Can food

                </Link>
              </div>
            )}
          </div>

          <Link
            to="/horeca"
            className="block py-2 text-black hover:text-blue-600 transition-colors"
            onClick={handleMobileLinkClick}
          >
            Horeca
          </Link>
          <Link
            to="/manufacturing-facility"
            className="block py-2 text-black hover:text-blue-600 transition-colors"
            onClick={handleMobileLinkClick}
          >
            Manufacturing Facility
          </Link>
          <Link
            to="/contact-us"
            className="block py-2 text-black hover:text-blue-600 transition-colors"
            onClick={handleMobileLinkClick}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
