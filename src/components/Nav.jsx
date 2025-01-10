import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Use NavLink for active link styling
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./Button";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Detect small scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md"
          : "bg-white bg-opacity-90 backdrop-blur-md"
      }`}
      style={{ height: "80px" }}
    >
      <nav className="flex justify-between items-center max-container padding-x h-full">
        {/* Logo */}
        <a
          href="/"
          className="text-[#CD1818] font-bold text-3xl font-pacifico"
          style={{ fontFamily: "Sarina, sans-serif" }}
        >
          Custom Kicks
        </a>

        {/* Navigation Links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `font-montserrat leading-normal text-lg transition-all ${
                    isActive
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

        {/* Auth Links */}
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <Button label="Sign In" onClick={() => navigate("/login")} />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
