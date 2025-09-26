// src/components/SidebarCategories.tsx
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// SVG especial para Aironet
const AironetSVG = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="21" r="21" fill="white" stroke="black" strokeWidth="2" />
    <circle cx="21" cy="21" r="6" fill="black" />
    <circle cx="21" cy="21" r="8" fill="white" stroke="black" strokeWidth="2" />
  </svg>
);

const categories = [
  { name: 'Switches', url: '/categories/switches', icon: '/icons/Cisco.ico' },
  { name: 'Routers/Modems', url: '/categories/routers', icon: '/icons/TP-Link.ico' },
  { name: 'Cámaras IP', url: '/categories/camaras-ip', icon: '/icons/Hikvision.ico' },
  { name: 'Puntos de Acceso', url: '/categories/access-points', icon: AironetSVG },
  { name: 'Teléfonos IP', url: '/categories/telefonos-ip', icon: '/icons/Télefono.ico' },
  { name: 'Meraki', url: '/categories/meraki', icon: '/icons/mariakii.ico' },
  { name: 'Transceivers', url: '/categories/transceivers', icon: '/icons/Transceiver.ico' },
  { name: 'Ubiquiti', url: '/categories/ubiquiti', icon: '/icons/Ubiquiti.ico' },
  { name: 'AMP', url: '/categories/amp', icon: '/icons/Aironet.ico' },
];

const SidebarCategories: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcula margen superior dinámico
  const dynamicMarginTop = scrollY > 0 ? 80 : 16; // 80px cuando se desplaza, 16px al inicio

  return (
    <aside
      className="bg-white rounded-lg shadow p-4 sticky"
      style={{
        top: dynamicMarginTop,
        height: `calc(100vh - ${dynamicMarginTop}px)`,
        overflowY: 'auto'
      }}
    >
      {/* Encabezado */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-[#0D274D]">Categorias</h2>
        <p className="text-xs text-gray-500 mt-1">
          Explora nuestras categorías de productos y encuentra lo que necesitas fácilmente.
        </p>
      </div>

      {/* Lista de categorías */}
      <div className="flex flex-col space-y-2">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.url} // ya no usamos href
            className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition min-w-full gap-2"
          >
            <div className="icon-container h-6 w-6 flex items-center justify-center">
              {typeof category.icon === "string" ? (
                <img
                  src={`${base}${category.icon.replace(/^\//, "")}`} // asegura prefijo correcto
                  alt={category.name}
                  className="max-h-full max-w-full"
                />
              ) : (
                category.icon
              )}
            </div>
            <span className="text-xs font-medium text-gray-600">{category.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SidebarCategories;
