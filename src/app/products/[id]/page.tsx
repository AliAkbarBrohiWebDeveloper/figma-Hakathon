
"use client";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "@/app/Redux/cartslice";

import { toast, ToastContainer } from 'react-toastify';  // Import toastify
import 'react-toastify/dist/ReactToastify.css'


interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  image: string; 
  description:string
}



const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<Product|null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductData = async () => {
      const productData = await client.fetch(
        `*[_type == "product" && _id == $id][0] {
          _id,
          productName,
          category,
          price,
          inventory,
          colors,
          status,
          image,
          description
        }`,
        { id: params.id }
      );
      setData(productData);
    };

    fetchProductData();
  }, [params.id]);

  

  const increaseQuantity = () => {
   
    if (data?.inventory && quantity < data.inventory) {
      setQuantity(quantity + 1);
    }
  };
  
  const decreaseQuantity = () => {
   
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  


  const handleAddToCart = () => {
    if (data) {
      const cartItem = {
        id: data._id,
        name: data.productName,
        price: data.price,
        quantity: quantity,
        image: urlFor(data.image).url(),
        inventory: data.inventory,
      };

      dispatch(addToCart(cartItem));


      toast.success("Item added to cart Successfully!", {
        position: "bottom-right",
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });



    }
  };

  if (!data) {
    return <div className="text-center font-bold text-xl">
      loading...
      
      </div>;
  }

  const totalPrice = (data.price * quantity).toFixed(2);

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-x-12">
      
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <Image
            src={urlFor(data.image).url()}
            alt={data.productName}
            height={400}
            width={400}
            className="object-cover rounded-sm shadow-xl"
          />
        </div>


        <div className="mt-8 md:mt-0 md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold text-gray-900">{data.productName}</h1>
          <p className="text-lg text-gray-700">{data.description}</p>

          <div className="flex flex-wrap gap-4">
            <p className="text-lg text-gray-600">
              Category: <span className="font-medium">{data.category}</span>
            </p>
            <p className="text-lg text-gray-600">
              Price: <span className=" text-xl text-green-600 font-semibold">PKR: {totalPrice}</span>
            </p>
            <p className="text-lg text-gray-600">
              Inventory: <span className="font-medium">{data.inventory}</span>
            </p>
            <p className="text-lg text-gray-600">
              Status: <span className="font-medium">{data.status}</span>
            </p>
          </div>


          <div>
            <h3 className="text-xl font-bold text-gray-900">Available Colors</h3>
            <span className="text-xl font-sm">{data.colors}</span>
          </div>


          <div className="flex items-center gap-x-20 mt-4">
            <button
              onClick={decreaseQuantity}
              className="flex items-center justify-center w-8 h-8 rounded-full disabled:opacity-50"
              disabled={quantity <= 1}
            >
              <FaMinus />
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="flex items-center justify-center w-8 h-8 rounded-full disabled:opacity-50"
              disabled={quantity >= data.inventory}
            >
              <FaPlus />
            </button>
          </div>


          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="w-auto py-3 px-6 bg-indigo-800 text-white font-semibold rounded-md shadow-md hover:red-blue-700 transition duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
         
        </div>
      </div>
      <ToastContainer/>
    </section>
  );
};

export default ProductDetailPage;







































