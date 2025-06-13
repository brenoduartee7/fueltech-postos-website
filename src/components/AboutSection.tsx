
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Wrench, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Segurança e Qualidade",
      description: "Produtos certificados e soluções que atendem às mais rigorosas normas de segurança do setor."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Atendimento Especializado",
      description: "Equipe técnica qualificada para atender empresas privadas e órgãos públicos."
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-500" />,
      title: "Soluções Completas",
      description: "Desde a construção até a adequação, oferecemos infraestrutura completa para postos."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "Conformidade Técnica",
      description: "Garantimos que todos os projetos atendam às exigências técnicas e regulamentares."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Sobre a Fuel Tech Postos</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A <strong>Fuel Tech Postos</strong> é especializada em soluções para postos de combustíveis, 
            com foco em qualidade, segurança e conformidade técnica. Atendemos empresas privadas e 
            órgãos públicos, oferecendo infraestrutura de alto padrão para o setor de abastecimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Nossos Clientes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h4 className="font-semibold text-blue-600 mb-2">Postos de Serviços</h4>
              <p className="text-gray-600">Modernização e adequação completa</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-blue-600 mb-2">Transportadoras & TRR's</h4>
              <p className="text-gray-600">Soluções para frotas comerciais</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-blue-600 mb-2">Mineradoras</h4>
              <p className="text-gray-600">Infraestrutura industrial robusta</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-blue-600 mb-2">Empresas de Ônibus</h4>
              <p className="text-gray-600">Sistemas de abastecimento eficientes</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-blue-600 mb-2">Prefeituras</h4>
              <p className="text-gray-600">Projetos para órgãos municipais</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-blue-600 mb-2">Polícia & Bombeiros</h4>
              <p className="text-gray-600">Bases operacionais seguras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
