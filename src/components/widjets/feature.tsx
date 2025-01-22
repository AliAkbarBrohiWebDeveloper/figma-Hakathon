// import Image from 'next/image'
// import React from 'react'
// import Wrapper from '../shareable/Wrapper';
// import Button from '../shareable/Button';



// const GearUpImages = [
//   {
//     id: 1,
//     src: "/g1.png",
//     header: "Nike Dri-FIT ADV TechKnit Ultra",
//     para: "Men's Short-Sleeve Running Top"
//   },
//   {
//     id: 2,
//     src: "/g2.png",
//     header: "Nike Dri-FIT Challenger",
//     para: "Men's 18cm (approx.) 2-in-1 Versatile Shorts"
//   },
//   {
//     id: 3,
//     src: "/g3.png",
//     header: "Nike Dri-FIT ADV Run Division",
//     para: "Women's Long-Sleeve Running Top"
//   },
//   {
//     id: 4,
//     src: "/g4.png",
//     header: "Nike Fast",
//     para: "Women's Mid-Rise 7/8 Running Leggings with Pockets"
//   }
// ]

// const Feature = () => {
//   return (
//     <Wrapper>
//     <section className='mt-5'>
//       <div className='font-bold'>
//         Featured
//       </div>

//       <main
//         className='mt-16'
//         style={{
//           backgroundImage: 'url(/bg1.png)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '700px',
//           width: '100%',
//         }}
//       >
    
//       </main>

//       <div className='text-center md:mt-3'>
//         <h3 className='text-2xl font-bold'>STEP INTO WHAT FEELS GOOD</h3>
//         <p>Cause everyone should know the feeling of running in that perfect pair.</p>
//         <Button text='Find Your Shoe'/>
//       </div>

//       <div className=' mt-6'>
//         <h3 className='text-xl font-bold'>Gear Up</h3>
//       </div>

    
//       <div className='flex  flex-col md:flex-row justify-center gap-6 mt-8'>
//         {GearUpImages.map((product) => (
//           <div key={product.id} className='flex flex-col items-center text-center mt-6'>
        
//             <Image
//               src={product.src}
//               alt={product.header}
//               height={300}
//               width={300}
//               className='rounded-lg'
//             />
           
//             <h3 className='mt-4 text-lg font-semibold'>{product.header}</h3>
//             <p>{product.para}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//     </Wrapper>
//   );
// }

// export default Feature;








// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { Iproduct } from "@/app/types/interface";
// import Link from "next/link";
// import { urlFor } from "@/sanity/lib/image";
// import Wrapper from "../shareable/Wrapper";

// async function Feature() {
//   const result = await client.fetch(`
//     *[_type == "product"][0...3]{
//       _id,
//       productName,
//       category,
//       price,
//       inventory,
//       colors,
//       status,
//       image,
//       description
//     }
//   `);

//   console.log(result);

//   if (!result || result.length === 0) {
//     return <div>No products found.</div>; 
//   }

//   return (
//     <Wrapper>
//      <section className='mt-5'>
//      <div className='font-bold text-xl'>
//           Featured      </div>

//       <main
//         className='mt-16'
//         style={{
//           backgroundImage: 'url(/bg1.png)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '700px',
//           width: '100%',
//         }}
//       >
    
//       </main>

//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-6 mt-9">
//         {result.map((product: Iproduct) => (
//           <div
//             key={product._id}
//             className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//           >
//             <Link href={`/products/${product._id}`}>
              
//                 <div className="relative w-full h-60 mb-4">
//                   <Image
//                     src={urlFor(product.image).url()}
//                     alt={product.productName}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-md"
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800">{product.productName}</h3>
//                 <p className="text-gray-500 text-sm mb-2">{product.category}</p>
//                 <p className="text-green-500 text-sm mb-3">{product.colors}</p>
//                 <p className="text-gray-900 font-semibold text-lg mb-2">PKR: {product.price}</p>
//                 {/* <p className="text-gray-600 text-sm mb-4">{product.description}</p> */}
//                 <div className="flex justify-between items-center">
//                   <span
//                     className={`text-sm font-medium ${
//                       product.status === "In Stock" ? "text-green-500" : "text-red-500"
//                     }`}
//                   >
//                     {product.status}
//                   </span>
//                   <span className="text-sm text-gray-600">Inventory: {product.inventory}</span>
//                 </div>
              
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//     </Wrapper>
//   );
// }

// export default Feature;


























"use client"

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Iproduct } from "@/app/types/interface";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Wrapper from "../shareable/Wrapper";
import React, { useState, useEffect } from "react";

const Feature = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data inside useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.fetch(`
          *[_type == "product"][0...3]{
            _id,
            productName,
            category,
            price,
            inventory,
            colors,
            status,
            image,
            description
          }
        `);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means it runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show a loading state while the data is being fetched
  }

  if (products.length === 0) {
    return <div>No products found.</div>;  // If no products found, display this message
  }

  return (
    <Wrapper>
      <section className="mt-5">
        <div className="font-bold text-xl">Featured</div>

        <main
          className="mt-16"
          style={{
            backgroundImage: 'url(/bg1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '700px',
            width: '100%',
          }}
        >
          {/* You can add more content here */}
        </main>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-6 mt-9">
          {products.map((product: Iproduct) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/products/${product._id}`}>
                <div className="relative w-full h-60 mb-4">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{product.productName}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <p className="text-green-500 text-sm mb-3">{product.colors}</p>
                <p className="text-gray-900 font-semibold text-lg mb-2">PKR: {product.price}</p>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm font-medium ${
                      product.status === "In Stock" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {product.status}
                  </span>
                  <span className="text-sm text-gray-600">Inventory: {product.inventory}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Feature;
