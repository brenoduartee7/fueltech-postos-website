
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

const ProductCard = ({ title, description, image, features }: ProductCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-500 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
