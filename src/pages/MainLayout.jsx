import { Outlet } from "react-router-dom";

// Components:
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 overflow-x-hidden">
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center w-full">
        <div className="w-full">
          <Outlet />
        </div>
      </main>

      <Footer />
      {/* Floating WhatsApp Button */}
      {/* <a
        href="https://wa.me/916397104144?text=Hello%20Yusime%20Agro%2C%20I%20am%20interested%20in%20your%20products.%20Please%20share%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a> */}
    </div>
  );
};

export default MainLayout;
