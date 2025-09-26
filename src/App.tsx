// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Contenido dinámico */}
        <main className="flex-1">
          <Routes>
            {/* Página inicial → redirige al SKU por defecto */}
            <Route
              path="/"
              element={<Navigate to="/producto/C9200L-24P-4G-E" replace />}
            />

            {/* Página dinámica de producto */}
            <Route path="/producto/:sku" element={<ProductPage />} />
            {/* Página 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
