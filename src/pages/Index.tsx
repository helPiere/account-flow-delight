
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white p-4">
      <div className="w-full max-w-6xl mx-auto">
        <header className="flex justify-between items-center py-4 px-4 md:px-0">
          <Logo />
          <ThemeToggle />
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Bienvenido a la Plataforma de Negocios</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Registre su cuenta para comenzar a administrar su negocio de manera eficiente
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/register">Crear Cuenta</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                <Link to="/login">Iniciar Sesión</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
