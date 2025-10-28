import { Card } from "@/components/ui/card";
import { Maximize2, DollarSign, ArrowUpRight, Sparkles, Shield } from "lucide-react";
import lightOrigen from "@/assets/Lights/ORIGEN.png";
import light01 from "@/assets/Lights/01.png";

const advantages = [
  {
    icon: Maximize2,
    title: "Flexibilidade Inigualável",
    description: "Adaptação total às necessidades específicas do seu negócio sem limitações.",
  },
  {
    icon: DollarSign,
    title: "Otimização de Custos",
    description: "Escolha do modelo de IA mais eficiente para cada tarefa específica.",
  },
  {
    icon: ArrowUpRight,
    title: "Escalabilidade",
    description: "Crescimento junto com a demanda do seu negócio sem restrições.",
  },
  {
    icon: Sparkles,
    title: "Inovação Contínua",
    description: "Acesso às últimas tecnologias de IA sem dependência de fornecedor único.",
  },
  {
    icon: Shield,
    title: "Suporte Especializado",
    description: "Expertise e segurança de um parceiro confiável e experiente.",
  },
];

const Advantages = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={lightOrigen}
          alt=""
          className="absolute top-1/4 left-0 w-1/3 h-auto opacity-15"
        />
        <img
          src={light01}
          alt=""
          className="absolute bottom-10 right-0 w-2/5 h-auto opacity-12"
        />
      </div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              AYA: Vantagens Competitivas para o Seu Futuro
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="p-8 gradient-card border-primary/10 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-smooth">
                    <advantage.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="p-12 gradient-primary shadow-glow border-0 text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Resultado: Transformação Digital Acelerada
            </h3>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Com AYA, sua empresa ganha autonomia, eficiência e vantagem competitiva no mercado de IA, transformando desafios em oportunidades de crescimento.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
