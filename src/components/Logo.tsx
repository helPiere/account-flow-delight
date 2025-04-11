
import React from "react";
import { Building } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <Building className="h-8 w-8 text-primary" />
      <span className="font-bold text-xl">Business Platform</span>
    </Link>
  );
};

export default Logo;
