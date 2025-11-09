import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setStatus("Message sent successfully! ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen pb-20 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 items-start">
        
        {/* Left Side: Header & Info */}
        <div className="md:w-1/2 bg-gradient-to-tr from-gray-800 via-gray-900 to-black rounded-3xl p-10 shadow-lg border border-gray-700">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-400">
            Contact Whitmore
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Have questions or feedback? Send us a message and our team will get back to you promptly.
          </p>

          <div className="mt-8 space-y-3 text-gray-400">
            <p>📧 Email: <span className="text-indigo-400 font-semibold">support@whitmore.com</span></p>
            <p>📞 Phone: <span className="text-indigo-400 font-semibold">+62 812-3456-7890</span></p>
            <p>📍 Address: <span className="text-indigo-400 font-semibold">Jakarta, Indonesia</span></p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 bg-gray-800 rounded-3xl shadow-lg p-10 border border-gray-700">
          <h2 className="text-2xl font-bold text-indigo-400 mb-6 text-center">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-center text-indigo-400 font-medium">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
