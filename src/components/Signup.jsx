import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://4256-2407-aa80-116-73cc-ec4f-995f-b2ea-60ce.ngrok-free.app/signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        navigate("/login");
      } else {
        setError(data.message || "Signup failed");
        toast.error(data.message || "Signup failed");
      }
    } catch (err) {
      setError("An error occurred while signing up.");
      toast.error("An error occurred while signing up.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative">
      <ToastContainer />
      <Link
        to="/"
        className="absolute top-6 left-6 text-[#CD1818] hover:underline text-lg font-medium"
      >
        &lt; Home
      </Link>
      <h1 className="absolute top-10 text-4xl font-bold text-[#CD1818]" style={{ fontFamily: "Sarina, sans-serif" }}>
        Custom Kicks
      </h1>

      <div className="max-w-md w-full bg-[#1A1A1D] p-8 rounded-lg shadow-lg mt-20 relative">
        <h2 className="text-3xl font-bold text-center text-[#CD1818] mb-6">
          Signup
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 rounded-md bg-[#2E2E30] text-white outline-none focus:ring-2 focus:ring-[#CD1818]"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 rounded-md bg-[#2E2E30] text-white outline-none focus:ring-2 focus:ring-[#CD1818]"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 rounded-md bg-[#2E2E30] text-white outline-none focus:ring-2 focus:ring-[#CD1818]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 rounded-md bg-[#2E2E30] text-white outline-none focus:ring-2 focus:ring-[#CD1818]"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#CD1818] hover:bg-[#A81B1B] text-white font-semibold rounded-lg relative"
            disabled={isLoading}
          >
            {isLoading ? <ClipLoader color="#fff" size={20} /> : "Signup"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#CD1818] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
