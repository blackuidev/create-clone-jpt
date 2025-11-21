import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/context/CartContext';

import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { z } from 'zod';

const checkoutSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'Zip Code is required'),
  country: z.string().min(1, 'Country is required'),
  cardNumber: z.string().min(16, 'Card Number must be 16 digits').max(16, 'Card Number must be 16 digits'),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Invalid expiry date (MM/YY)'),
  cvv: z.string().min(3, 'CVV must be 3 or 4 digits').max(4, 'CVV must be 3 or 4 digits'),
});

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, cartTotal, removeItem } = useCart(); // Assuming removeItem is available to clear cart

  const form = useForm({
    validator: zodValidator,
    defaultValues: {
      fullName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
    onSubmit: async ({ value }) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Order placed:', value);
      alert('Order placed successfully!');
      // Clear cart after successful order (if using a cart clearing mechanism)
      // For now, we'll just navigate. A real implementation would have a clearCart method in CartContext
      items.forEach(item => removeItem(item.id)); // A temporary way to clear the cart
      navigate('/order-confirmation'); // Redirect to a confirmation page
    },
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-8 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="mb-4">Please add items to your cart before proceeding to checkout.</p>
          <Link to="/products">
            <Button>Start Shopping</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Shipping & Payment Information</h2>
            <form.Provider>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
                className="space-y-6"
              >
                {/* Shipping Information */}
                <h3 className="text-xl font-medium border-b pb-2 mb-4">Shipping Address</h3>
                <form.Field
                  name="fullName"
                  validators={{ onChange: checkoutSchema.shape.fullName }}
                  children={(field) => (
                    <div>
                      <Label htmlFor={field.name}>Full Name</Label>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors && (
                        <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
                      )}
                    </div>
                  )}
                />
                <form.Field
                  name="email"
                  validators={{ onChange: checkoutSchema.shape.email }}
                  children={(field) => (
                    <div>
                      <Label htmlFor={field.name}>Email</Label>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="email"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors && (
                        <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
                      )}
                    </div>
                  )}
                />
                <form.Field
                  name="address"
                  validators={{ onChange: checkoutSchema.shape.address }}
                  children={(field) => (
                    <div>
                      <Label htmlFor={field.name}>Address</Label>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors && (
                        <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
                      )}
                    </div>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <form.Field
                    name="city"
                    validators={{ onChange: checkoutSchema.shape.city }}
                    children={(field) => (
                      <div>
                        <Label htmlFor={field.name}>City</Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors && (
                          <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
                        )}
                      </div>
                    )}
                  />
                  <form.Field
                    name="state"
                    validators={{ onChange: checkoutSchema.shape.state }}
                    children={(field) => (
                      <div>
                        <Label htmlFor={field.name}>State</Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors && (
                          <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
                        )}
                      </div>
                    )}
                  />
                  <form.Field
                    name="zipCode"
                    validators={{ onChange: checkoutSchema.shape.zipCode }}
                    children={(field) => (
                      <div>
                        <Label htmlFor={field.name}>Zip Code</Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors && (
                          <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <form.Field
                  name="country"
                  validators={{ onChange: checkoutSchema.shape.country }}
                  children={(field) => (
                    <div>
                      <Label htmlFor={field.name}>Country</Label>
                      <Select
                        name={field.name}
                        value={field.state.value}
                        onValueChange={field.handleChange}
                        onOpenChange={field.handleBlur}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USA">United States</SelectItem>
                          <SelectItem value="CAN">Canada</SelectItem>
                          <SelectItem value="MEX">Mexico</SelectItem>
                          <SelectItem value="GBR">United Kingdom</SelectItem>
                          <SelectItem value="DEU">Germany</SelectItem>
                        </SelectContent>
                      </Select>
                      {field.state.meta.errors && (
                        <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
                      )}
                    </div>
                  )}
                />

                {/* Payment Information */}
                <h3 className="text-xl font-medium border-b pb-2 mb-4 mt-8">Payment Details</h3>
                <form.Field
                  name="cardNumber"
                  validators={{ onChange: checkoutSchema.shape.cardNumber }}
                  children={(field) => (
                    <div>
                      <Label htmlFor={field.name}>Card Number</Label>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="XXXX XXXX XXXX XXXX"
                      />
                      {field.state.meta.errors && (
                        <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
                      )}
                    </div>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <form.Field
                    name="expiryDate"
                    validators={{ onChange: checkoutSchema.shape.expiryDate }}
                    children={(field) => (
                      <div>
                        <Label htmlFor={field.name}>Expiry Date</Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="MM/YY"
                        />
                        {field.state.meta.errors && (
                          <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
                        )}
                      </div>
                    )}
                  />
                  <form.Field
                    name="cvv"
                    validators={{ onChange: checkoutSchema.shape.cvv }}
                    children={(field) => (
                      <div>
                        <Label htmlFor={field.name}>CVV</Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="123"
                        />
                        {field.state.meta.errors && (
                          <p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(', ')}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <Button type="submit" disabled={!canSubmit || isSubmitting} className="w-full">
                      {isSubmitting ? 'Placing Order...' : `Place Order ($${cartTotal.toFixed(2)})`}
                    </Button>
                  )}
                />
              </form>
            </form.Provider>
          </div>

          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <ul className="space-y-4 mb-6">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center text-xl font-bold border-t pt-4">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
