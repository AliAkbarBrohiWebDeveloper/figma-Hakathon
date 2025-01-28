
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Wrapper from '@/components/shareable/Wrapper';
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../Redux/store';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { clearCart } from '@/app/Redux/cartslice';
import { CartItem } from '../types/interface';

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }).max(50),
  lastName: z.string().min(1, { message: "Last Name is required" }).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  Address: z.string().min(12, { message: "Shipping Address is required" }),
  Phone: z.string().min(11, { message: "Phone Number is required" })
});

type FormType = z.infer<typeof formSchema>;

function CheckPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems
    .reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  async function onSubmit(values: FormType) {
    try {
      const orderData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        Address: values.Address,
        Phone: values.Phone,
        cartItems,
        totalPrice,
      };

      const response = await fetch('/api/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Your order has been placed successfully!');
        setIsSuccess(true);
        dispatch(clearCart());
      } else {
        setMessage(data.error || 'Failed to place the order.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage('Failed to place the order due to a network error.');
      setIsSuccess(false);
    }
  }

  return (
    <Wrapper>
      <section className="flex flex-col md:flex-row gap-10 md:gap-14 py-10">
        {/* Order Summary (Left Side) */}
        <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg">
          <h4 className="font-bold text-xl mb-6">Order Summary</h4>
          <div>
            {cartItems.map((item: CartItem) => (
              <div key={item.id} className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>{item.quantity} x {item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex justify-between">
              <span className="font-bold text-xl">Total Price:</span>
              <span className="font-bold">PKR: {totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Customer Details (Right Side) */}
        <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg">
          {message && (
            <div
              className={`p-4 mb-4 rounded-md text-center ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            >
              {message}
            </div>
          )}

          <h3 className="text-center text-3xl font-bold mb-6">Shipping Details</h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-bold">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-bold">Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-bold">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-bold">Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl font-bold">Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="text-white bg-blue-500 rounded-sm w-full h-12 hover:bg-red-500">
                Place Order
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </Wrapper>
  );
}

export default CheckPage;
