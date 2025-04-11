
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Bienvenido a la Plataforma de Negocios</h1>
        <p className="text-xl text-gray-600 mb-8">
          Registre su cuenta para comenzar a administrar su negocio de manera eficiente
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/register">Crear Cuenta</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/login">Iniciar Sesión</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
