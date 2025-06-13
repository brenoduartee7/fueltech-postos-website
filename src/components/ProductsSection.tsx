
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      title: "Bicos de Abastecimento",
      description: "Bicos automáticos de alta qualidade para diferentes tipos de combustível, com sistema de segurança e durabilidade superior.",
      image: "/lovable-uploads/0352de4c-9628-46d8-93eb-8b41fe62f31b.png",
      features: ["Sistema automático", "Alta durabilidade", "Segurança certificada"]
    },
    {
      title: "Painéis de Preços",
      description: "Painéis eletrônicos de LED para exibição de preços, com alta visibilidade e fácil programação para diferentes combustíveis.",
      image: "/lovable-uploads/75267bb3-d6e9-4361-8e33-8220338e44aa.png",
      features: ["Display LED", "Alta visibilidade", "Programação fácil"]
    },
    {
      title: "Filtros de Diesel",
      description: "Sistemas de filtragem avançados para diesel, garantindo a pureza do combustível e proteção dos equipamentos.",
      image: "/lovable-uploads/2cf24fe7-1ad9-4a87-bb46-0bfa1a008ba2.png",
      features: ["Filtragem avançada", "Proteção de equipamentos", "Fácil manutenção"]
    },
    {
      title: "Sistemas de Filtragem BRF",
      description: "Equipamentos de filtragem industrial de alta capacidade para grandes volumes de combustível.",
      image: "/lovable-uploads/9eb19be3-5b74-42a9-b316-12598613ba2c.png",
      features: ["Alta capacidade", "Uso industrial", "Tecnologia avançada"]
    },
    {
      title: "Unidades de Filtragem Diesel",
      description: "Unidades completas de filtragem com sistema integrado para tratamento e purificação de diesel.",
      image: "/lovable-uploads/8196ab2d-3676-4a61-a822-2d744d9eda93.png",
      features: ["Sistema integrado", "Tratamento completo", "Certificação BRF"]
    },
    {
      title: "Consoles Eletrônicos",
      description: "Sistemas de controle e monitoramento eletrônico para bombas de combustível com display digital.",
      image: "/lovable-uploads/e87fb8e9-0238-403b-9ad5-4899fb9f75dc.png",
      features: ["Controle digital", "Monitoramento", "Interface intuitiva"]
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
