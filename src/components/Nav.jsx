import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          RB | graphics
        </h3>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 text-lg font-bold">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`hover:text-blue-500 transition-colors ${
                  active === item.label
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls: Dark mode + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="text-gray-800 dark:text-gray-100"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 dark:text-gray-100"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActive(item.label);
                setIsOpen(false);
              }}
              className={`block py-2 border-b text-gray-700 dark:text-gray-200 transition-colors ${
                active === item.label
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
