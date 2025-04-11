
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

const EmailInput = ({ value, onChange }: EmailInputProps) => {
  return (
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default EmailInput;
