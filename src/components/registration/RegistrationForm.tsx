
import React from "react";
import { CardContent } from "@/components/ui/card";
import UserInfoStep from "@/components/registration/UserInfoStep";
import EmailVerificationStep from "@/components/registration/EmailVerificationStep";
import BusinessInfoStep from "@/components/registration/BusinessInfoStep";
import SatisfactionSurveyStep from "@/components/registration/SatisfactionSurveyStep";
import CompletedStep from "@/components/registration/CompletedStep";
import ProgressSteps from "@/components/registration/ProgressSteps";
import { useRegistration } from "@/contexts/RegistrationContext";

const RegistrationForm = () => {
  const { currentStep } = useRegistration();

  const renderStep = () => {
    switch (currentStep) {
      case "user-info":
        return <UserInfoStep />;
      case "email-verification":
        return <EmailVerificationStep />;
      case "business-info":
        return <BusinessInfoStep />;
      case "satisfaction-survey":
        return <SatisfactionSurveyStep />;
      case "completed":
        return <CompletedStep />;
      default:
        return <UserInfoStep />;
    }
  };

  return (
    <CardContent className="p-6">
      <ProgressSteps />
      <div className="mt-6 fade-in">
        {renderStep()}
      </div>
    </CardContent>
  );
};

export default RegistrationForm;
