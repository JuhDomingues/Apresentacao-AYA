import { Sparkles, Cpu, Zap, Link2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import light04 from "@/assets/Lights/04.png";
import light07 from "@/assets/Lights/07.png";

const features = [
  {
    icon: Sparkles,
    title: "Totalmente Customizável",
    description: "Adapte cada aspecto da plataforma às necessidades específicas do seu negócio, sem limitações impostas.",
  },
  {
    icon: Cpu,
    title: "Múltiplos Modelos de IA",
    description: "Não limitada a um único modelo. Escolha e integre os melhores modelos de IA para cada caso de uso.",
  },
  {
    icon: Zap,
    title: "Implementação Rápida",
    description: "Comece em dias, não em meses. Arquitetura pronta para produção com mínima configuração necessária.",
  },
  {
    icon: Link2,
    title: "Integração Nativa com Seidor",
    description: "AYA se conecta perfeitamente com outros produtos Seidor, maximizando o valor do seu investimento.",
  },
];

const Solution = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorative Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={light04}
          alt=""
          className="absolute top-0 right-0 w-2/5 h-auto opacity-15"
        />
        <img
          src={light07}
          alt=""
          className="absolute bottom-0 left-0 w-1/3 h-auto opacity-12"
        />
      </div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 text-base px-4 py-2 bg-accent/10 text-accent border-accent/20">
              APRESENTAMOS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              AYA: A Resposta Inovadora da Seidor
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AYA é uma plataforma revolucionária de desenvolvimento de agentes inteligentes que coloca o poder da IA customizável nas mãos do seu negócio. Projetada para ser totalmente adaptável, AYA elimina as limitações das soluções genéricas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 gradient-card border-primary/10 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-smooth group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
