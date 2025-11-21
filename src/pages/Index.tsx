import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard, { Product } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { AuroraBackground } from '@/components/ui/aurora-background'; // Assuming this exists

const featuredProducts: Product[] = [
  { id: '1', name: 'Stylish T-Shirt', price: 29.99, image: 'https://via.placeholder.com/300x200/FF0000/FFFFFF?text=T-Shirt' },
  { id: '2', name: 'Premium Headphones', price: 199.99, image: 'https://via.placeholder.com/300x200/00FF00/000000?text=Headphones' },
  { id: '3', name: 'Smartwatch Pro', price: 249.99, image: 'https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Smartwatch' },
  { id: '4', name: 'Designer Backpack', price: 89.99, image: 'https://via.placeholder.com/300x200/FFFF00/000000?text=Backpack' },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <AuroraBackground className="flex flex-col items-center justify-center text-white py-20 px-4">
          <h1 className="text-5xl font-bold text-center mb-4">Discover Your Next Favorite Item</h1>
          <p className="text-xl text-center mb-8 max-w-2xl">
            Explore our curated collection of high-quality products, crafted just for you.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Shop Now
            </Button>
          </Link>
        </AuroraBackground>

        {/* Featured Products */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
