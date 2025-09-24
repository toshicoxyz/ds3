// src/pages/NotFoundPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full py-20 px-4">
      <FaTools className="text-6xl text-yellow-500 mb-6 animate-bounce" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Oops! Página en construcción</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Parece que estás explorando un rincón que todavía estamos construyendo. 
        No te preocupes, ¡estamos trabajando duro para que todo esté listo muy pronto!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#122144] text-white rounded-lg hover:bg-[#f2bb5d] transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
