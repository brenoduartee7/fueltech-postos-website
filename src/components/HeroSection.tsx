
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/977729c5-911a-4507-97d5-e2c61517e94a.png')`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/d7be9d67-f63c-483e-9f6e-3d9a2f01586a.png" 
            alt="Fuel Tech Postos" 
            className="h-32 md:h-40 w-auto mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Soluções Completas para 
            <span className="text-blue-400 block">Postos de Combustível</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Especializada em construção, reforma e adequação de postos de abastecimento, 
            comerciais e industriais com foco em qualidade, segurança e conformidade técnica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection('produtos')}
            >
              Nossos Produtos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection('contato')}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
