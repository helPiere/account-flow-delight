
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Eye, EyeOff } from "lucide-react";

interface ConfirmPasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

const ConfirmPasswordInput = ({ value, onChange }: ConfirmPasswordInputProps) => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="passwordConfirm">Confirmar contraseña</Label>
      <div className="relative">
        <div className="absolute left-3 top-3 text-gray-400">
          <ShieldCheck size={18} />
        </div>
        <Input
          id="passwordConfirm"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirme su contraseña"
          className="pl-10 pr-10"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type="button"
          className="absolute right-3 top-3 text-gray-400"
          onClick={toggleConfirmPasswordVisibility}
        >
          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};

export default ConfirmPasswordInput;
