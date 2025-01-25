
// "use client";

// import Wrapper from '@/components/shareable/Wrapper';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaTrashAlt } from "react-icons/fa"; 
// import { removeFromCart } from '@/app/Redux/cartslice';  
// import { client } from '@/sanity/lib/client';
// import { CartItem } from '../types/interface';
// import { RootState } from '../Redux/store';

// const Checkpage = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     addressLine1: '',
//     addressLine2: '',
//     addressLine3: '',
//     postalCode: '',
//     locality: '',
//     state: '',
//     country: 'Pakistan',
//     email: '',
//     phoneNumber: '',
//     pan: '',
//   });

//   const handleRemoveItem = (id: string) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const order = await client.create({
//         _type: 'order',
//         customer: {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           phoneNumber: formData.phoneNumber,
//           addressLine1: formData.addressLine1,
//           addressLine2: formData.addressLine2,
//           addressLine3: formData.addressLine3,
//           postalCode: formData.postalCode,
//           locality: formData.locality,
//           state: formData.state,
//           country: formData.country,
//           pan: formData.pan,
//         },
//         orderItems: cartItems.map((item: CartItem) => ({
//           _type: 'reference',
//           _ref: item.id,
//         })),
//         totalPrice: cartItems.reduce(
//           (total: number, item: CartItem) => total + item.price * item.quantity,
//           0
//         ),
//         orderStatus: 'pending',
//       });

//       console.log('Order saved:', order);

//     } catch (error) {
//       console.error('Error saving order:', error);
//     }
//   };

//   const totalPrice = cartItems
//     .reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)
//     .toFixed(2);

//   return (
//     <Wrapper>
//       <section className="mt-16">
//         <main>
//           <div className="flex flex-col md:flex-row gap-10 md:gap-14">
         
//             <div className="flex-1">
//               <h2 className="font-bold text-xl">How would you like to get your order?</h2>
//               <p className="mt-3 text-sm">
//                 Customs regulation for India require a copy of the recipients KYC. The address on the KYC needs to match the shipping address...
//               </p>

//               <div className="flex gap-x-6 border-4 mt-6 p-2">
//                 <Image src={'/d1.png'} alt="image" height={19} width={21} />
//                 <span>Deliver It</span>
//               </div>

          
//               <form onSubmit={handleFormSubmit}>
//                 <div className="mt-6">
//                   <h4>Enter your name and address:</h4>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     placeholder="First Name"
//                     required
//                     className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
//                   />
//                   <br />
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     placeholder="Last Name"
//                     required
//                     className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
//                   />
//                   <br />
//                   <input
//                     type="text"
//                     name="addressLine1"
//                     value={formData.addressLine1}
//                     onChange={handleInputChange}
//                     placeholder="Address Line 1"
//                     required
//                     className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
//                   />
//                   <br />
//                   <input
//                     type="text"
//                     name="addressLine2"
//                     value={formData.addressLine2}
//                     onChange={handleInputChange}
//                     placeholder="Address Line 2"
//                     required
//                     className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
//                   />
//                   <br />
//                   <input
//                     type="text"
//                     name="addressLine3"
//                     value={formData.addressLine3}
//                     onChange={handleInputChange}
//                     placeholder="Address Line 3"
//                     required
//                     className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
//                   />
//                   <br />
//                   <input
//                     type="text"
//                     name="postalCode"
//                     value={formData.postalCode}
//                     onChange={handleInputChange}
//                     placeholder="Postal Code"
//                     required
//                     className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
//                   />
//                   <br />
//                   <input
//                     type="text"
//                     name="locality"
//                     value={formData.locality}
//                     onChange={handleInputChange}
//                     placeholder="Locality"
//                     required
//                     className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
//                   />
//                   <br />
//                   <div className="flex gap-x-6 mt-6">
//                     <select
//                       name="state"
//                       value={formData.state}
//                       onChange={handleSelectChange}
//                       className="w-full md:w-auto"
//                     >
//                       <option value="">State/Territory</option>
//                       <option value="California">California</option>
//                       <option value="New York">New York</option>
//                     </select>
//                     <select
//                       name="country"
//                       value={formData.country}
//                       onChange={handleSelectChange}
//                       className="w-full md:w-auto"
//                     >
//                       <option value="India">India</option>
//                       <option value="Pakistan">Pakistan</option>
//                     </select>
//                   </div>

//                   <h4 className="mt-6 font-bold text-xl">What is your contact information?</h4>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Email"
//                     required
//                     className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
//                   />
//                   <br />
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleInputChange}
//                     placeholder="Phone Number"
//                     required
//                     className="border-2 w-full md:w-96 mt-6 h-12 rounded-sm"
//                   />
//                   <br />
//                   <span>A carrier might contact you to confirm delivery.</span>

