import Hero from "@/components/Hero";
import About from "@/components/About";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Architecture from "@/components/Architecture";
import UseCases from "@/components/UseCases";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Problems />
      <Solution />
      <Architecture />
      <UseCases />
      <Advantages />
      <Contact />
    </div>
  );
};

export default Index;
