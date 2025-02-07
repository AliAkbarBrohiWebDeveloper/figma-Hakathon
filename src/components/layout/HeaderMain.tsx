
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiHeart, BiSearch } from 'react-icons/bi';
import Wrapper from '../shareable/Wrapper';
import Image from 'next/image';
import Navbar from './Navbar';
import { client } from '@/sanity/lib/client';
import { IProduct } from '@/app/types/interface';

// import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


const Headermain = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          productName,
          category,
          price,
          inventory,
          colors,
          status,
          description
        }`;

        const fetchedProducts: IProduct[] = await client.fetch(query);
        setProducts(fetchedProducts); 
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []); 


  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        const filtered = products.filter(product =>
          product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) 
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts([]);
      }
    }, 300);

    return () => clearTimeout(timer); 
  }, [searchTerm, products]);

 
  const handleProductClick = () => {
    setSearchTerm('');
    setFilteredProducts([]);
  };

  return (
    // <header className="fixed z-10 top-14 w-full ">
    <Wrapper>

      {/* <header className="sticky top-0 -z-10"> */}
      <div className="flex justify-between gap-x-9 items-center p-4">

        <div className='hidden md:flex'>
          <Image src={'/vector1.png'} alt='' height={50} width={100} />
        </div>

        <div>
          <ul className="space-x-4 hidden md:flex font-semibold">
            <li><Link href={'/'}>New & Featured</Link></li>
            <li><Link href={''}>Men</Link></li>
            <li><Link href={''}>Women</Link></li>
            <li><Link href={''}>Kids</Link></li>
            <li><Link href={''}>Sales</Link></li>
            <li><Link href={''}>SNKRS</Link></li>
           
          </ul>
        </div>

      
        <div className="relative w-64 hidden md:block">
          <input
            type="text"
            placeholder="Search products"
            className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        </div>

        <div className='hidden md:flex'>
          <Link href={''}><BiHeart className='text-4xl font-bold' /></Link>
        </div>

        <div className='hidden md:flex'>
          <Navbar />
        </div>

        {/* <ClerkProvider>
           <SignedOut>
            <SignInButton mode="modal">
              <h1 className="text-red-500 cursor-pointer">Login/Register</h1>
            </SignInButton >
          </SignedOut >
          <SignedIn >
            <UserButton />
          </SignedIn> 
           </ClerkProvider>
         */}

        {/* Mobile search */}
        <div className="relative w-full md:hidden sm:block mt-6">
          <input
            type="text"
            placeholder="Search products"
            className="w-full pl-10 border-2 pr-4 py-2 rounded-3xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        </div>
        </div>
      {/* </header> */}

      {searchTerm && filteredProducts.length > 0 && (
        <div className="mt-4">
          <ul className="space-y-2 mt-2">
            {filteredProducts.map((product) => (
              <li key={product._id} className="p-2 rounded-md flex gap-4">
                <div>
                
                  <Link href={`/products/${product._id}`} onClick={handleProductClick}>
                  
                 
                  <p className="text-sm ">{product.category}</p>
                  </Link>
               
                </div>
                
              </li>
            ))}
          </ul>
          </div>
        
      )}
    </Wrapper>
    // </header>
  );
};

export default Headermain;

















































// "use client";
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { BiHeart, BiSearch } from 'react-icons/bi';
// import Wrapper from '../shareable/Wrapper';
// import Image from 'next/image';
// import Navbar from './Navbar';
// import { client } from '@/sanity/lib/client';
// import { IProduct } from '@/app/types/interface';

// const Headermain = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
//   const [products, setProducts] = useState<IProduct[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const query = `*[_type == "product"]{
//           _id,
//           productName,
//           category,
//           price,
//           inventory,
//           colors,
//           status,
//           description
//         }`;

//         const fetchedProducts: IProduct[] = await client.fetch(query);
//         setProducts(fetchedProducts); 
//       } catch (error) {
//         console.error("Error fetching products: ", error);
//       }
//     };

//     fetchProducts();
//   }, []); 

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchTerm) {
//         const filtered = products.filter(product =>
//           product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           product.category.toLowerCase().includes(searchTerm.toLowerCase()) 
//         );
//         setFilteredProducts(filtered);
//       } else {
//         setFilteredProducts([]);
//       }
//     }, 300);

//     return () => clearTimeout(timer); 
//   }, [searchTerm, products]);

//   const handleProductClick = () => {
//     setSearchTerm('');
//     setFilteredProducts([]);
//   };

//   return (
//     <header className="fixed z-10 top-0 w-full bg-indigo-500 text-white">
//       <Wrapper>
//         <div className="flex justify-between items-center p-4">
//           {/* Logo section */}
//           <div className='hidden md:flex'>
//             <Image src={'/vector1.png'} alt='' height={50} width={100} />
//           </div>

//           {/* Navigation menu */}
//           <div className="flex items-center gap-x-6">
//             <ul className="hidden md:flex space-x-6 font-semibold">
//               <li><Link href={'/'}>New & Featured</Link></li>
//               <li><Link href={''}>Men</Link></li>
//               <li><Link href={''}>Women</Link></li>
//               <li><Link href={''}>Kids</Link></li>
//               <li><Link href={''}>Sales</Link></li>
//               <li><Link href={''}>SNKRS</Link></li>
//             </ul>

//             {/* Heart Icon (Wishlist) */}
//             <div className='hidden md:flex'>
//               <Link href={''}><BiHeart className='text-4xl font-bold' /></Link>
//             </div>

//             {/* Navbar */}
//             <div className='hidden md:flex'>
//               <Navbar />
//             </div>
//           </div>

//           {/* Desktop Search */}
//           <div className="relative w-64 hidden md:block">
//             <input
//               type="text"
//               placeholder="Search products"
//               className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)} 
//             />
//             <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
//           </div>
//         </div>

//         {/* Mobile Search */}
//         <div className="relative w-full md:hidden sm:block mt-4">
//           <input
//             type="text"
//             placeholder="Search products"
//             className="w-full pl-10 pr-4 py-2 rounded-3xl"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)} 
//           />
//           <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
//         </div>

//         {/* Search Suggestions (Mobile & Desktop) */}
//         {searchTerm && filteredProducts.length > 0 && (
//           <div className="mt-4">
//             <ul className="space-y-2">
//               {filteredProducts.map((product) => (
//                 <li key={product._id} className="p-2 rounded-md flex gap-4">
//                   <div>
//                     <Link href={`/products/${product._id}`} onClick={handleProductClick}>
//                       <p className="text-sm">{product.category}</p>
//                     </Link>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </Wrapper>
//     </header>
//   );
// };

// export default Headermain;
