
import React from "react";
import { useRegistration } from "@/contexts/RegistrationContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, Lock, ShieldCheck } from "lucide-react";

const UserInfoStep = () => {
  const { userInfo, setUserInfo, nextStep } = useRegistration();
  const { toast } = useToast();

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
          <div className="space-y-2">
            <Label htmlFor="username">Nombre de usuario</Label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <User size={18} />
              </div>
              <Input
                id="username"
                type="text"
                placeholder="Ingrese su nombre de usuario"
                className="pl-10"
                value={userInfo.username}
                onChange={(e) => setUserInfo({ username: e.target.value })}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Mail size={18} />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="Ingrese su correo electrónico"
                className="pl-10"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ email: e.target.value })}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Lock size={18} />
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Cree su contraseña"
                className="pl-10"
                value={userInfo.password}
                onChange={(e) => setUserInfo({ password: e.target.value })}
              />
            </div>
            <p className="text-xs text-gray-500">
              La contraseña debe tener al menos 6 caracteres
            </p>
          </div>
          
          <div className="space-y-3 pt-2">
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={userInfo.termsAccepted}
                onCheckedChange={(checked) => 
                  setUserInfo({ termsAccepted: checked === true })
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
                checked={userInfo.privacyAccepted}
                onCheckedChange={(checked) => 
                  setUserInfo({ privacyAccepted: checked === true })
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
        </div>
        
        <Button type="submit" className="w-full mt-6">
          Continuar
        </Button>
      </form>
    </div>
  );
};

export default UserInfoStep;
