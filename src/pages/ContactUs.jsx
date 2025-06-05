import React, { useState } from "react";
import SocialLinkOption from "../components/ContactUs/SocialLinkOption";
import { contacts } from "../config/constant";
import banner from "../assets/Contactus.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Update formData state on input change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit form data to Netlify serverless function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      console.log("this is form data", formData);
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      console.log("this is response", res);
      const data = await res.json();
      if (res.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed: " + data.message);
      }
    } catch (err) {
      alert("Error sending message.");
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="text-center py-8 md:py-16 mt-20 md:mt-10 px-4 md:px-30">
      {/* <div className="mb-10">
        <img
          src={banner}
          alt="Contact Us Banner"
          className="mx-auto w-full shadow-md"
        />
      </div> */}
      <div className="mb-6 md:mb-10 mx-4 md:mx-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-left">
          Get In Touch With Our Team
        </h1>
        <p className="text-gray-600 mt-2 text-left text-sm md:text-base">
          Thank you for your interest in our company. We are always delighted to
          hear from you! Please do not hesitate to contact us if you have any
          questions, comments, or recommendations.
        </p>
        <p className="text-gray-600 mt-2 text-left text-sm md:text-base">
          Our team is committed to delivering high-quality solutions that meet
          the specific requirements of our B2B clients. We are dedicated to
          helping our clients improve their culinary creations and delight their
          customers
        </p>
      </div>

      <SocialLinkOption contacts={contacts} />

      <div className="bg-gray-50 p-4 sm:p-6 md:p-10 max-w-4xl mx-auto rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex flex-col flex-1">
              <label className="font-bold text-left text-gray-700 mb-1 text-sm md:text-base">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="border rounded px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:border-blue-500 text-sm md:text-base"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-bold text-left text-gray-700 mb-1 text-sm md:text-base">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="border rounded px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:border-blue-500 text-sm md:text-base"
              />
            </div>
          </div>

          <div className="text-left">
            <label className="font-bold text-left text-gray-700 mb-1 text-sm md:text-base">
              Phone
            </label>
            <input
              type="Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter phone number"
              className="w-full border rounded px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:border-blue-500 text-sm md:text-base"
            />
          </div>

          <div className="text-left">
            <label className="font-bold text-left text-gray-700 mb-1 text-sm md:text-base">
              Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full border rounded px-3 md:px-4 py-2 md:py-3 h-24 md:h-36 resize-y focus:outline-none focus:border-blue-500 text-sm md:text-base"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-6 md:px-10 py-3 md:py-4 rounded-lg md:rounded-4xl shadow transition-all hover:cursor-pointer text-sm md:text-base"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Message"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6 md:mt-10 px-4 md:px-0">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55839.533531637215!2d79.3543542483306!3d28.98823492063651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07f9567c1f745%3A0xdffe5c8738783baf!2sRudrapur%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1748426483207!5m2!1sen!2sin"
          width="100%"
          height="300"
          className="w-full rounded-lg mt-4 md:mt-8 border-0 md:h-[400px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
