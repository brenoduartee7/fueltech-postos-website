
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Settings, FileText, MessageSquare, Package } from 'lucide-react';

const Admin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("content");

  // Mock data for demonstration
  const [messages] = useState([
    {
      id: 1,
      nome: "João Silva",
      telefone: "(31) 99999-9999",
      email: "joao@email.com",
      mensagem: "Gostaria de mais informações sobre bombas de combustível.",
      data: "2024-01-15"
    },
    {
      id: 2,
      nome: "Maria Santos",
      telefone: "(31) 88888-8888",
      email: "maria@email.com",
      mensagem: "Preciso de orçamento para reforma completa do posto.",
      data: "2024-01-14"
    }
  ]);

  const handleSave = () => {
    toast({
      title: "Alterações salvas!",
      description: "O conteúdo foi atualizado com sucesso.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Painel Administrativo</h1>
          <p className="text-gray-600">Gerencie o conteúdo do site Fuel Tech Postos</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText size={16} />
              Conteúdo
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package size={16} />
              Produtos
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare size={16} />
              Mensagens
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings size={16} />
              Configurações
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Seção Hero</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="hero-title">Título Principal</Label>
                    <Input 
                      id="hero-title"
                      defaultValue="Soluções Completas para Postos de Combustível"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-subtitle">Subtítulo</Label>
                    <Textarea 
                      id="hero-subtitle"
                      defaultValue="Especializada em construção, reforma e adequação de postos de abastecimento, comerciais e industriais com foco em qualidade, segurança e conformidade técnica."
                      className="mt-2"
                    />
                  </div>
                  <Button onClick={handleSave}>Salvar Alterações</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Seção Sobre Nós</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="about-content">Conteúdo</Label>
                    <Textarea 
                      id="about-content"
                      rows={6}
                      defaultValue="A Fuel Tech Postos é especializada em soluções para postos de combustíveis, com foco em qualidade, segurança e conformidade técnica. Atendemos empresas privadas e órgãos públicos, oferecendo infraestrutura de alto padrão para o setor de abastecimento."
                      className="mt-2"
                    />
                  </div>
                  <Button onClick={handleSave}>Salvar Alterações</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciar Produtos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button>Adicionar Novo Produto</Button>
                  <div className="grid gap-4">
                    <div className="border p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">Bicos de Abastecimento</h3>
                        <p className="text-sm text-gray-600">Sistema automático de alta qualidade</p>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">Editar</Button>
                        <Button variant="destructive" size="sm">Excluir</Button>
                      </div>
                    </div>
                    <div className="border p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">Painéis de Preços</h3>
                        <p className="text-sm text-gray-600">Display LED de alta visibilidade</p>
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">Editar</Button>
                        <Button variant="destructive" size="sm">Excluir</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Mensagens Recebidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="border p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{message.nome}</h3>
                        <span className="text-sm text-gray-500">{message.data}</span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600 mb-3">
                        <p>Telefone: {message.telefone}</p>
                        <p>E-mail: {message.email}</p>
                      </div>
                      <p className="text-gray-800">{message.mensagem}</p>
                      <div className="mt-3 space-x-2">
                        <Button size="sm">Responder</Button>
                        <Button variant="outline" size="sm">Marcar como Lida</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp</Label>
                    <Input 
                      id="phone"
                      defaultValue="(31) 99353-9815"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email"
                      defaultValue="fueltechpostos@gmail.com"
                      className="mt-2"
                    />
                  </div>
                  <Button onClick={handleSave}>Salvar Alterações</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Configurações do Site</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="site-title">Título do Site</Label>
                    <Input 
                      id="site-title"
                      defaultValue="Fuel Tech Postos"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="site-description">Descrição</Label>
                    <Textarea 
                      id="site-description"
                      defaultValue="Especializada em soluções para postos de combustível"
                      className="mt-2"
                    />
                  </div>
                  <Button onClick={handleSave}>Salvar Alterações</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
