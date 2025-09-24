// src/components/TabsSection.tsx
import React, { useState } from 'react';

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"producto" | "imagenes">("producto");

  return (
    <section className="bg-white mt-8 rounded-lg shadow-md">
      {/* Tabs */}
      <div className="border-b flex">
        <button
          onClick={() => setActiveTab("producto")}
          className={`px-6 py-3 font-medium text-sm sm:text-base ${
            activeTab === "producto"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          Producto
        </button>
        <button
          onClick={() => setActiveTab("imagenes")}
          className={`px-6 py-3 font-medium text-sm sm:text-base ${
            activeTab === "imagenes"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          Imágenes
        </button>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {activeTab === "producto" ? (
          <div className="text-gray-700 leading-relaxed">
            <p>
              Los switches Cisco Catalyst 9200L ofrecen seguridad avanzada, flexibilidad
              y rendimiento confiable. Ideales para medianas y grandes empresas.
            </p>
            <p className="mt-3">
              Con soporte para stacking de hasta 8 unidades, PoE+, y redundancia de
              energía, garantizan continuidad de servicio y escalabilidad.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://web.netperu100.com/cisco/catalyst/images/C9200L-24T-4G-E_front.jpg",
              "https://web.netperu100.com/cisco/catalyst/images/C9200L-24T-4G-E_back.jpg",
              "https://web.netperu100.com/cisco/catalyst/images/C9200L-24T-4G-E_front_large.jpg",
            ].map((img, idx) => (
              <div
                key={idx}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img src={img} alt={`Producto extra ${idx + 1}`} className="w-full h-40 object-contain" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TabsSection;
