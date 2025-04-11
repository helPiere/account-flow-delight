
import React from "react";
import { RegistrationProvider } from "@/contexts/RegistrationContext";
import RegistrationForm from "@/components/registration/RegistrationForm";
import { Card } from "@/components/ui/card";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const Registration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white flex flex-col items-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <header className="flex justify-between items-center py-4 px-4 md:px-0">
          <Logo />
          <ThemeToggle />
        </header>
        
        <div className="flex justify-center mt-6">
          <div className="w-full max-w-md">
            <Card className="shadow-lg border-t-4 border-t-blue-500 dark:border-t-blue-400 dark:bg-gray-800 dark:text-white">
              <RegistrationProvider>
                <RegistrationForm />
              </RegistrationProvider>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
