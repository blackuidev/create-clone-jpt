import React from 'react';
import { Button } from '@/components/ui/button';
import { ToggleTheme } from '@/components/ui/toggle-theme';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Site Title/Logo */}
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">JPT Clone</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Home</Link>
          <Link to="/products" className="transition-colors hover:text-foreground/80 text-foreground/60">Products</Link>
          <Link to="/cart" className="transition-colors hover:text-foreground/80 text-foreground/60">Cart</Link>
        </nav>

        {/* Theme Toggle */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
