import { Card } from "@/components/ui/card";
import { Headphones, Workflow, TrendingUp } from "lucide-react";
import light11 from "@/assets/Lights/11.png";
import light13 from "@/assets/Lights/13.png";

const useCases = [
  {
    icon: Headphones,
    title: "Atendimento ao Cliente",
    description: "Agentes de IA customizados que entendem o contexto do cliente, resolvem problemas com precisão e escalam para suporte humano quando necessário.",
    metric: "+45%",
    metricLabel: "Melhoria em Satisfação",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Automatize fluxos de trabalho complexos integrando AYA com seus sistemas. Reduza erros manuais e libere sua equipe para tarefas estratégicas.",
    metric: "-60%",
    metricLabel: "Redução de Tempo",
  },
  {
    icon: TrendingUp,
    title: "Análise de Dados",
    description: "Extraia insights valiosos de grandes volumes de dados. AYA identifica padrões e tendências para decisões mais inteligentes e rápidas.",
    metric: "+80%",
    metricLabel: "Aumento de Insights",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorative Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={light11}
          alt=""
          className="absolute top-0 right-0 w-2/5 h-auto opacity-12"
        />
        <img
          src={light13}
          alt=""
          className="absolute bottom-0 left-0 w-1/3 h-auto opacity-10"
        />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Transformando Negócios: Casos de Uso Reais
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index}
                className="p-8 gradient-card border-primary/10 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 group"
              >
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-smooth group-hover:scale-110">
                      <useCase.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center text-foreground">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {useCase.description}
                  </p>
                  
                  <div className="pt-6 border-t border-border">
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                        {useCase.metric}
                      </div>
                      <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                        {useCase.metricLabel}
                      </div>
                    </div>
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

export default UseCases;
