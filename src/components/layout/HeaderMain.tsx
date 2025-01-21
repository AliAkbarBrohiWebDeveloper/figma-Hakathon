// import React from 'react'

// import Link from 'next/link'
// import { BiHeart, BiSearch,  } from 'react-icons/bi'

// import Wrapper from '../shareable/Wrapper'
// import Image from 'next/image'
// import Navbar from './Navbar'
  

// const Headermain = () => {
  
//   return(
//     <Wrapper>

//       <header className="flex justify-between gap-x-9 items-center p-4">


//         <div className='hidden md:flex'>
// <Image src={'/vector1.png'} alt='' height={50} width={100}/>


//         </div>
    

//         <div>
//           <ul className=" space-x-4 hidden md:flex font-semibold">
//             <li>
//               <Link href={'/'}>New & Featured</Link>
//             </li>
//             <li>
//               <Link href={''}>Men</Link>
//             </li>
//             <li>
//               <Link href={''}>Women</Link>
//             </li>
//             <li>
//               <Link href={''}>Kids</Link>
//             </li>
//             <li>
//               <Link href={''}>Sales</Link>
//             </li>
//             <li>
//               <Link href={''}>SNKRS</Link>
//             </li>
            
            
            
          
//           </ul>
//         </div>

//         <div className="relative w-64 hidden md:block"> 
//           <input 
//             type="text" 
             
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
//           />
//           <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl " />
//         </div>
// <div className='hidden md:flex'>
//   <Link href={''}><BiHeart className='text-4xl font-bold'/></Link>

// </div>
// {/* <div className='hidden md:flex'>
//   <Link href={'/Cart'}><BiCart className='text-3xl font-bold'/></Link>


// </div> */}

// <div className='hidden md:flex'>
// <Navbar/>
// </div>


//  <div className="relative   w-full  md:hidden sm:block mt-6">
//         <input
//           type="text"

//           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-3xl" />
//         <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl " />
//       </div>
// <div>

// </div>




//       </header>
//       </Wrapper>
    
//   )
// }

// export default Headermain



























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
//           image{
//             asset->{url}
//           },
//           description
//         }`;

       
//         const fetchedProducts: IProduct[] = await client.fetch(query); // Fetch and type the result
//         setProducts(fetchedProducts); // Setting fetched products into state
//       } catch (error) {
//         console.error("Error fetching products: ", error);
//       }
//     };

//     fetchProducts();
//   }, []); // Empty dependency array means this runs only once when the component mounts

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchTerm) {
//         // Filtering logic based on search term only for productName
//         const filtered = products.filter(product =>
//           product.productName.toLowerCase().includes(searchTerm.toLowerCase())
          
//         );
//         setFilteredProducts(filtered);
//       } else {
//         setFilteredProducts([]); 
//       }
//     }, 300);

//     return () => clearTimeout(timer); // Cleanup on term change
//   }, [searchTerm, products]); // This runs when searchTerm or products changes

//   return (
//     <Wrapper>
//       <header className="flex justify-between gap-x-9 items-center p-4">
//         <div className='hidden md:flex'>
//           <Image src={'/vector1.png'} alt='' height={50} width={100} />
//         </div>

//         <div>
//           <ul className="space-x-4 hidden md:flex font-semibold">
//             <li><Link href={'/'}>New & Featured</Link></li>
//             <li><Link href={''}>Men</Link></li>
//             <li><Link href={''}>Women</Link></li>
//             <li><Link href={''}>Kids</Link></li>
//             <li><Link href={''}>Sales</Link></li>
//             <li><Link href={''}>SNKRS</Link></li>
//           </ul>
//         </div>

//         {/* Search bar */}
//         <div className="relative w-64 hidden md:block">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full pl-10 pr-4 py-2  border-2 border-gray-300 rounded-lg"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)} 
//           />
//           <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
//         </div>

//         <div className='hidden md:flex'>
//           <Link href={''}><BiHeart className='text-4xl font-bold' /></Link>
//         </div>

//         <div className='hidden md:flex'>
//           <Navbar />
//         </div>

//         {/* Mobile search */}
//         <div className="relative w-full md:hidden sm:block mt-6">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full pl-10 border-2 pr-4 py-2 rounded-3xl"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)} 
//           />
//           <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
//         </div>
//       </header>

     
//       {searchTerm && filteredProducts.length > 0 && (
//         <div className="mt-4">
         
//           <ul className="space-y-2 mt-2">
//             {filteredProducts.map((product) => (
//               <li key={product._id} className="p-2  rounded-md flex gap-4">
              
//                 <div>
//                   {/* Product Name as a Link */}
//                   <Link href={`/products/${product._id}`}>
//                     <p className="text-sm">{product.productName}</p>
//                   </Link>
//                   {/* <div className="text-sm text-gray-500">Category: {product.category}</div> */}
//                   {/* <div className="text-sm text-gray-500">Price: ${product.price}</div> */}
//                   {/* <div className="text-sm text-gray-500">Inventory: {product.inventory}</div> */}
//                   {/* <div className="text-sm text-gray-500">Colors: {product.colors.join(', ')}</div> */}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </Wrapper>
//   );
// };

// export default Headermain;



















"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiHeart, BiSearch } from 'react-icons/bi';
import Wrapper from '../shareable/Wrapper';
import Image from 'next/image';
import Navbar from './Navbar';
import { client } from '@/sanity/lib/client';
import { IProduct } from '@/app/types/interface';

const Headermain = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  // Fetch the products from Sanity
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
        setProducts(fetchedProducts); // Setting fetched products into state
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs only once when the component mounts

  // Filter products based on searchTerm for both productName and category
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        const filtered = products.filter(product =>
          product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) // Check category as well
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts([]);
      }
    }, 300);

    return () => clearTimeout(timer); // Cleanup on term change
  }, [searchTerm, products]);

 
  const handleProductClick = () => {
    setSearchTerm('');
    setFilteredProducts([]);
  };

  return (
    <Wrapper>
      <header className="flex justify-between gap-x-9 items-center p-4">
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

        {/* Search bar */}
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
      </header>

      {searchTerm && filteredProducts.length > 0 && (
        <div className="mt-4">
          <ul className="space-y-2 mt-2">
            {filteredProducts.map((product) => (
              <li key={product._id} className="p-2 rounded-md flex gap-4">
                <div>
                  {/* Product Name as a Link */}
                  <Link href={`/products/${product._id}`} onClick={handleProductClick}>
                    {/* <p className="text-sm">{product.productName}</p> */}
                 
                  <p className="text-xs text-gray-500">{product.category}</p>
                  </Link>
                   {/* Display category as well */}
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      )}
    </Wrapper>
  );
};

export default Headermain;
