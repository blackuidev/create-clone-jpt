import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { Product } from '@/components/ProductCard'; // Re-use Product interface

// Mock product data (should be fetched from an API in a real app)
const mockProducts: Product[] = [
  { id: '1', name: 'Stylish T-Shirt', price: 29.99, image: 'https://via.placeholder.com/500x400/FF0000/FFFFFF?text=T-Shirt', description: 'A comfortable and stylish t-shirt made from 100% organic cotton. Perfect for everyday wear, available in multiple sizes and colors.' },
  { id: '2', name: 'Premium Headphones', price: 199.99, image: 'https://via.placeholder.com/500x400/00FF00/000000?text=Headphones', description: 'Experience immersive sound with these noise-cancelling headphones. Featuring long-lasting battery life and crystal-clear audio.' },
  { id: '3', name: 'Smartwatch Pro', price: 249.99, image: 'https://via.placeholder.com/500x400/0000FF/FFFFFF?text=Smartwatch', description: 'Track your fitness and stay connected with the latest smartwatch technology. Includes heart rate monitor, GPS, and notification alerts.' },
  { id: '4', name: 'Designer Backpack', price: 89.99, image: 'https://via.placeholder.com/500x400/FFFF00/000000?text=Backpack', description: 'A durable and stylish backpack perfect for daily commute or travel. Features multiple compartments and water-resistant material.' },
  { id: '5', name: 'Ergonomic Office Chair', price: 349.99, image: 'https://via.placeholder.com/500x400/FF00FF/000000?text=Chair', description: 'Comfortable and supportive chair for long hours at your desk. Adjustable lumbar support and armrests for optimal posture.' },
  { id: '6', name: 'Gaming Mouse', price: 59.99, image: 'https://via.placeholder.com/500x400/00FFFF/000000?text=Mouse', description: 'Precision gaming mouse with customizable RGB lighting and programmable buttons. Designed for competitive gamers.' },
  { id: '7', name: '4K Ultra HD Monitor', price: 499.99, image: 'https://via.placeholder.com/500x400/800000/FFFFFF?text=Monitor', description: 'Stunning visuals with this 27-inch 4K monitor. Perfect for gaming, graphic design, and everyday productivity.' },
  { id: '8', name: 'Wireless Keyboard', price: 79.99, image: 'https://via.placeholder.com/500x400/008000/FFFFFF?text=Keyboard', description: 'Sleek and responsive wireless keyboard for efficient typing. Features a comfortable low-profile design and long battery life.' },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-8 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p>The product you are looking for does not exist.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (e.target.value === '') {
      setQuantity(0); // Allow empty input temporarily
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addItem(product, quantity);
      alert(`${quantity} of ${product.name} added to cart!`);
    } else {
      alert('Please enter a valid quantity.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="md:sticky md:top-8"> {/* Added sticky for image */}
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>
            <p className="text-4xl font-extrabold text-primary mb-6">${product.price.toFixed(2)}</p>

            <div className="flex items-center space-x-4 mb-8">
              <Label htmlFor="quantity" className="text-lg">Quantity:</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity === 0 ? '' : quantity}
                onChange={handleQuantityChange}
                className="w-24 text-center"
              />
            </div>
            <Button onClick={handleAddToCart} size="lg" className="w-full md:w-auto">
              Add to Cart
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
