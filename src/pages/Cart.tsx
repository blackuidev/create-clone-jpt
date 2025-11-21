import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2 } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateItemQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Your Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            <p className="mb-4">Your cart is empty.</p>
            <Link to="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <>
            <Table className="mb-8">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Product</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Link to={`/products/${item.id}`}>
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                      </Link>
                    </TableCell>
                    <TableCell className="font-medium">
                      <Link to={`/products/${item.id}`} className="hover:underline">
                        {item.name}
                      </Link>
                    </TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell className="text-center">
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-20 text-center mx-auto"
                      />
                    </TableCell>
                    <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex justify-end items-center mb-8">
              <h2 className="text-2xl font-bold">Cart Total: ${cartTotal.toFixed(2)}</h2>
            </div>

            <div className="flex justify-end gap-4">
              <Link to="/products">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
              <Link to="/checkout">
                <Button size="lg">Proceed to Checkout</Button>
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
