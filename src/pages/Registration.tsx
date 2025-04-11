
import React from "react";
import { RegistrationProvider } from "@/contexts/RegistrationContext";
import RegistrationForm from "@/components/registration/RegistrationForm";
import { Card } from "@/components/ui/card";

const Registration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg border-t-4 border-t-blue-500">
          <RegistrationProvider>
            <RegistrationForm />
          </RegistrationProvider>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
