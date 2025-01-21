// src/components/Navbar.tsx
"use client";

import React from 'react';
import { useSelector } from 'react-redux';

import Link from 'next/link'; 
import { BiCart } from 'react-icons/bi';
import { CartItem } from '@/app/types/interface';
import { RootState } from '@/app/Redux/store';

const Navbar = () => {
  const cartItems = useSelector((state:RootState) => state.cart.items); // Get cart items from Redux store
  const totalItems = cartItems.reduce((total: number, item:CartItem) => total + item.quantity, 0); // Get total number of items in the cart

  return (
    <header>
      
          <Link href="/Cart" className="relative text-lg hover:text-gray-400">
            <BiCart className="text-5xl" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        
    
    </header>
  );
};

export default Navbar;
