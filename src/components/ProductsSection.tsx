
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      title: "Bombas de Combustível Multiproduto",
      description: "Bombas de combustível de alta tecnologia com capacidade para múltiplos produtos, ideais para postos de grande movimento.",
      image: "/lovable-uploads/f290dd43-84bc-4440-847e-7006cd191d91.png",
      features: ["Multiproduto", "Alta capacidade", "Tecnologia avançada"]
    },
    {
      title: "Tanques de Armazenamento Subterrâneo",
      description: "Tanques cilíndricos de alta capacidade para armazenamento seguro de combustíveis, com revestimento anticorrosivo.",
      image: "/lovable-uploads/ae9e1125-b7fb-4907-88f8-30d6fe06ce73.png",
      features: ["Alta capacidade", "Anticorrosivo", "Segurança certificada"]
    },
    {
      title: "Sistemas de Monitoramento TLS4",
      description: "Console de monitoramento eletrônico avançado para controle de tanques e detecção de vazamentos em tempo real.",
      image: "/lovable-uploads/5f3f5b72-9f77-4d41-96cf-18c508cc6dca.png",
      features: ["Monitoramento em tempo real", "Detecção de vazamentos", "Interface touch screen"]
    },
    {
      title: "Console TLS450 Plus",
      description: "Sistema integrado de monitoramento com impressora e display colorido para controle completo de estoque de combustíveis.",
      image: "/lovable-uploads/313f3588-0d06-42f4-8ac2-172fb113c5fb.png",
      features: ["Display colorido", "Impressora integrada", "Controle de estoque"]
    },
    {
      title: "Bomba de Combustível Diesel",
      description: "Bomba específica para diesel com sistema de filtragem integrado e alta precisão na medição.",
      image: "/lovable-uploads/08e27e08-d1cd-49bf-b74b-71606b91665c.png",
      features: ["Específica para diesel", "Sistema de filtragem", "Alta precisão"]
    },
    {
      title: "Bomba Standard Dupla",
      description: "Bomba de combustível com dois bicos de abastecimento, ideal para postos com fluxo médio de veículos.",
      image: "/lovable-uploads/09a16747-0ef6-4eba-b65b-f9745ee17f80.png",
      features: ["Duplo abastecimento", "Display digital", "Eficiência energética"]
    },
    {
      title: "Bomba Single Product",
      description: "Bomba compacta para um único tipo de combustível, perfeita para estabelecimentos com demanda específica.",
      image: "/lovable-uploads/91371790-6bea-40bc-86bc-749ccfa35849.png",
      features: ["Produto único", "Design compacto", "Fácil instalação"]
    },
    {
      title: "Bomba Premium Dupla",
      description: "Bomba de alta performance com dois pontos de abastecimento e sistema eletrônico avançado de controle.",
      image: "/lovable-uploads/c0f88b22-be72-4277-98e8-25eb42999585.png",
      features: ["Alta performance", "Controle eletrônico", "Design moderno"]
    },
    {
      title: "Acessórios de Vedação",
      description: "Kit completo de vedações e conexões para tanques subterrâneos, garantindo segurança e prevenção de vazamentos.",
      image: "/lovable-uploads/57d726e7-0e39-43a7-a8cd-69b6d5e5bfcd.png",
      features: ["Kit completo", "Prevenção de vazamentos", "Materiais certificados"]
    }
  ];

  const productCategories = [
    {
      title: "Bombas de Combustíveis",
      description: "Equipamentos de alta performance para diferentes tipos de combustível"
    },
    {
      title: "Medidores de Tanque",
      description: "Sistemas de monitoramento e controle de estoque"
    },
    {
      title: "Sistemas de Detecção de Vazamento",
      description: "Tecnologia avançada para segurança e prevenção"
    },
    {
      title: "Tanques de Armazenamento",
      description: "Soluções seguras para armazenamento de combustíveis"
    },
    {
      title: "Caixas Separadoras e Conexões",
      description: "Componentes essenciais para sistemas de combustível"
    },
    {
      title: "Acessórios Diversos",
      description: "Mangueiras, baldes aferidores e componentes complementares"
    },
    {
      title: "Itens Visuais",
      description: "Painéis LED, refletores, armários para ilhas e coberturas personalizadas"
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Nossos Produtos</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Oferecemos uma linha completa de produtos de alta durabilidade, certificados e 
            fornecidos pelos principais fabricantes do setor de combustíveis.
          </p>
        </div>

        {/* Featured Products with Images */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Produtos em Destaque</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Categorias de Produtos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{category.title}</h4>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Qualidade Garantida</h3>
          <p className="text-lg text-gray-700">
            Todos os nossos produtos são de <strong>alta durabilidade</strong>, 
            <strong> certificados</strong> e fornecidos pelos <strong>principais fabricantes</strong> do setor.
            Garantimos conformidade técnica e segurança em todos os equipamentos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
