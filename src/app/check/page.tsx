
"use client";

import Wrapper from '@/components/shareable/Wrapper';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from "react-icons/fa"; 
import { removeFromCart } from '@/app/Redux/cartslice';  
import { client } from '@/sanity/lib/client';
import { CartItem } from '../types/interface';
import { RootState } from '../Redux/store';

const Checkpage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    postalCode: '',
    locality: '',
    state: '',
    country: 'Pakistan', // Default to 'pakistan'
    email: '',
    phoneNumber: '',
    pan: '',
  });

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const order = await client.create({
        _type: 'order',
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          addressLine1: formData.addressLine1,
          addressLine2: formData.addressLine2,
          addressLine3: formData.addressLine3,
          postalCode: formData.postalCode,
          locality: formData.locality,
          state: formData.state,
          country: formData.country,
          pan: formData.pan,
        },
        orderItems: cartItems.map((item: CartItem) => ({
          _type: 'reference',
          _ref: item.id,
        })),
        totalPrice: cartItems.reduce(
          (total: number, item: CartItem) => total + item.price * item.quantity,
          0
        ),
        orderStatus: 'pending',
      });

      console.log('Order saved:', order);

    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  const totalPrice = cartItems
    .reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <Wrapper>
      <section className="mt-16">
        <main>
          <div className="flex flex-col md:flex-row gap-10 md:gap-14">
            {/* Address Form */}
            <div className="flex-1">
              <h2 className="font-bold text-xl">How would you like to get your order?</h2>
              <p className="mt-3 text-sm">
                Customs regulation for India require a copy of the recipients KYC. The address on the KYC needs to match the shipping address...
              </p>

              <div className="flex gap-x-6 border-4 mt-6 p-2">
                <Image src={'/d1.png'} alt="image" height={19} width={21} />
                <span>Deliver It</span>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit}>
                <div className="mt-6">
                  <h4>Enter your name and address:</h4>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
                  />
                  <br />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
                  />
                  <br />
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    placeholder="Address Line 1"
                    required
                    className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
                  />
                  <br />
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    placeholder="Address Line 2"
                    required
                    className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
                  />
                  <br />
                  <input
                    type="text"
                    name="addressLine3"
                    value={formData.addressLine3}
                    onChange={handleInputChange}
                    placeholder="Address Line 3"
                    required
                    className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
                  />
                  <br />
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="Postal Code"
                    required
                    className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
                  />
                  <br />
                  <input
                    type="text"
                    name="locality"
                    value={formData.locality}
                    onChange={handleInputChange}
                    placeholder="Locality"
                    required
                    className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
                  />
                  <br />
                  <div className="flex gap-x-6 mt-6">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleSelectChange}
                      className="w-full md:w-auto"
                    >
                      <option value="">State/Territory</option>
                      <option value="California">California</option>
                      <option value="New York">New York</option>
                    </select>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleSelectChange}
                      className="w-full md:w-auto"
                    >
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                    </select>
                  </div>

                  <h4 className="mt-6 font-bold text-xl">What is your contact information?</h4>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
                  />
                  <br />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
                  />
                  <br />
                  <span>A carrier might contact you to confirm delivery.</span>

                  <h4 className="text-xl font-bold mt-6">What is your PAN?</h4>
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleInputChange}
                    placeholder="PAN"
                    className="mt-9 w-full md:w-96 h-12 rounded-sm"
                  />
                  <br />
                  <p className="mt-6 text-sm">
                    Enter your PAN to enable payment with UPI, Net Banking or local card methods
                  </p>

                  <input type="checkbox" className="mt-3" />
                  <span className="text-sm">Save PAN details to Profile</span>
                  <br />

                  <input type="checkbox" className="mt-6" />
                  <span className="text-sm">
                    I consent to processing my information in accordance with Privacy Policy.
                  </span>

                  <div className="text-center mt-9">
                    <button type="submit" className="px-16 py-2 rounded-sm border-2">
                      Continue
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="flex-1">
              <h4 className="font-bold text-xl">Order Summary</h4>
              <div className="mt-10">
                {cartItems.map((item: CartItem) => (
                  <div key={item.id} className="flex items-center justify-between mt-6">
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
                    <div>
                      <button onClick={() => handleRemoveItem(item.id)}>
                        <FaTrashAlt className="text-red-500" />
                      </button>
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
          </div>
        </main>
      </section>
    </Wrapper>
  );
};

export default Checkpage;





















