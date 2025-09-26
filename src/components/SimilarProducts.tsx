// src/components/SimilarProducts.tsx
import React from "react";
import type { Product } from "../data";
import { Link } from "react-router-dom"

interface SimilarProductsProps {
  products: Product[];
  title?: string;
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ products, title }) => {
  return (
    <section className="pt-8 ">
      <div className="container mx-auto  max-w-6xl">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-[#122144] py-4 px-6 rounded-lg shadow inline-block">
            {title || "Explorar productos similares"}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.sku}
              to={`/producto/${product.sku}`}
              className="group bg-white rounded-xl shadow overflow-hidden hover:shadow transition-shadow duration-300 border border-gray-200 hover:border-[#122144] flex flex-col"
            >
              <div className="p-5 flex flex-col h-full">
                <div className="flex-grow flex items-center justify-center mb-4 h-40">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4">
                  <div className="flex flex-col items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      {product.sku}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-800 transition-colors line-clamp-2">
                    {product.name}
                  </p>
                  <div className="text-center mt-6 text-[#122144] font-semibold">
                    Ver Producto
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;
