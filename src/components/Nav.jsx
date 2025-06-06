"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faShoppingCart,
  faSignInAlt,
  faHome,
  faGamepad,
  faTasks,
  faInfoCircle,
  faBars
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur border-b border-blue-600 z-50">
      <div className="container mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-between py-3">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="BuscaGames"
            width={80}
            height={80}
            className="object-contain"
          />
        </a>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-gray-100 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
          {/* Use FontAwesome 'bars' icon by adding faBars import or fallback */}
          {/* Alternatively, replace with an SVG or simple ☰ */}
        </button>

        {/* Menu Items */}
        <div
          className={`w-full lg:w-auto lg:flex lg:items-center lg:space-x-10 ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8">
            {[
              { href: "/", icon: faHome, label: "Home" },
              { href: "/pages/games", icon: faGamepad, label: "Games" },
              { href: "/pages/quests", icon: faTasks, label: "Quests" },
              { href: "/pages/info", icon: faInfoCircle, label: "Informações" },
            ].map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative flex items-center text-white font-medium tracking-wide px-3 py-2 nav-link group"
                >
                  <FontAwesomeIcon icon={icon} className="me-2" />
                  <span>{label}</span>
                  {/* Underline effect */}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 rounded transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Icons container */}
          <div className="flex flex-col items-start space-y-3 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0">
            {/* Theme Toggle */}
            <button
              id="themeToggle"
              aria-label="Toggle dark/light mode"
              className="text-white hover:text-gray-300 transition"
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>

            {/* Cart */}
            <a
              href="/pages/cart"
              className="relative flex items-center text-white hover:text-gray-300 transition"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
              <span className="absolute -top-1 -right-2 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </a>

            {/* Login */}
            <div id="loginNavItem">
              <a
                href="/pages/login"
                className="flex items-center text-white hover:text-gray-300 transition"
              >
                <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
