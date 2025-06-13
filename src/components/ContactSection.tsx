
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      nome: '',
      telefone: '',
      email: '',
      mensagem: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para ajudar com suas necessidades de equipamentos para postos de combustível.
            Entre em contato conosco para mais informações.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Phone className="mr-3 text-blue-400" />
                  Telefone/WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">(31) 99353-9815</p>
                <Button 
                  className="mt-3 bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('https://wa.me/5531993539815', '_blank')}
                >
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="mr-3 text-blue-400" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">fueltechpostos@gmail.com</p>
                <Button 
                  variant="outline" 
                  className="mt-3 border-gray-600 text-gray-300 hover:bg-slate-700"
                  onClick={() => window.open('mailto:fueltechpostos@gmail.com', '_blank')}
                >
                  Enviar E-mail
                </Button>
              </CardContent>
            </Card>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Horário de Atendimento</h3>
              <div className="space-y-2 text-gray-300">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <MessageSquare className="mr-3 text-blue-400" />
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome" className="text-gray-300">Nome *</Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white mt-2"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="telefone" className="text-gray-300">Telefone *</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white mt-2"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white mt-2"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="mensagem" className="text-gray-300">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-slate-700 border-slate-600 text-white mt-2"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
