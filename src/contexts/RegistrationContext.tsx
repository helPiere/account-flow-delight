import React, { createContext, useContext, useState } from "react";

export type RegistrationStep = 
  | "user-info" 
  | "email-verification" 
  | "business-info" 
  | "satisfaction-survey" 
  | "completed";

export type BusinessSector = 
  | "technology" 
  | "healthcare" 
  | "education" 
  | "finance" 
  | "retail" 
  | "manufacturing" 
  | "other";

export type EmployeeRange = 
  | "1-10" 
  | "11-50" 
  | "51-200" 
  | "201-500" 
  | "501-1000" 
  | "1000+";

interface UserInfo {
  username: string;
  email: string;
  password: string;
  termsAccepted: boolean;
  privacyAccepted: boolean;
  referralCode: string;
}

interface BusinessInfo {
  name: string;
  sector: BusinessSector;
  description: string;
  employeeRange: EmployeeRange;
}

interface SatisfactionSurvey {
  rating: number;
  feedback: string;
}

interface RegistrationContextType {
  currentStep: RegistrationStep;
  setCurrentStep: (step: RegistrationStep) => void;
  userInfo: UserInfo;
  setUserInfo: (info: Partial<UserInfo>) => void;
  isEmailVerified: boolean;
  setIsEmailVerified: (verified: boolean) => void;
  businessInfo: BusinessInfo;
  setBusinessInfo: (info: Partial<BusinessInfo>) => void;
  satisfactionSurvey: SatisfactionSurvey;
  setSatisfactionSurvey: (survey: Partial<SatisfactionSurvey>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const defaultUserInfo: UserInfo = {
  username: "",
  email: "",
  password: "",
  termsAccepted: false,
  privacyAccepted: false,
  referralCode: "",
};

const defaultBusinessInfo: BusinessInfo = {
  name: "",
  sector: "technology",
  description: "",
  employeeRange: "1-10",
};

const defaultSatisfactionSurvey: SatisfactionSurvey = {
  rating: 0,
  feedback: "",
};

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const RegistrationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<RegistrationStep>("user-info");
  const [userInfo, setUserInfoState] = useState<UserInfo>(defaultUserInfo);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [businessInfo, setBusinessInfoState] = useState<BusinessInfo>(defaultBusinessInfo);
  const [satisfactionSurvey, setSatisfactionSurveyState] = useState<SatisfactionSurvey>(defaultSatisfactionSurvey);

  const setUserInfo = (info: Partial<UserInfo>) => {
    setUserInfoState(prev => ({ ...prev, ...info }));
  };

  const setBusinessInfo = (info: Partial<BusinessInfo>) => {
    setBusinessInfoState(prev => ({ ...prev, ...info }));
  };

  const setSatisfactionSurvey = (survey: Partial<SatisfactionSurvey>) => {
    setSatisfactionSurveyState(prev => ({ ...prev, ...survey }));
  };

  const nextStep = () => {
    switch (currentStep) {
      case "user-info":
        setCurrentStep("email-verification");
        break;
      case "email-verification":
        setCurrentStep("business-info");
        break;
      case "business-info":
        setCurrentStep("satisfaction-survey");
        break;
      case "satisfaction-survey":
        setCurrentStep("completed");
        break;
      default:
        break;
    }
  };

  const prevStep = () => {
    switch (currentStep) {
      case "email-verification":
        setCurrentStep("user-info");
        break;
      case "business-info":
        setCurrentStep("email-verification");
        break;
      case "satisfaction-survey":
        setCurrentStep("business-info");
        break;
      default:
        break;
    }
  };

  return (
    <RegistrationContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        userInfo,
        setUserInfo,
        isEmailVerified,
        setIsEmailVerified,
        businessInfo,
        setBusinessInfo,
        satisfactionSurvey,
        setSatisfactionSurvey,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error("useRegistration must be used within a RegistrationProvider");
  }
  return context;
};