//                   <h4 className="text-xl font-bold mt-6">What is your PAN?</h4>
//                   <input
//                     type="text"
//                     name="pan"
//                     value={formData.pan}
//                     onChange={handleInputChange}
//                     placeholder="PAN"
//                     className="mt-9 w-full md:w-96 h-12 rounded-sm"
//                   />
//                   <br />
//                   <p className="mt-6 text-sm">
//                     Enter your PAN to enable payment with UPI, Net Banking or local card methods
//                   </p>

//                   <input type="checkbox" className="mt-3" />
//                   <span className="text-sm">Save PAN details to Profile</span>
//                   <br />

//                   <input type="checkbox" className="mt-6" />
//                   <span className="text-sm">
//                     I consent to processing my information in accordance with Privacy Policy.
//                   </span>

//                   <div className="text-center mt-9">
//                     <button type="submit" className="px-16 py-2 rounded-sm border-2">
//                       Continue
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>

//             {/* Order Summary */}
//             <div className="flex-1">
//               <h4 className="font-bold text-xl">Order Summary</h4>
//               <div className="mt-10">
//                 {cartItems.map((item: CartItem) => (
//                   <div key={item.id} className="flex items-center justify-between mt-6">
//                     <div className="flex items-center gap-x-4">
//                       <Image
//                         src={item.image}
//                         alt={item.name}
//                         height={100}
//                         width={100}
//                         className="object-cover rounded-md"
//                       />
//                       <div>
//                         <h3 className="font-semibold">{item.name}</h3>
//                         <p>{item.quantity} x {item.price}</p>
//                       </div>
//                     </div>
//                     {/* <div>
//                       <button onClick={() => handleRemoveItem(item.id)}>
//                         <FaTrashAlt className="text-red-500" />
//                       </button>
//                     </div> */}
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-6">
//                 <div className="flex justify-between">
//                   <span className="font-bold text-xl">Total Price:</span>
//                   <span className="font-bold">PKR: {totalPrice}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </Wrapper>
//   );
// };

// export default Checkpage;
































// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import Wrapper from '@/components/shareable/Wrapper';
// import Image from 'next/image';

// import { useDispatch, useSelector } from 'react-redux';
// import { CartItem } from '../types/interface';
// import { RootState } from '../Redux/store';


// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { client } from "@/sanity/lib/client";


// const formSchema = z.object({
//   firstName: z.string().min(1, { message: " Last Name is required" }).max(50),
//   LastName: z.string().min(1, { message: "Last Name is required" }).max(50),
//   email: z.string().email({ message: "Invalid email address" }),
//   message:z.string().min(50).max(1000)


// })

// type FormTye = z.infer<typeof formSchema>;

// function CheckPage() {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: RootState) => state.cart.items);


//   const totalPrice = cartItems
//     .reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)
//     .toFixed(2);




//   const form = useForm<FormTye>({
//     resolver: zodResolver(formSchema),
//   });

//   async function onSubmit(values: FormTye) {
//     try {
     
//       await client.create({
//         _type: "contactForm", 
//         name: values.firstName,
//         email: values.email,
//         message:values.message
//       });

     
//       console.log("Form submitted successfully");
//     } catch (error) {
      
//       console.error("Error submitting form:", error);
//     }
//   }

//   return (
//     <Wrapper>
//     <div>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           <FormField
//             control={form.control}
//             name="firstName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>First Name</FormLabel>
//                 <FormControl>
//                   <Input placeholder="First Name" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />


// <FormField    
//             control={form.control}
//             name="firstName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Last Name</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Last Name" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />


//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Email" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />


//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>

//       <div className="flex-1 mt-12">
//               <h4 className="font-bold text-xl">Order Summary</h4>
//              <div className="mt-10">
//                {cartItems.map((item: CartItem) => (
//                   <div key={item.id} className="flex items-center justify-between mt-6">
//                     <div className="flex items-center gap-x-4">
//                       <Image
//                         src={item.image}
//                         alt={item.name}
//                         height={100}
//                         width={100}
//                         className="object-cover rounded-md"
//                       />
//                       <div>
//                         <h3 className="font-semibold">{item.name}</h3>
//                         <p>{item.quantity} x {item.price}</p>
//                       </div>
//                     </div>
                  
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-6">
//                 <div className="flex justify-between">
//                   <span className="font-bold text-xl">Total Price:</span>
//                   <span className="font-bold">PKR: {totalPrice}</span>
//                 </div>
//               </div>
//             </div>
//           </div>



    
//     </Wrapper>
//   );
// }

