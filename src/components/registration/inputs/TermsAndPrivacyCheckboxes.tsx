
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface TermsAndPrivacyCheckboxesProps {
  termsAccepted: boolean;
  privacyAccepted: boolean;
  onTermsChange: (checked: boolean) => void;
  onPrivacyChange: (checked: boolean) => void;
}

const TermsAndPrivacyCheckboxes = ({
  termsAccepted,
  privacyAccepted,
  onTermsChange,
  onPrivacyChange,
}: TermsAndPrivacyCheckboxesProps) => {
  return (
    <div className="space-y-3 pt-2">
      <div className="flex items-start space-x-2">
        <Checkbox 
          id="terms" 
          checked={termsAccepted}
          onCheckedChange={(checked) => 
            onTermsChange(checked === true)
          }
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Acepto los <a href="#" className="text-blue-600 hover:underline">términos y condiciones</a>
          </Label>
        </div>
      </div>
      
      <div className="flex items-start space-x-2">
        <Checkbox 
          id="privacy" 
          checked={privacyAccepted}
          onCheckedChange={(checked) => 
            onPrivacyChange(checked === true)
          }
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="privacy"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Acepto el <a href="#" className="text-blue-600 hover:underline">aviso de privacidad</a>
          </Label>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPrivacyCheckboxes;
