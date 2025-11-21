import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/products/${product.id}`}>
        <CardHeader className="p-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </CardHeader>
      </Link>
      <CardContent className="p-4">
        <Link to={`/products/${product.id}`}>
          <CardTitle className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</CardTitle>
        </Link>
        <p className="text-gray-700 font-bold text-xl">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
