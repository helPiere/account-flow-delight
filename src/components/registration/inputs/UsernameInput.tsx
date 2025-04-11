
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

interface UsernameInputProps {
  value: string;
  onChange: (value: string) => void;
}

const UsernameInput = ({ value, onChange }: UsernameInputProps) => {
  return (
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UsernameInput;
