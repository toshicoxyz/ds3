// src/components/Footer.tsx
import React from "react";
import logoNetPeru from "../assets/Logo.png";
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Columna 1: Logo y contacto */}
          <div className="space-y-4">
            <img src={logoNetPeru} alt="DS3 Comunicaciones" className="w-32 h-auto" />

            {/* Redes Sociales */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-800">Redes Sociales</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://wa.me/994428965?text=Hola nesecito ayuda"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>

            {/* Correo */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-800">Correo</h3>
              <a
                href="mailto:netperu100@hotmail.com"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors gap-2"
              >
                <FaEnvelope />
                netperu100@hotmail.com
              </a>
            </div>
          </div>

          {/* Columna 2: Soluciones */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Soluciones</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a
                  href="https://www.ds3comunicaciones.com/l-com/AccessPoint.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 hover:underline transition-colors"
                >
                  Access Point
                </a>
              </li>
              <li>
                <a
                  href="https://www.ds3comunicaciones.com/lcom/AntenasMIMO.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 hover:underline transition-colors"
                >
                  Antenas MIMO
                </a>
              </li>
              <li>
                <a
                  href="https://www.ds3comunicaciones.com/l-com/AntenasPanel.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 hover:underline transition-colors"
                >
                  Antenas de Panel
                </a>
              </li>
              <li>
                <a
                  href="https://www.ds3comunicaciones.com/l-com/AntenaSectorial.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 hover:underline transition-colors"
                >
                  Antenas Sectoriales
                </a>
              </li>
              <li>
                <a
                  href="https://ds3comunicaciones.com/l-com/pigtail/Pigtail.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 hover:underline transition-colors"
                >
                  Cable Pigtail
                </a>
              </li>
              <li>
                <a
                  href="https://www.ds3comunicaciones.com/trendnet/MediaConvert.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 hover:underline transition-colors"
                >
                  Media Converter
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Soporte y más */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Soporte</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a
                  href="https://www.ds3comunicaciones.com/soporte.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 hover:underline transition-colors"
                >
                  Soporte Técnico
                </a>
              </li>
              <li>
                <a
                  href="https://ds3comunicaciones.com/us.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 hover:underline transition-colors"
                >
                  Acerca de Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/994428965?text=Hola nesecito ayuda"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <FaPhoneAlt />
                994 428 965
              </a>
              <a
                href="https://wa.me/996533223?text=Hola nesecito ayuda"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <FaPhoneAlt />
                996 533 223
              </a>
            </div>

            {/* Horario */}
            <div className="pt-4 text-gray-600 text-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Horario de Atención</h3>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábados: 9:00 - 13:00</p>
            </div>
          </div>

        </div>

        {/* Derechos de autor */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DS3 Comunicaciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
