// src/components/ProductDetail.tsx
import React, { useState } from "react";
import type { Product } from "../data";
import { FaFilePdf, FaBookOpen, FaFileAlt, FaShoppingCart } from "react-icons/fa";

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const [mainImage, setMainImage] = useState(product.images[0]);

    return (
        <div className="w-full bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="mx-auto max-w-[1200px] w-full flex flex-col lg:flex-row gap-6">

                {/* Sección de imágenes */}
                <div className="lg:w-1/2">
                    <div className="p-4">
                        {/* Imagen principal */}
                        <div className="w-full h-[400px] flex items-center justify-center overflow-hidden rounded-lg ">
                            <img
                                src={mainImage}
                                alt={product.name}
                                className="max-h-full max-w-full object-contain cursor-pointer"
                            />
                        </div>

                        {/* Miniaturas */}
                        <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                            {product.images.map((thumb, idx) => (
                                <button
                                    key={idx}
                                    className={`flex-shrink-0 w-20 h-20 border rounded p-1 transition ${mainImage === thumb
                                        ? "border-blue-500"
                                        : "border-gray-300 hover:border-blue-400"
                                        }`}
                                    onClick={() => setMainImage(thumb)}
                                >
                                    <img
                                        src={thumb}
                                        alt={`${product.name} vista ${idx + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sección de información */}
                <div className="lg:w-1/2 flex flex-col gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {product.name}
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        {product.price && (
                            <span className="text-3xl md:text-4xl font-extrabold text-[#f2bb5d]">
                                U$ {product.price.toLocaleString()}
                            </span>
                        )}
                        <a
                            href="https://www.ds3comunicaciones.com/pedido.html"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-[#122144] text-white font-medium rounded-lg px-6 py-3 hover:bg-[#f2bb5d] transition"
                        >
                            <FaShoppingCart className="text-lg" />Comprar ahora
                        </a>
                    </div>

                    {/* Especificaciones principales */}
                    {product.mainFeatures.length > 0 && (
                        <div className="mt-4 pt-4">
                            <h2 className="font-semibold text-lg mb-3 text-gray-800">
                                Características principales
                            </h2>
                            <ul className="space-y-2 text-gray-700">
                                {product.mainFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <i className="fa-solid fa-circle text-[10px] mt-1 mr-2 text-blue-600"></i>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Descargas */}
                    {product.downloads.length > 0 && (
                        <div className="mt-6">
                            <h3 className="font-semibold text-lg mb-3 text-gray-800">Descargas</h3>
                            <div className="flex flex-wrap gap-3">
                                {product.downloads.map((dl, idx) => {
                                    let Icon;
                                    let iconColor;

                                    if (dl.icon.includes("fa-file-pdf")) {
                                        Icon = FaFilePdf;
                                        iconColor = "text-red-500";
                                    } else if (dl.icon.includes("fa-book-open")) {
                                        Icon = FaBookOpen;
                                        iconColor = "text-blue-500";
                                    } else if (dl.icon.includes("fa-file-alt")) {
                                        Icon = FaFileAlt;
                                        iconColor = "text-green-500";
                                    } else {
                                        Icon = FaFilePdf;
                                        iconColor = "text-gray-500";
                                    }

                                    return (
                                        <a
                                            key={idx}
                                            href={dl.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Descargar ${dl.label}`}
                                            className="flex items-center gap-2 text-blue-600 hover:text-white border border-gray-200 rounded-md px-4 py-2 hover:bg-[#122144] transition"
                                        >
                                            <Icon className={`${iconColor} text-lg`} />
                                            <span>{dl.label}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Secciones desplegables de especificaciones */}
            {product.specifications.length > 0 && (
                <div className="mt-8 w-full">
                    <details open className="group border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <summary className="flex items-center justify-between p-4 bg-[#122144]  hover:bg-[#122144] cursor-pointer transition-colors">
                            <h3 className="font-semibold text-white flex items-center ">
                                <svg
                                    className="w-5 h-5 mr-2 text-blue-600 transition-transform group-open:rotate-90"
                                    fill="none"
                                    stroke="white"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                                Especificaciones técnicas
                            </h3>
                            <span className="text-white text-sm font-medium">Ver detalles</span>
                        </summary>
                        <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
                            {product.specifications.map((spec, idx) => (
                                <div key={idx} className="flex items-start">
                                    <i className="fa-solid fa-circle text-[8px] text-blue-600 mt-2 mr-2"></i>
                                    <p className="text-gray-700">
                                        <span className="font-medium">{spec.label}:</span> {spec.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </details>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
