import { AlertCircle, Puzzle, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import light03 from "@/assets/Lights/03.png";
import light12 from "@/assets/Lights/12.png";

const problems = [
  {
    icon: Settings,
    title: "Falta de Customização",
    description: "Modelos genéricos limitam sua capacidade de adaptar a IA às necessidades específicas do seu negócio.",
  },
  {
    icon: Puzzle,
    title: "Integração Complexa",
    description: "Dificuldade em conectar múltiplos modelos de IA com seus sistemas existentes e fluxos de trabalho.",
  },
  {
    icon: AlertCircle,
    title: "Gerenciamento Complicado",
    description: "Custo e complexidade elevados na gestão de múltiplos modelos e dependência de fornecedores únicos.",
  },
];

const Problems = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={light03}
          alt=""
          className="absolute top-10 left-0 w-1/4 h-auto opacity-10"
        />
        <img
          src={light12}
          alt=""
          className="absolute bottom-0 right-0 w-1/3 h-auto opacity-12"
        />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Superando os Obstáculos da IA Convencional
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <Card 
                key={index}
                className="p-8 text-center gradient-card border-destructive/20 shadow-card hover:border-destructive/40 transition-smooth"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <problem.icon className="w-8 h-8 text-destructive" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Essas limitações impedem que as empresas aproveitem todo o potencial da IA para transformar seus negócios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;