// export default CheckPage




































// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import Wrapper from '@/components/shareable/Wrapper';
// import Image from 'next/image';
// import { useSelector } from "react-redux";

// import { CartItem } from '../types/interface';
// import { RootState } from '../Redux/store';
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { client } from "@/sanity/lib/client";
// import { useState } from 'react';


// const formSchema = z.object({
//   firstName: z.string().min(1, { message: "First Name is required" }).max(50),
//   lastName: z.string().min(1, { message: "Last Name is required" }).max(50),
//   email: z.string().email({ message: "Invalid email address" }),
// });

// type FormType = z.infer<typeof formSchema>;

// function CheckPage() {
 
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   const totalPrice = cartItems
//     .reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)
//     .toFixed(2);

//   const form = useForm<FormType>({
//     resolver: zodResolver(formSchema),
//   });

//   const [message, setMessage] = useState<string | null>(null);
//   const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

//   async function onSubmit(values: FormType) {
//     try {
    
//       const customerDoc = await client.create({
//         _type: "customer",
//         firstName: values.firstName,
//         lastName: values.lastName,
//         email: values.email,
//       });

//       console.log('Customer Document Created:', customerDoc);

  
//       setMessage("Your customer details have been saved successfully!");
//       setIsSuccess(true);
//     } catch (error) {
//       console.error("Error submitting form:", error);

     
//       setMessage("Failed to save customer details in Sanity.");
//       setIsSuccess(false);

     
//       if (error instanceof Error) {
//         console.error('Sanity Error:', error.message);
//       }
//     }
//   }

//   return (
//     <Wrapper>
//       <div>
    
//         {message && (
//           <div
//             className={`p-4 mb-4 rounded-md text-center ${
//               isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
//             }`}
//           >
//             {message}
//           </div>
//         )}

      
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <FormField
//               control={form.control}
//               name="firstName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>First Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="First Name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="lastName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Last Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Last Name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button type="submit">Save Customer Details</Button>
//           </form>
//         </Form>

//         {/* Order summary */}
//         <div className="flex-1 mt-12">
//           <h4 className="font-bold text-xl">Order Summary</h4>
//           <div className="mt-10">
//             {cartItems.map((item: CartItem) => (
//               <div key={item.id} className="flex items-center justify-between mt-6">
//                 <div className="flex items-center gap-x-4">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     height={100}
//                     width={100}
//                     className="object-cover rounded-md"
//                   />
//                   <div>
//                     <h3 className="font-semibold">{item.name}</h3>
//                     <p>{item.quantity} x {item.price}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6">
//             <div className="flex justify-between">
//               <span className="font-bold text-xl">Total Price:</span>
//               <span className="font-bold">PKR: {totalPrice}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// export default CheckPage;























"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Wrapper from '@/components/shareable/Wrapper';
import Image from 'next/image';
import { useSelector } from "react-redux";

import { CartItem } from '../types/interface';
import { RootState } from '../Redux/store';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";
import { useState } from 'react';

// Validation schema using Zod
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }).max(50),
  lastName: z.string().min(1, { message: "Last Name is required" }).max(50),
  email: z.string().email({ message: "Invalid email address" }),
});

type FormType = z.infer<typeof formSchema>;

function CheckPage() {
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
     
      const customerDoc = await client.create({
        _type: 'customer',
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      });

      console.log('Customer Document Created:', customerDoc);

     
      const orderDoc = await client.create({
        _type: 'order',
        orderNumber: `ORD-${Date.now()}`, 
        customer: {
          _type: 'reference',
          _ref: customerDoc._id, 
        },
        orderItems: cartItems.map((item) => ({
          _type: 'reference',
          _ref: item.id,
        })),
        totalPrice: parseFloat(totalPrice), 
        orderStatus: 'Pending', 
      });

      console.log('Order Document Created:', orderDoc);

     
      setMessage("Your order has been placed successfully!");
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);

      setMessage("Failed to save customer and order details in Sanity.");
      setIsSuccess(false);

      if (error instanceof Error) {
        console.error("Sanity Error:", error.message);
      }
    }
  }

  return (
    <Wrapper>
      <div>
        {message && (
          <div
            className={`p-4 mb-4 rounded-md text-center ${
              isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
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
                  <FormLabel>Last Name</FormLabel>
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Save Customer Details</Button>
          </form>
        </Form>

        {/* Order summary */}
        <div className="flex-1 mt-12">
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
    </Wrapper>
  );
}

export default CheckPage;



















































