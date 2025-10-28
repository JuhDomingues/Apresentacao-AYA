import { Card } from "@/components/ui/card";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const QA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 gradient-card border-primary/10 shadow-elegant text-center space-y-8">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                <MessageCircle className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Perguntas e Respostas
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Vamos conversar sobre AYA
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tem dúvidas sobre a plataforma AYA ou quer saber como ela pode transformar seu negócio? 
              Este é o momento perfeito para explorar todas as possibilidades.
            </p>
            
            <div className="pt-6">
              <Button 
                size="lg" 
                variant="hero"
                onClick={() => window.location.href = 'mailto:contato@seidor.com'}
              >
                Entrar em Contato
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="pt-8 border-t border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Próximos Passos
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                <a href="mailto:contato@seidor.com" className="hover:text-primary transition-colors">
                  ✉ contato@seidor.com
                </a>
                <a href="tel:+551130000000" className="hover:text-primary transition-colors">
                  📞 +55 (11) 3000-0000
                </a>
                <a href="https://www.seidor.com" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  🌐 www.seidor.com
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QA;
