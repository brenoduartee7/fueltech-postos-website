
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/d2a09d3a-6291-47f0-be50-72558c15d15b.png" 
              alt="Fuel Tech Postos" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400">
              Especializada em soluções completas para postos de combustível, 
              oferecendo qualidade, segurança e conformidade técnica.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <p>Telefone/WhatsApp: (31) 99353-9815</p>
              <p>E-mail: fueltechpostos@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Nossos Clientes</h3>
            <div className="space-y-1 text-gray-400 text-sm">
              <p>• Postos de Serviços</p>
              <p>• Transportadoras e TRR's</p>
              <p>• Mineradoras</p>
              <p>• Empresas de Ônibus</p>
              <p>• Prefeituras</p>
              <p>• Bases da Polícia e Bombeiros</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Fuel Tech Postos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
