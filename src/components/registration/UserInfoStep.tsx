
import React, { useState } from "react";
import { useRegistration } from "@/contexts/RegistrationContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import UsernameInput from "./inputs/UsernameInput";
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";
import ConfirmPasswordInput from "./inputs/ConfirmPasswordInput";
import ReferralCodeInput from "./inputs/ReferralCodeInput";
import TermsAndPrivacyCheckboxes from "./inputs/TermsAndPrivacyCheckboxes";

const UserInfoStep = () => {
  const { userInfo, setUserInfo, nextStep } = useRegistration();
  const { toast } = useToast();
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!userInfo.username.trim()) {
      toast({
        title: "Campo requerido",
        description: "Por favor ingrese un nombre de usuario",
        variant: "destructive",
      });
      return;
    }
    
    if (!userInfo.email.trim() || !/\S+@\S+\.\S+/.test(userInfo.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor ingrese un email válido",
        variant: "destructive",
      });
      return;
    }
    
    if (userInfo.password.length < 6) {
      toast({
        title: "Contraseña muy corta",
        description: "La contraseña debe tener al menos 6 caracteres",
        variant: "destructive",
      });
      return;
    }

    if (userInfo.password !== passwordConfirm) {
      toast({
        title: "Las contraseñas no coinciden",
        description: "Por favor verifique que ambas contraseñas sean iguales",
        variant: "destructive",
      });
      return;
    }
    
    if (!userInfo.termsAccepted || !userInfo.privacyAccepted) {
      toast({
        title: "Términos no aceptados",
        description: "Debe aceptar los términos y condiciones y el aviso de privacidad",
        variant: "destructive",
      });
      return;
    }
    
    // If all validation passes, proceed to next step
    nextStep();
    
    // In a real application, here you would call an API to register the user
    console.log("User info submitted:", userInfo);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Crear una cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <UsernameInput 
            value={userInfo.username}
            onChange={(value) => setUserInfo({ username: value })}
          />
          
          <EmailInput 
            value={userInfo.email}
            onChange={(value) => setUserInfo({ email: value })}
          />
          
          <PasswordInput 
            id="password"
            label="Contraseña"
            value={userInfo.password}
            onChange={(value) => setUserInfo({ password: value })}
            placeholder="Cree su contraseña"
            hint="La contraseña debe tener al menos 6 caracteres"
          />

          <ConfirmPasswordInput 
            value={passwordConfirm}
            onChange={setPasswordConfirm}
          />
          
          <ReferralCodeInput 
            value={userInfo.referralCode}
            onChange={(value) => setUserInfo({ referralCode: value })}
          />
          
          <TermsAndPrivacyCheckboxes 
            termsAccepted={userInfo.termsAccepted}
            privacyAccepted={userInfo.privacyAccepted}
            onTermsChange={(checked) => setUserInfo({ termsAccepted: checked })}
            onPrivacyChange={(checked) => setUserInfo({ privacyAccepted: checked })}
          />
        </div>
        
        <Button type="submit" className="w-full mt-6">
          Continuar
        </Button>
      </form>
    </div>
  );
};

export default UserInfoStep;
