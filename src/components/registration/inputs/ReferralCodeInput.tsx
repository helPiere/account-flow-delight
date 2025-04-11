
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";

interface ReferralCodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

const ReferralCodeInput = ({ value, onChange }: ReferralCodeInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="referralCode">Código de referido (opcional)</Label>
      <div className="relative">
        <div className="absolute left-3 top-3 text-gray-400">
          <UserPlus size={18} />
        </div>
        <Input
          id="referralCode"
          type="text"
          placeholder="Ingrese su código de referido si tiene uno"
          className="pl-10"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ReferralCodeInput;
