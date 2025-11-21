import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { SparkleNavbar } from '@/components/ui/sparkle-navbar'; // Assuming sparkle-navbar exists
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

const Header: React.FC = () => {
  const { itemCount } = useCart();

  return (
    <SparkleNavbar
      logo={
        <NavLink to="/" className="text-xl font-bold text-white">
          E-commerce Store
        </NavLink>
      }
      links={[
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'Products',
          href: '/products',
        },
      ]}
      cta={
        <NavLink to="/cart" className="relative">
          <Button variant="ghost" className="relative">
            <ShoppingCart className="h-5 w-5 text-white" />
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center p-0">
                {itemCount}
              </Badge>
            )}
          </Button>
        </NavLink>
      }
    />
  );
};

export default Header;
