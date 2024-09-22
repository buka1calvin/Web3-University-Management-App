import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLinks } from "../constants"; // Make sure to replace this with your actual nav links

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown menu

  // Update active link on route change
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle profile dropdown menu
  const toggleDropdownMenu = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <section className="w-full flex justify-between items-center h-20 px-5 md:px-20 border-b-2 bg-gray-800 sticky top-0 z-40">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-white">
        LOGO
      </Link>

      {/* Hamburger Menu Icon for Small Screens */}
      <div className="md:hidden w-full flex justify-end">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <div className={`hidden md:flex gap-8 items-center w-full justify-end mr-12`}>
        {NavLinks.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`text-sm ${
              activeLink === item.link
                ? "text-red-600 font-bold"
                : "text-white hover:text-blue-400"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/register"
          onClick={toggleMobileMenu} // Close menu when clicked
          className="text-sm text-white hover:text-white bg-blue-500 py-2 px-3 font-bold rounded-full"
        >
          Apply University
        </Link>
      </div>

      {/* Profile Icon with Dropdown */}
      <div className="relative h-full flex justify-center">
        <button onClick={toggleDropdownMenu} className="focus:outline-none">
          <img
            src="/path-to-avatar-image.jpg"
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
          />
        </button>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <div
            ref={dropdownRef} // Add ref to the dropdown
            className="absolute right-0 mt-16 w-48 bg-white rounded-md shadow-lg py-2"
          >
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdownMenu}
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdownMenu}
            >
              Settings
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleDropdownMenu}
            >
              Logout
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu (Hamburger Navigation) */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 p-5 md:hidden flex flex-col gap-4">
          {NavLinks.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={toggleMobileMenu} // Close menu when a link is clicked
              className={`text-sm ${
                activeLink === item.link
                  ? "text-red-600 font-bold"
                  : "text-white hover:text-orange-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* Register link in mobile menu */}
          <Link
            to="/register"
            onClick={toggleMobileMenu} // Close menu when clicked
            className="text-sm text-white hover:text-orange-400"
          >
            Register
          </Link>
        </div>
      )}
    </section>
  );
};

export default Navbar;
