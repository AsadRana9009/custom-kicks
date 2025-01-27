import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./Button";
import { useCart } from "../context/CartContext";
import { MdShoppingCart } from "react-icons/md";

const Nav = () => {
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${isScrolled
        ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md"
        : "bg-white bg-opacity-90 backdrop-blur-md"
        }`}
      style={{ height: "80px" }}
    >
      <nav className="flex justify-between items-center max-container padding-x h-full">
        <a
          href="/"
          className="text-[#CD1818] font-bold text-3xl font-pacifico"
          style={{ fontFamily: "Sarina, sans-serif" }}
        >
          Custom Kicks
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `font-montserrat leading-normal text-lg transition-all ${isActive
                    ? "text-[#CD1818] border-b-2 border-[#CD1818]"
                    : "text-black"
                  } hover:text-[#CD1818] hover:border-b-2 hover:border-[#CD1818]`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/cart" className="relative px-2">
          <div className="relative">
            <MdShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          {user ? (
            <div className="flex items-center gap-4">
              <span>Hello! {user.first_name}</span>
              <Button label="Logout" onClick={handleLogout} />
            </div>
          ) : (
            <Button label="Sign In" onClick={() => navigate("/login")} />
          )}
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
