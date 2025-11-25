import { Card } from "@/components/ui/card";
import { Cloud, Database, Workflow } from "lucide-react";
import light06 from "@/assets/Lights/06.png";
import light09 from "@/assets/Lights/09.png";
import logoChatGPT from "@/assets/logos IAs/logo-chatgpt.png";
import logoClaude from "@/assets/logos IAs/Claude_AI_logo.png";
import logoGemini from "@/assets/logos IAs/logo Gemini.png";

const integrations = [
  { name: "OpenAI GPT", logo: logoChatGPT },
  { name: "Anthropic Claude", logo: logoClaude },
  { name: "Google Gemini", logo: logoGemini },
  { name: "APIs REST", icon: Workflow },
  { name: "Serviços Cloud", icon: Cloud },
  { name: "Sistemas Legados", icon: Database },
];

const benefits = [
  {
    title: "Integração Flexível",
    description: "Conecte qualquer modelo de IA ou API",
  },
  {
    title: "Customização Total",
    description: "Adapte a solução às suas necessidades",
  },
  {
    title: "Escalabilidade",
    description: "Cresça sem limitações técnicas",
  },
];

const Architecture = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={light06}
          alt=""
          className="absolute top-0 left-0 w-2/5 h-auto opacity-10"
        />
        <img
          src={light09}
          alt=""
          className="absolute bottom-0 right-0 w-1/3 h-auto opacity-12"
        />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Arquitetura Aberta: Liberdade de Escolha
            </h2>
          </div>
          
          {/* Architecture Diagram */}
          <div className="relative mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                {integrations.slice(0, 3).map((integration, index) => (
                  <Card
                    key={index}
                    className="p-6 gradient-card border-primary/10 shadow-card hover:shadow-elegant transition-smooth hover:translate-x-2"
                  >
                    <div className="flex items-center justify-center">
                      {integration.logo ? (
                        <img src={integration.logo} alt={integration.name} className="h-8 w-auto object-contain" />
                      ) : (
                        <div className="flex items-center gap-4">
                          <integration.icon className="w-6 h-6 text-primary" />
                          <span className="font-semibold text-foreground">{integration.name}</span>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Center - AYA */}
              <div className="flex items-center justify-center">
                <Card className="p-12 gradient-primary shadow-glow border-0 text-center">
                  <h3 className="text-4xl font-bold text-primary-foreground">AYA</h3>
                  <p className="text-primary-foreground/80 mt-2">Plataforma Central</p>
                </Card>
              </div>
              
              {/* Right Column */}
              <div className="space-y-4">
                {integrations.slice(3).map((integration, index) => (
                  <Card
                    key={index}
                    className="p-6 gradient-card border-primary/10 shadow-card hover:shadow-elegant transition-smooth hover:-translate-x-2"
                  >
                    <div className="flex items-center justify-center">
                      {integration.logo ? (
                        <img src={integration.logo} alt={integration.name} className="h-8 w-auto object-contain" />
                      ) : (
                        <div className="flex items-center gap-4">
                          <integration.icon className="w-6 h-6 text-primary" />
                          <span className="font-semibold text-foreground">{integration.name}</span>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-2">
                <h3 className="text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
