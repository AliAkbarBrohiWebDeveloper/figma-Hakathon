import Button2 from '@/components/shareable/Button2'
import Wrapper from '@/components/shareable/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
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
        header: "Nike Court Vision Low Next Nature",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 4 995.00"


    }, {
        id: 3,
        src: "/p3.png",
        span: "just In",
        header: "Nike Air Force 1 PLT.AF.ORM",

        any: "Women's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 8 695.00"


    }, {
        id: 4,
        src: "/p4.png",
        span: "just In",
        header: "Nike Air Force 1 React",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 13 295.00"


    }, {
        id: 5,
        src: "/p5.png",
        span: "Promo Exclusion",
        header: "Air Jordan 1 Elevate Low",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 11 895.00"


    }, {
        id: 6,
        src: "/p6.png",
        span: "just In",
        header: "Nike Standard Issue",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 2 895.00"


    }, {
        id: 7,
        src: "/p7.png",
        span: "Promo Exclusion",
        header: "Nike Dunk Low Retro SE",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 9 695.00"


    }, {
        id: 8,
        src: "/p8.png",
        span: "Sustainable Materials",
        header: "Nike Dri-FIT UV Hyverse",

        any: "Men's Short-Sleeve Graphic Fitness Top",
        color: "1 Colour",
        price: "MRP : ₹ 2 495.00"


    }, {
        id: 9,
        src: "/p9.png",
        span: "just In",
        header: "Nike Court Vision Low",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 5 695.00"


    }, {
        id: 10,
        src: "/p10.png",
        span: "just In",
        header: "Nike Dri-FIT Ready",

        any: "Men's Short-Sleeve Fitness Top",
        color: "3 Colours",
        price: "MRP : ₹ 2 495.00"


    }, {
        id: 12,
        src: "/p12.png",
        span: "just In",
        header: "Nike One Leak Protection: Period",

        any: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
        color: "2 Colours",
        price: "MRP : ₹ 3 395.00"


    }, {
        id: 13,
        src: "/p13.png",
        span: "just In",
        header: "Nike Air Force 1 LV8 3",

        any: "Older Kids' Shoe",
        color: "1 Colour",
        price: "MRP : ₹ 7 495.00"


    }, {
        id: 14,
        src: "/p14.png",
        span: "just In",
        header: "Nike Blazer Low Platform",

        any: "Women's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 8 195.00"


    }, {
        id: 15,
        src: "/p15.png",
        span: "just In",
        header: "Nike Dri-FIT UV Miler",

        any: "Women's Shoe",
        color: "2 Colours",
        price: "MRP : ₹ 8 195.00"


    }, {
        id: 16,
        src: "/p6.png",
        span: "just In",
        header: "Nike Dunk Low Retro",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 17,
        src: "/p17.png",
        span: "just In",
        header: "Nike Pro Dri-FIT",

        any: "Men's Tight-Fit Sleeveless Top",
        color: "1 Colour",
        price: "MRP : ₹ 1 495.00"


    }, {
        id: 18,
        src: "/p18.png",
        span: "just In",
        header: "Nike Air Max SYSTM",

        any: "Older Kids' Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 6 495.00"


    }, {
        id: 19,
        src: "/p19.png",
        span: "just In",
        header: "Nike Air Max SYSTM",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 20,
        src: "/p20.png",
        span: "just In",
        header: "Nike Alate All U",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 21,
        src: "/p21.png",
        span: "just In",
        header: "Nike Court Legacy Lift",

        any: "Women's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 7 495.00"


    }, {
        id: 22,
        src: "/p22.png",
        span: "just In",
        header: "Nike Air Fo",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 23,
        src: "/p23.png",
        span: "just In",
        header: "Nike Swoosh",

        any: "Women's Medium-support Padded Sports Bra Tank",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 24,
        src: "/p24.png",
        span: "just In",
        header: "Nike SB Zoom Janoski OG+",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 26,
        src: "/p26.png",
        span: "just In",
        header: "Nike Dri-FIT Run Division Rise 365",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 27,
        src: "/p27.png",
        span: "just In",
        header: "Nike Dri-FIT Challenger",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 28,
        src: "/p28.png",
        span: "just In",
        header: "Jordan Series ES",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    }, {
        id: 29,
        src: "/p29.png",
        span: "just In",
        header: "Nike Outdoor Play",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 30,
        src: "/p30.png",
        span: "just In",
        header: "Nike Sportswear Trend",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 31,
        src: "/p31.png",
        span: "just In",
        header: "Nike Blazer Low '77 Jumbo",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 32,
        src: "/p32.png",
        span: "just In",
        header: "Nike SB Force 58",

        any: "Skate Shoe",
        color: "1 Colour",
        price: "MRP : ₹ 5 995.00"

    }
    
    
    
    


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



            <div className='mt-5'>
                <h5 className='text-xl font-bold'>Shop By Price</h5>
<input type="checkbox"   className='mt-3'/>Under ₹ 2 500.00
<br />
<input type="checkbox"  className='mt-3' />₹ 2 501.00 - ₹ 7 500.0

            </div>
            
            </div>
          
          
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                productImages.map((item) => (
                  <div key={item.id} className="flex flex-col items-center text-center border p-4 rounded-lg hover:shadow-md transition duration-300">
                   <Link href={`/products/${item.id}`}> <Image src={item.src} alt={item.header} height={348} width={348} className="mb-4" />
                    <span className=" text-[#9E3500] font-semibold text-xl">{item.span}</span>
                    <h5 className="font-semibold text-lg mt-2">{item.header}</h5>
                    <p className="text-sm text-gray-700">{item.any}</p>
                    <p className="text-sm text-gray-500">{item.color}</p>
                    <span className="font-bold mt-2">{item.price}</span>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </main>
<div>

<h4 className='text-xl font-bold'>Related Categories</h4>
</div>
<div className='flex flex-col md:flex-row items-center '>
<Button2 text='Best Selling Products'/>
<Button2 text='Best Shoes'/>
<Button2 text='New Basketball Shoes'/>
<Button2 text='New Football Shoes'/>
<Button2 text='New Mens Shoes'/>
<Button2 text='New Running Shoes'/>
<Button2 text='Best Mens Shoes'/>



</div>
<div className='flex gap-x-3 flex-col md:flex-row'>

<Button2 text='New Jordan Shoes'/>
<Button2 text='Best Womens Shoes'/>
<Button2 text='Best Training & Gym'/>

</div>




      </section>
      </Wrapper>
    )
  }
  
  export default Products;
