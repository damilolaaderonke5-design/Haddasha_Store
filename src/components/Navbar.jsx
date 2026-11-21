import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  

  function closeMenu() {
    setMenuOpen(false);
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 shadow-md shadow-green-600/20">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
            >
              <path
                d="M10 17H38L35 40H13L10 17Z"
                stroke="white"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M17 18V13C17 9.1 20.1 6 24 6C27.9 6 31 9.1 31 13V18"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M19 28L23 32L30 24"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-xl">
              Hadassah<span className="text-green-600">.</span>
            </h1>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400">
              STORE
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-semibold text-gray-600 transition hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">

          {/* Favourites */}
          <Link
            to="/favourites"
            aria-label="My favourites"
            title="My favourites"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-50 hover:text-green-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-green-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path
                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            title="Shopping cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-green-50 hover:text-green-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-green-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path
                d="M3 3H5L7.2 14.2A2 2 0 0 0 9.2 16H18a2 2 0 0 0 1.9-1.4L22 8H6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </Link>

          

          <Link
            to="/login"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1 lg:hidden">

          <Link
            to="/favourites"
            aria-label="My favourites"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-green-50 hover:text-green-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-green-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path
                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-green-50 hover:text-green-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-green-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path
                d="M3 3H5L7.2 14.2A2 2 0 0 0 9.2 16H18a2 2 0 0 0 1.9-1.4L22 8H6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </Link>

          

          {/* Hamburger / Close Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-800 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="h-7 w-7"
              >
                <path d="M18 6L6 18M6 6L18 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="h-7 w-7"
              >
                <path d="M4 6H20M4 12H20M4 18H20" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 shadow-lg dark:border-gray-800 dark:bg-gray-950 lg:hidden">
          <div className="flex flex-col gap-2">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-green-400"
              >
                {link.name}
              </Link>
            ))}

            <div className="my-2 border-t border-gray-100 dark:border-gray-800" />

            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              onClick={closeMenu}
              className="rounded-lg bg-green-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}