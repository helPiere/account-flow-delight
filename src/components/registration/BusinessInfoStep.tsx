
import React from "react";
import { useRegistration } from "@/contexts/RegistrationContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { BusinessSector, EmployeeRange } from "@/contexts/RegistrationContext";

const BusinessInfoStep = () => {
  const { businessInfo, setBusinessInfo, nextStep, prevStep } = useRegistration();
  const { toast } = useToast();

  const sectors: { value: BusinessSector; label: string }[] = [
    { value: "technology", label: "Tecnología" },
    { value: "healthcare", label: "Salud" },
    { value: "education", label: "Educación" },
    { value: "finance", label: "Finanzas" },
    { value: "retail", label: "Comercio" },
    { value: "manufacturing", label: "Manufactura" },
    { value: "other", label: "Otro" },
  ];

  const employeeRanges: { value: EmployeeRange; label: string }[] = [
    { value: "1-10", label: "1-10 empleados" },
    { value: "11-50", label: "11-50 empleados" },
    { value: "51-200", label: "51-200 empleados" },
    { value: "201-500", label: "201-500 empleados" },
    { value: "501-1000", label: "501-1000 empleados" },
    { value: "1000+", label: "Más de 1000 empleados" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!businessInfo.name.trim()) {
      toast({
        title: "Campo requerido",
        description: "Por favor ingrese el nombre del negocio",
        variant: "destructive",
      });
      return;
    }
    
    if (!businessInfo.description.trim()) {
      toast({
        title: "Campo requerido",
        description: "Por favor ingrese una descripción breve",
        variant: "destructive",
      });
      return;
    }
    
    // If all validation passes, proceed to next step
    nextStep();
    
    // In a real application, here you would call an API to update business info
    console.log("Business info submitted:", businessInfo);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Información de su negocio</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="business-name">Nombre del negocio</Label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Building2 size={18} />
              </div>
              <Input
                id="business-name"
                placeholder="Ingrese el nombre de su negocio"
                className="pl-10"
                value={businessInfo.name}
                onChange={(e) => setBusinessInfo({ name: e.target.value })}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="business-sector">Sector</Label>
            <Select
              value={businessInfo.sector}
              onValueChange={(value) => setBusinessInfo({ sector: value as BusinessSector })}
            >
              <SelectTrigger id="business-sector">
                <SelectValue placeholder="Seleccione un sector" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector.value} value={sector.value}>
                    {sector.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="business-description">Descripción breve</Label>
            <Textarea
              id="business-description"
              placeholder="Describa brevemente a qué se dedica su negocio"
              rows={3}
              value={businessInfo.description}
              onChange={(e) => setBusinessInfo({ description: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="employee-range">Número de empleados</Label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Users size={18} />
              </div>
              <Select
                value={businessInfo.employeeRange}
                onValueChange={(value) => setBusinessInfo({ employeeRange: value as EmployeeRange })}
              >
                <SelectTrigger id="employee-range" className="pl-10">
                  <SelectValue placeholder="Seleccione un rango" />
                </SelectTrigger>
                <SelectContent>
                  {employeeRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
          <Button type="button" variant="outline" onClick={prevStep}>
            Atrás
          </Button>
          <Button type="submit">
            Continuar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BusinessInfoStep;
