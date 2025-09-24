// src/components/PriceListSidebar.tsx
import React from 'react';

const priceLists = [
  { name: "Lista de Precios Cisco", url: "https://www.ds3comunicaciones.com/precios/Cisco.pdf" },
  { name: "Lista de Precios Mikrotik", url: "https://www.ds3comunicaciones.com/precios/Mikrotik.pdf" },
  { name: "Lista de Precios Ubiquiti", url: "https://www.ds3comunicaciones.com/precios/Ubiquiti.pdf" },
  // 👉 puedes seguir agregando todas las listas como en el HTML original
];

const PriceListSidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block bg-white p-4 rounded-lg shadow-md w-full md:w-48 lg:w-56 h-[80vh] overflow-y-auto scrollbar-hide">
      <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b">
        Listas de Precios
      </h2>
      <ul className="space-y-2">
        {priceLists.map((list) => (
          <li key={list.name}>
            <a
              href={list.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 hover:underline transition text-sm"
            >
              <i className="fas fa-file-pdf mr-2 text-red-500"></i>
              {list.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PriceListSidebar;
