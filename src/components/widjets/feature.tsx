
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
  const [loading, setLoading] = useState<boolean>(false);

 
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
    return <div></div>;  // Show a loading state while the data is being fetched
  }

  if (products.length === 0) {
    return <div></div>;  // If no products found, display this message
  }

  return (
    <Wrapper>
      <section className="mt-5">
       

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
