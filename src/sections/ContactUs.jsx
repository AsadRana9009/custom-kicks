import { MapPin, Mail, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1D] mt-10 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-gray-400">
            Have questions or need support? Reach out to us using the form or the
            contact details below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="text-red-500" />
              <p>123 Shoe Designer Street, Creativity City, Dreamland</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-green-500" />
              <p>+123 456 7890</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500" />
              <p>support@shoedesignai.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#2A2A2D] p-8 rounded-xl shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded bg-[#1A1A1D] text-white border border-gray-600 focus:outline-none focus:ring focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded bg-[#1A1A1D] text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full p-3 rounded bg-[#1A1A1D] text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Location</h2>
        <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373631531675!3d-37.81627974202152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7f3110e47!2s123%20Shoe%20Designer%20Street!5e0!3m2!1sen!2sus!4v1619565183151!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
