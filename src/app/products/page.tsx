
import Button2 from '@/components/shareable/Button';
import Wrapper from '@/components/shareable/Wrapper';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Iproduct } from '../types/interface';


async function Products() {

  const proresult = await client.fetch(`
    *[_type == "product"] {
      _id,
      productName,
      category,
      price,
      inventory,
      colors,
      status,
      image ,
      description
  }
  `);

  console.log(proresult);

  return (
    <div>
      <Wrapper>
        <section className="py-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Sidebar (Filter Section) */}
            <div className="w-full md:w-1/4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
                <ul className="space-y-2 text-gray-600 mt-4">
                  <li>Sports Bras</li>
                  <li>Tops & T-Shirts</li>
                  <li>Hoodies & Sweatshirts</li>
                  <li>Jackets</li>
                  <li>Shorts</li>
                  <li>Trousers & Tights</li>
                  <li>Tracksuits</li>
                  <li>Jumpsuits & Rompers</li>
                  <li>Skirts & Dresses</li>
                  <li>Socks</li>
                  <li>Accessories & Equipment</li>
                </ul>
              </div>


              <div className='mt-16'>
                <h5 className='text-xl font-bold'>Gender</h5>
<input type="checkbox"   className='mt-3'/> Male
<br />
<input type="checkbox"  className='mt-3' /> Women
<br />
<input type="checkbox"  className='mt-3' />Unisex 

            </div>



              <div className='mt-5'>
                <h5 className='text-xl font-bold'>Kids</h5>
<input type="checkbox"   className='mt-3'/> Boys
<br />
<input type="checkbox"  className='mt-3' /> Girls


            </div>
              <div>
                <h5 className="text-md font-semibold text-gray-700">Shop By Price</h5>
                <div className="mt-3">
                  <input type="checkbox" className="mr-2" /> Under ₹ 2,500
                </div>
                <div className="mt-2">
                  <input type="checkbox" className="mr-2" /> ₹ 2,501 - ₹ 7,500
                </div>
              </div>
            </div>

          
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-6 gap-y-6">
                {proresult.map((product: Iproduct) => (
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
                        <p className='text-green-500 text-sm mb-3'>{product.colors}</p>
                        <p className="text-gray-900 font-semibold text-lg mb-2">PKR: {product.price}</p>
                        {/* <p className="text-gray-600 text-sm mb-4">{product.description}</p> */}
                        <div className="flex justify-between items-center">
                          <span
                            className={`text-sm font-medium ${
                              product.status === 'In Stock' ? 'text-green-500' : 'text-red-500'
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
            </div>
          </div>

        
          <div className="mt-12">
            <h4 className="text-xl font-semibold text-gray-800">Related Categories</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button2 text="Best Selling Products" />
              <Button2 text="Best Shoes" />
              <Button2 text="New Basketball Shoes" />
              <Button2 text="New Football Shoes" />
              <Button2 text="New Mens Shoes" />
              <Button2 text="New Running Shoes" />
              <Button2 text="Best Mens Shoes" />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button2 text="New Jordan Shoes" />
              <Button2 text="Best Womens Shoes" />
              <Button2 text="Best Training & Gym" />
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
}

export default Products;
