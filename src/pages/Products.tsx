import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard, { Product } from '@/components/ProductCard';

const mockProducts: Product[] = [
  { id: '1', name: 'Stylish T-Shirt', price: 29.99, image: 'https://via.placeholder.com/300x200/FF0000/FFFFFF?text=T-Shirt', description: 'A comfortable and stylish t-shirt made from 100% organic cotton.' },
  { id: '2', name: 'Premium Headphones', price: 199.99, image: 'https://via.placeholder.com/300x200/00FF00/000000?text=Headphones', description: 'Experience immersive sound with these noise-cancelling headphones.' },
  { id: '3', name: 'Smartwatch Pro', price: 249.99, image: 'https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Smartwatch', description: 'Track your fitness and stay connected with the latest smartwatch technology.' },
  { id: '4', name: 'Designer Backpack', price: 89.99, image: 'https://via.placeholder.com/300x200/FFFF00/000000?text=Backpack', description: 'A durable and stylish backpack perfect for daily commute or travel.' },
  { id: '5', name: 'Ergonomic Office Chair', price: 349.99, image: 'https://via.placeholder.com/300x200/FF00FF/000000?text=Chair', description: 'Comfortable and supportive chair for long hours at your desk.' },
  { id: '6', name: 'Gaming Mouse', price: 59.99, image: 'https://via.placeholder.com/300x200/00FFFF/000000?text=Mouse', description: 'Precision gaming mouse with customizable RGB lighting.' },
  { id: '7', name: '4K Ultra HD Monitor', price: 499.99, image: 'https://via.placeholder.com/300x200/800000/FFFFFF?text=Monitor', description: 'Stunning visuals with this 27-inch 4K monitor.' },
  { id: '8', name: 'Wireless Keyboard', price: 79.99, image: 'https://via.placeholder.com/300x200/008000/FFFFFF?text=Keyboard', description: 'Sleek and responsive wireless keyboard for efficient typing.' },
];

const Products: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
