
import React from "react";
import { useRegistration } from "@/contexts/RegistrationContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";

const SatisfactionSurveyStep = () => {
  const { satisfactionSurvey, setSatisfactionSurvey, nextStep, prevStep } = useRegistration();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rating is required, feedback is optional
    if (satisfactionSurvey.rating === 0) {
      toast({
        title: "Calificación requerida",
        description: "Por favor seleccione una calificación",
        variant: "destructive",
      });
      return;
    }
    
    // If validation passes, proceed to complete
    nextStep();
    
    // In a real application, here you would submit the survey data
    console.log("Survey submitted:", satisfactionSurvey);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Encuesta de satisfacción</h2>
      
      <p className="text-gray-600 mb-6">
        Ayúdenos a mejorar calificando su experiencia de registro
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <Label className="mb-4 block">¿Cómo calificaría su experiencia de registro?</Label>
            
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  className="focus:outline-none transition-all duration-200"
                  onClick={() => setSatisfactionSurvey({ rating })}
                >
                  <Star
                    className={`w-10 h-10 ${
                      rating <= satisfactionSurvey.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
            
            <div className="flex justify-between text-sm text-gray-500 mt-1 px-1">
              <span>Poco satisfecho</span>
              <span>Muy satisfecho</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="feedback">Comentarios adicionales (opcional)</Label>
            <Textarea
              id="feedback"
              placeholder="¿Cómo podríamos mejorar su experiencia?"
              rows={4}
              value={satisfactionSurvey.feedback}
              onChange={(e) => setSatisfactionSurvey({ feedback: e.target.value })}
            />
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
          <Button type="button" variant="outline" onClick={prevStep}>
            Atrás
          </Button>
          <Button type="submit">
            Finalizar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SatisfactionSurveyStep;
