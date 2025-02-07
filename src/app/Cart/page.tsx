
"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { removeFromCart, updateQuantity, clearCart } from "@/app/Redux/cartslice";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; 
import { CartItem } from "../types/interface";  
import { RootState } from "@/app/Redux/store";  
import Link from "next/link";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncreaseQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleDecreaseQuantity = (id: string, quantity: number) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  const handleRemoveItem = (_id: string) => {
    dispatch(removeFromCart(_id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce(
    (total: number, item: CartItem) => total + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">Your Cart</h1>
      

        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center">
          
            <Image
              src={"/shoping.avif"} 
              alt="cart Shopping image"
              height={500}
              width={500}
              className="max-w-full"
            />
           
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item: CartItem) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center gap-x-4 mb-4 md:mb-0">
                  <Image
                    src={urlFor(item.image).url()}  
                    alt={item.name}
                    height={60}
                    width={60}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
                    <p className="text-sm text-gray-600">Price: PKR {item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-x-6">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border bg-gray-100 hover:bg-gray-200 transition-all"
                  >
                    <FaMinus className="text-gray-600" />
                  </button>

                  <span className="text-lg font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border bg-gray-100 hover:bg-gray-200 transition-all"
                  >
                    <FaPlus className="text-gray-600" />
                  </button>

                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-8 p-6 border rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between">
                  <span className="text-sm text-gray-700">{item.name}</span>
                  <span className="text-lg font-semibold text-gray-900">
                    PKR {item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center text-xl font-semibold">
              <span>Total Price: </span>
              <span className="text-green-600">PKR {totalPrice}</span>
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <button
                onClick={handleClearCart}
                className="w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
              >
                Clear Cart
              </button>

              <Link href={`/check`}>
                <button className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;



































