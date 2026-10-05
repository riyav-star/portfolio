"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [accent, setAccent] = useState("purple");
  const [colorOpen, setColorOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const colors = [
    { name: "purple", label: "Purple" },
    { name: "blue", label: "Blue" },
    { name: "green", label: "Green" },
    { name: "pink", label: "Pink" },
    { name: "orange", label: "Orange" },
  ];

  /* =========================
     Load saved preferences
  ========================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const savedAccent = localStorage.getItem("accent") || "purple";

    setTheme(savedTheme);
    setAccent(savedAccent);

    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.setAttribute("data-accent", savedAccent);
  }, []);

  /* =========================
     Toggle Dark / Light
  ========================= */

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem("theme", newTheme);
  };

  /* =========================
     Change Accent Color
  ========================= */

  const changeAccent = (newAccent) => {
    setAccent(newAccent);

    document.documentElement.setAttribute(
      "data-accent",
      newAccent
    );

    localStorage.setItem("accent", newAccent);

    setColorOpen(false);
  };

  /* =========================
     Close mobile menu
  ========================= */

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a
          href="#"
          className="nav-logo"
          onClick={() => setMenuOpen(false)}
        >
          Riya Venkat
        </a>

        {/* Desktop Controls */}
        <div className="nav-controls">

          {/* Color Picker */}
          <div className="color-picker-wrapper">

            <button
              className="color-picker-button"
              onClick={() => setColorOpen(!colorOpen)}
              aria-label="Choose accent color"
              aria-expanded={colorOpen}
            >
              <span className="color-picker-dot"></span>
            </button>

            {colorOpen && (
              <div className="color-picker-menu">

                <div className="color-picker-title">
                  Accent Color
                </div>

                <div className="color-options">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      className={`color-option color-${color.name} ${
                        accent === color.name ? "active" : ""
                      }`}
                      onClick={() =>
                        changeAccent(color.name)
                      }
                      aria-label={`${color.label} accent`}
                      title={color.label}
                    >
                      {accent === color.name && (
                        <span className="color-check">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
                </div>

              </div>
            )}

          </div>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Navigation Links */}
        <div
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}
