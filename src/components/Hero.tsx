import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ayaLogo from "@/assets/AYA b 1.png";
import light01 from "@/assets/Lights/01.png";
import light05 from "@/assets/Lights/05.png";
import light08 from "@/assets/Lights/08.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />

      {/* Animated Background Pattern with Lights */}
      <div className="absolute inset-0">
        <img
          src={light01}
          alt=""
          className="absolute top-0 right-0 w-1/2 h-auto opacity-30 animate-pulse"
        />
        <img
          src={light08}
          alt=""
          className="absolute bottom-10 left-10 w-1/3 h-auto opacity-25 animate-pulse [animation-delay:1000ms]"
        />
        <img
          src={light05}
          alt=""
          className="absolute top-1/4 left-1/4 w-2/5 h-auto opacity-20 animate-pulse [animation-delay:500ms]"
        />
      </div>
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src={ayaLogo} 
              alt="AYA by SEIDOR" 
              className="h-24 w-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in-up">
            Desbloqueando o Potencial da IA com{" "}
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">AYA</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            Plataforma de Agentes Inteligentes Totalmente Customizáveis
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center pt-4 animate-fade-in-up [animation-delay:400ms]">
            <Button 
              size="xl" 
              variant="accent"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba Mais
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
