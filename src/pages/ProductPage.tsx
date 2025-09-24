// src/pages/ProductPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
import ProductDetail from "../components/ProductDetail";

import SimilarProducts from "../components/SimilarProducts";
import SidebarCategories from "../components/SidebarCategories";

const ProductPage: React.FC = () => {
  const { sku } = useParams();
  const product = products.find(p => p.sku === sku);
  const similarProducts = products.filter(p => p.sku !== sku);

  if (!product) {
    return <div className="p-4">Producto no encontrado.</div>;
  }

  return (
    <main className="container mx-auto flex-1 p-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar izquierdo */}
      <div className="lg:col-span-2">
        <SidebarCategories/>
      </div>

      {/* Contenido central */}
      <div className="lg:col-span-10">
        <ProductDetail product={product} />
        <SimilarProducts products={similarProducts} />
      </div>


    </main>
  );
};

export default ProductPage;
