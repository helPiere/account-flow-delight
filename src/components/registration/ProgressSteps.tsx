
import React from "react";
import { useRegistration } from "@/contexts/RegistrationContext";
import { Check, User, Building2, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const ProgressSteps = () => {
  const { currentStep } = useRegistration();

  const steps = [
    { id: "user-info", label: "Información de Usuario", icon: User },
    { id: "email-verification", label: "Verificación", icon: Check },
    { id: "business-info", label: "Datos de Negocio", icon: Building2 },
    { id: "satisfaction-survey", label: "Encuesta", icon: Star },
  ];

  // Determine progress percentage
  const getProgressPercentage = () => {
    switch (currentStep) {
      case "user-info":
        return 0;
      case "email-verification":
        return 25;
      case "business-info":
        return 50;
      case "satisfaction-survey":
        return 75;
      case "completed":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="mb-8">
      <div className="relative">
        {/* Progress bar background */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
        
        {/* Progress bar fill */}
        <div 
          className="absolute top-1/2 left-0 h-1 bg-blue-500 -translate-y-1/2 transition-all duration-500 ease-in-out"
          style={{ width: `${getProgressPercentage()}%` }}
        ></div>
        
        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isActive = steps.findIndex(s => s.id === currentStep) >= index;
            const isCurrentStep = step.id === currentStep;
            
            const StepIcon = step.icon;
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300",
                    isActive
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-gray-300 bg-white text-gray-400"
                  )}
                >
                  <StepIcon className="w-5 h-5" />
                </div>
                <span
                  className={cn(
                    "mt-2 text-xs font-medium text-center transition-colors duration-300",
                    isCurrentStep ? "text-blue-600" : isActive ? "text-gray-700" : "text-gray-400"
                  )}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
