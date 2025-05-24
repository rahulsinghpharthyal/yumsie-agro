import React, { useState } from "react";
import SocialLinkOption from "../components/ContactUs/SocialLinkOption";
import { contacts } from "../config/constant";

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
    <section className="text-center py-16 mt-10 px-5">
      <div className="mb-10">
        <img
          src="https://kapilanandagro.com/wp-content/uploads/2023/06/Kaapl-contact-us.jpg"
          alt="Contact Us Banner"
          className="mx-auto w-full shadow-md"
        />
      </div>
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-left">
          Get In Touch With Our Team
        </h1>
        <p className="text-gray-600 mt-2 text-left">
          Thank you for your interest in our company. We are always delighted to
          hear from you! Please do not hesitate to contact us if you have any
          questions, comments, or recommendations.
        </p>
        <p className="text-gray-600 mt-2 text-left">
          Our team is committed to delivering high-quality solutions that meet
          the specific requirements of our B2B clients. We are dedicated to
          helping our clients improve their culinary creations and delight their
          customers
        </p>
      </div>

      <SocialLinkOption contacts={contacts} />

      <div className="bg-gray-50 p-10 max-w-4xl mx-auto rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col flex-1">
              <label className="font-bold text-left text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="border rounded px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-bold text-left text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="border rounded px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="text-left">
            <label className="font-bold text-left text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter subject"
              className="w-full border rounded px-4 py-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="text-left">
            <label className="font-bold text-left text-gray-700 mb-1">
              Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full border rounded px-4 py-3 h-36 resize-y focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-10 py-6 rounded-4xl shadow transition-all hover:cursor-pointer"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Message"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266030.4014813481!2d77.47257226630136!3d12.951174118925985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1745840997330!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="w-full rounded-lg mt-8 border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
