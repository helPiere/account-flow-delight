
import React, { useState } from "react";
import { useRegistration } from "@/contexts/RegistrationContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, RefreshCcw } from "lucide-react";

const EmailVerificationStep = () => {
  const { userInfo, isEmailVerified, setIsEmailVerified, nextStep, prevStep } = useRegistration();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);

  // In a real application, this would be connected to a backend
  // Here we'll simulate the verification process
  const checkVerification = () => {
    setIsVerifying(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // For demo purposes, let's randomly simulate verification
      // In a real app, this would check against a backend
      const verified = Math.random() > 0.5;
      
      setIsEmailVerified(verified);
      setIsVerifying(false);
      
      if (verified) {
        toast({
          title: "¡Verificación exitosa!",
          description: "Su correo electrónico ha sido verificado",
        });
      } else {
        toast({
          title: "No verificado",
          description: "No hemos podido verificar su correo electrónico aún",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  const resendVerification = () => {
    toast({
      title: "Correo enviado",
      description: `Se ha enviado un nuevo correo de verificación a ${userInfo.email}`,
    });
  };

  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <Mail className="h-8 w-8 text-blue-600" />
      </div>
      
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Verificación de correo</h2>
      
      <p className="text-gray-600 mb-6">
        Hemos enviado un correo de verificación a <span className="font-medium">{userInfo.email}</span>
      </p>
      
      {isEmailVerified ? (
        <>
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ¡Correo verificado correctamente!
            </p>
          </div>
          
          <Button className="w-full" onClick={nextStep}>
            Continuar
          </Button>
        </>
      ) : (
        <>
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
            <p className="text-amber-800">
              Por favor, verifique su correo antes de continuar
            </p>
          </div>
          
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center" 
              onClick={checkVerification}
              disabled={isVerifying}
            >
              {isVerifying ? (
                <>
                  <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                  Verificando...
                </>
              ) : (
                <>
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Verificar ahora
                </>
              )}
            </Button>
            
            <Button 
              variant="link" 
              className="text-blue-600" 
              onClick={resendVerification}
            >
              Reenviar correo de verificación
            </Button>
          </div>
        </>
      )}
      
      <div className="mt-6">
        <Button variant="ghost" onClick={prevStep}>
          Volver atrás
        </Button>
      </div>
    </div>
  );
};

export default EmailVerificationStep;
