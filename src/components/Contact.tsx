import logoColorPositive from "@/assets/LOGO_COLOR_POSITIVE.png";
import light05 from "@/assets/Lights/05.png";
import light08 from "@/assets/Lights/08.png";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorative Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={light05}
          alt=""
          className="absolute top-0 right-0 w-1/3 h-auto opacity-15"
        />
        <img
          src={light08}
          alt=""
          className="absolute bottom-0 left-0 w-2/5 h-auto opacity-12"
        />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sua Jornada de Transformação Começa Aqui
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pronto para revolucionar sua forma de trabalhar com inteligência artificial?
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={logoColorPositive}
              alt="Logo Color Positive"
              className="h-32 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
