import Wrapper from '@/components/shareable/Wrapper'
import Image from 'next/image'
import React from 'react'

const productImages = [
    {
        id: 1,
        src: "/p1.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 2,
        src: "/p2.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 3,
        src: "/p3.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 4,
        src: "/p4.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 5,
        src: "/p5.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 6,
        src: "/p6.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 7,
        src: "/p7.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 8,
        src: "/p8.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 9,
        src: "/p9.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 10,
        src: "/p10.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 12,
        src: "/p12.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 133,
        src: "/p13.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 14,
        src: "/p14.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 15,
        src: "/p15.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 16,
        src: "/p6.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 17,
        src: "/p17.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 18,
        src: "/p18.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 19,
        src: "/p19.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 20,
        src: "/p20.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 21,
        src: "/p21.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 22,
        src: "/p22.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 23,
        src: "/p23.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 24,
        src: "/p24.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 26,
        src: "/p26.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 27,
        src: "/p27.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 28,
        src: "/p28.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 29,
        src: "/p29.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 30,
        src: "/p30.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 31,
        src: "/p31.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 32,
        src: "/p32.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 33,
        src: "/p33.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 34,
        src: "/p34.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 35,
        src: "/p35.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 36,
        src: "/p36.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 37,
        src: "/p37.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 38,
        src: "/p38.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 39,
        src: "/p39.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 40,
        src: "/p40.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 41,
        src: "/p41.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 42,
        src: "/p42.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 43,
        src: "/p43.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 44,
        src: "/p44.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 45,
        src: "/p45.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 46,
        src: "/p46.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 47,
        src: "/p47.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 48,
        src: "/p48.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 49,
        src: "/p49.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 50,
        src: "/p50.png",
        span: "just In",
        header: "Nike Air Force 1 Mid '07",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    


]

const Products = () => {
    return (
        <Wrapper>
      <section className="py-8">
        <main className="flex flex-col md:flex-row gap-8 md:gap-16">
          
          {/* Filters Section */}
          <div className="w-full md:w-1/4">
            <h3 className="font-bold text-lg">New (500)</h3>
            <ul className="space-y-2 mt-4">
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
            
            {/* Gender Filters */}
            <div className="mt-8">
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Unisex</option>
              </select>
            </div>
            
            {/* Age Group Filters */}
            <div className="mt-6">
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option value="">Boys</option>
                <option value="">Girls</option>
              </select>
            </div>
            
            
            <div className="mt-6">
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option value="">Under ₹ 2,500.00</option>
                <option value="">₹ 2,501.00 - ₹ 7,500.00</option>
              </select>
            </div>
          </div>
          
          
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                productImages.map((item) => (
                  <div key={item.id} className="flex flex-col items-center text-center border p-4 rounded-lg hover:shadow-md transition duration-300">
                    <Image src={item.src} alt={item.header} height={348} width={348} className="mb-4" />
                    <span className="text-sm text-gray-500">{item.span}</span>
                    <h5 className="font-semibold text-lg mt-2">{item.header}</h5>
                    <p className="text-sm text-gray-700">{item.any}</p>
                    <p className="text-sm text-gray-500">{item.color}</p>
                    <span className="font-bold mt-2">{item.price}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </main>
      </section>
      </Wrapper>
    )
  }
  
  export default Products;
