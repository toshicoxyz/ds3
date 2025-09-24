// src/components/SidebarPriceLists.tsx
import React from 'react';

const priceLists = [
  { name: 'Lista AMP', url: '/precios/AMP', icon: 'fas fa-file-pdf' },
  { name: 'Lista Cisco', url: '/precios/Cisco', icon: 'fas fa-file-pdf' },
  { name: 'Lista Hikvision', url: '/precios/Hikvision', icon: 'fas fa-file-pdf' },
  { name: 'Lista Ubiquiti', url: '/precios/Ubiquiti', icon: 'fas fa-file-pdf' },
  { name: 'Lista TP-Link', url: '/precios/TP-Link', icon: 'fas fa-file-pdf' },
  // agrega más listas si es necesario
];

const SidebarPriceLists: React.FC = () => {
  return (
    <aside className="bg-white rounded-lg shadow p-4">
      <h2 className="text-sm font-semibold text-[#0D274D] mb-4">Listas de precios</h2>
      <ul className="space-y-3 text-sm">
        {priceLists.map((list) => (
          <li key={list.name}>
            <a
              href={list.url}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
            >
              <i className={`${list.icon} text-red-500`} />
              {list.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarPriceLists;
