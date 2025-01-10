import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative">
      {/* Back to Home Link */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-[#CD1818] hover:underline text-lg font-medium"
      >
        &lt; Home
      </Link>

      {/* Logo */}
      <h1 className="absolute top-10 text-4xl font-bold text-[#CD1818]" style={{ fontFamily: "Sarina, sans-serif" }}>
        Custom Kicks
      </h1>

      <div className="max-w-md w-full bg-[#1A1A1D] p-8 rounded-lg shadow-lg mt-20 relative">
        <h2 className="text-3xl font-bold text-center text-[#CD1818] mb-6">
          Signup
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 px-4 py-2 rounded-md bg-[#2E2E30] text-white outline-none focus:ring-2 focus:ring-[#CD1818]"
              placeholder="Enter your name"
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
              className="w-full mt-2 px-4 py-2 rounded-md bg-[#2E2E30] text-white outline-none focus:ring-2 focus:ring-[#CD1818]"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#CD1818] hover:bg-[#A81B1B] text-white font-semibold rounded-lg"
          >
            Signup
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
