import { Globe, Lightbulb, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import light02 from "@/assets/Lights/02.png";
import light10 from "@/assets/Lights/10.png";

const features = [
  {
    icon: Globe,
    title: "Presença Global",
    description: "Operando em mais de 40 países, a Seidor oferece soluções tecnológicas de classe mundial com expertise local.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Contínua",
    description: "Investimento constante em pesquisa e desenvolvimento para manter-se na vanguarda da transformação digital.",
  },
  {
    icon: Users,
    title: "Parcerias Estratégicas",
    description: "Colaborações com líderes tecnológicos globais para oferecer soluções integradas e inovadoras.",
  },
  {
    icon: Award,
    title: "Confiança Comprovada",
    description: "Décadas de experiência em transformação digital, com milhares de clientes satisfeitos em diversos setores.",
  },
];

const About = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorative Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={light02}
          alt=""
          className="absolute top-0 right-0 w-1/3 h-auto opacity-15"
        />
        <img
          src={light10}
          alt=""
          className="absolute bottom-0 left-0 w-1/4 h-auto opacity-10"
        />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Seidor: Seu Parceiro Estratégico na Era da IA
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 gradient-card border-primary/10 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
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

export default About;
