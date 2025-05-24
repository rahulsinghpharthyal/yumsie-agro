import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F151C] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Who We Are !</h3>
          <div className="h-1 w-16 bg-teal-400 mb-4 rounded"></div>
          <p className="text-gray-300 leading-relaxed">
            Since 2019, Yumsie Agro Foods is a trusted name in food manufacturing,
            delivering authentic Indian flavors with uncompromising quality.
            From pickles and sauces to pastes and preserves, we bring farm-fresh
            ingredients, time-tested recipes, and modern food tech to your
            table—nationwide.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-500 hover:scale-110 transition">
              <FaFacebookF size={22} />
            </a>
            <a href="#" className="text-pink-500 hover:scale-110 transition">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="text-red-600 hover:scale-110 transition">
              <FaYoutube size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
          <div className="h-1 w-16 bg-teal-400 mb-4 rounded"></div>
          <ul className="space-y-2 text-gray-300">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about-us" },
              { name: "Blog", path: "/blogs" },
              { name: "Contact", path: "/contact-us" },
              // { name: "Privacy Policy", path: "/privacy-policy" },
            ].map((link) => (
              <li
                key={link}
                className="flex items-center gap-1 hover:text-white"
              >
                <IoIosArrowForward size={14} />
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <HiOutlinePhone size={30} className="text-cyan-600" />
            <div>
              <p className="text-white font-semibold">09690002643</p>
              <p className="text-gray-400">Mon–Sun 9am–6pm</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <HiOutlineMail size={30} className="text-cyan-600" />
            <div>
              {/* <p >info@yusimeagro.com</p> */}
              <a
                href="mailto:support@infoyusimieagro.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold"
              >
                info@yusimeagro.com
              </a>
              <p className="text-gray-400">Customer support</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaLocationDot size={30} className="text-cyan-600" />
            <div>
              <p className="text-white font-semibold">
                Rudrapur, Uttarakhand, INDIA
              </p>
              <p className="text-gray-400">Yusime Agro</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end px-6 pb-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white cursor-pointer bg-cyan-600 hover:bg-cyan-700 p-3 rounded-full shadow-lg transition transform hover:scale-110"
          aria-label="Scroll to Top"
        >
          <BsFillCloudArrowUpFill size={24} />
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-xs">
        Copyright © {new Date().getFullYear()} All Rights Reserved by{" "}
        <span className="text-white font-medium">Yusime Agro</span> | Design &
        Developed by{" "}
        <a
          href="https://rahulsinghpharthyal.netlify.app/"
          className="text-white hover:underline"
        >
          rahul singh pharthyal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
