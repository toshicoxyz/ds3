import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* 🔹 Top Nav (solo desktop) */}
      <nav className="lg:block text-black font-bold text-sm" style={{ background: " #f2bb5d " }}>
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 px-1">
            <a
              href="mailto:netperu100@hotmail.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FaEnvelope /> netperu100@hotmail.com
            </a>
            <div className="flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt /> Lima, PERU
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://fb.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* 🔹 Main Nav */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="NetPeru Logo" className="h-10 w-auto" />
          </a>

          {/* 🔹 Botón hamburguesa (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 text-2xl"
            aria-label="Abrir menú"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* 🔹 Links Desktop */}
          <div className="hidden lg:flex items-center justify-between flex-1 ">
            <ul className="flex gap-15 mx-auto font-medium ">
              <li><a href="/" className="text-gray-700 hover:text-blue-600 font-bold">Inicio</a></li>
              <li><a href="/about" className="text-gray-700 hover:text-blue-600 font-bold">Acerca</a></li>
              <li><a href="/shop" className="text-gray-700 hover:text-blue-600 font-bold">Tienda</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-blue-600 font-bold">Contacto</a></li>
            </ul>

            {/* 🔹 Íconos (desktop) */}
            <div className="flex items-center gap-6">
              <button onClick={() => setSearchOpen(true)} className="hover:text-blue-600" aria-label="Buscar">
                <FaSearch className="text-lg" />
              </button>
              <a href="#" className="relative hover:text-blue-600">
                <FaShoppingCart className="text-lg" />
                <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full px-1.5">7</span>
              </a>
              <a href="#" className="relative hover:text-blue-600">
                <FaUser className="text-lg" />
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs rounded-full px-1.5">+99</span>
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Menú Mobile */}
        {menuOpen && (
          <div className="lg:hidden bg-gray-100">
            <div className="flex flex-col p-6 space-y-6 items-center justify-center ">
              {/* Links centrados */}
              <ul className="flex flex-col items-center gap-4 text-lg font-medium">
                <li><a href="/" className="hover:text-blue-600">Inicio</a></li>
                <li><a href="/about" className="hover:text-blue-600">Acerca</a></li>
                <li><a href="/shop" className="hover:text-blue-600">Tienda</a></li>
                <li><a href="/contact" className="hover:text-blue-600">Contacto</a></li>
              </ul>


              {/* Íconos centrados */}
              <div className="flex justify-center gap-8 items-center">
                {/* Buscador inline */}
                <div className="w-full max-w-sm min-w-[200px]">
                  <div className="relative">
                    <input
                      className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="Cisco, Cable..."
                    />
                    <button
                      className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                      </svg>

                      Search
                    </button>
                  </div>
                </div>
                <a href="#" className="relative hover:text-blue-600">
                  <FaShoppingCart className="text-xl" />
                  <span className="absolute -top-2 -right-3 bg-gray-200 text-gray-700 text-xs rounded-full px-1.5">7</span>
                </a>
                <a href="#" className="relative hover:text-blue-600">
                  <FaUser className="text-xl" />
                  <span className="absolute -top-2 -right-3 bg-gray-200 text-gray-700 text-xs rounded-full px-1.5">+99</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 🔹 Modal búsqueda (desktop) */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50 pt-20">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <FaTimes className="text-xl" />
            </button>
            <form action="/search" method="get" className="flex">
              <input
                type="text"
                name="q"
                placeholder="Buscar productos..."
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 outline-none"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
