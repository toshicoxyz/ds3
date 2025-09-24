// src/components/BrandsSidebar.tsx
import React from 'react';

const brands = [
  { name: "Alfa", url: "https://www.ds3comunicaciones.com/alfa/index.html", logo: "http://www.ds3comunicaciones.com/belden/images/ALFA_logo1.gif" },
  { name: "Airlive", url: "https://www.ds3comunicaciones.com/airlive/index.html", logo: "http://www.ds3comunicaciones.com/belden/images/airlivelogo.gif" },
  { name: "Andrew", url: "https://www.ds3comunicaciones.com/andrew/index.html", logo: "http://www.ds3comunicaciones.com/andrew/images/logo_andrew.jpg" },
  // ... 👉 seguir con todas las marcas (igual que el HTML original)
];

const BrandsSidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block bg-white p-2 rounded-lg shadow-md w-full md:w-48 lg:w-56 h-[80vh] overflow-y-auto scrollbar-hide">
      <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b">Nuestras Marcas</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1">
        {brands.map((brand) => (
          <a
            key={brand.name}
            href={brand.url}
            className="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 transition-all hover:-translate-y-0.5"
          >
            <img src={brand.logo} alt={brand.name} className="max-w-[100px] max-h-8 w-auto h-auto object-contain" />
          </a>
        ))}
      </div>
    </aside>
  );
};

export default BrandsSidebar;
