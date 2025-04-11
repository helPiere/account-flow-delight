
import React from "react";
import { useRegistration } from "@/contexts/RegistrationContext";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const CompletedStep = () => {
  const { userInfo, businessInfo } = useRegistration();

  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="h-10 w-10 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800">¡Registro completado!</h2>
      
      <p className="text-gray-600 mb-6">
        {userInfo.username}, ¡gracias por registrar su negocio {businessInfo.name}!
      </p>
      
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <p className="text-blue-800 text-sm">
          Su cuenta ha sido creada exitosamente. Ahora puede acceder a todas las funciones de nuestra plataforma.
        </p>
      </div>
      
      <div className="space-y-4">
        <Button className="w-full" asChild>
          <Link to="/dashboard">
            Ir al panel de control
          </Link>
        </Button>
        
        <Button variant="outline" className="w-full" asChild>
          <Link to="/">
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CompletedStep;
