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
        id: 133,
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


    },  {
        id: 32,
        src: "/p32.png",
        span: "just In",
        header: "Nike SB Force 58",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 33,
        src: "/p33.png",
        span: "just In",
        header: "Nike Dri-FIT Run Division Challenger",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 34,
        src: "/p34.png",
        span: "just In",
        header: "Nike Legend Essential 3 Next Nature",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 35,
        src: "/p35.png",
        span: "just In",
        header: "Nike Air Max SYSTM",

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
        header: "Nike Dri-FIT Totality",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 38,
        src: "/p38.png",
        span: "just In",
        header: "Serena Williams Design Crew",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 39,
        src: "/p39.png",
        span: "just In",
        header: "Jordan Why Not .6 PF",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 40,
        src: "/p40.png",
        span: "Promo Exclusion",
        header: "Air Jordan 1 Low",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 41,
        src: "/p41.png",
        span: "just In",
        header: "Nike Dri-FIT ADV TechKnit Ultra",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 42,
        src: "/p42.png",
        span: "just In",
        header: "Nike Dri-FIT Form",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 43,
        src: "/p43.png",
        span: "Promo Exclusion",
        header: "Air Jordan 1 Mid",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 44,
        src: "/p44.png",
        span: "just In",
        header: "Nike Dri-FIT ADV Run Division",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 45,
        src: "/p45.png",
        span: "just In",
        header: "Nike Yoga",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 46,
        src: "/p46.png",
        span: "just In",
        header: "Nike Dri-FIT Totality",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 47,
        src: "/p47.png",
        span: "just In",
        header: "Nike Dri-FIT ADV Tour",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 48,
        src: "/p48.png",
        span: "just In",
        header: "Nike Tanjun",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 49,
        src: "/p49.png",
        span: "Sustainable Materials",
        header: "Nike Go",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },  {
        id: 50,
        src: "/p50.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 51,
        src: "/p51.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 52,
        src: "/p52.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 53,
        src: "/p53.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 54,
        src: "/p54.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 55,
        src: "/p55.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 56,
        src: "/p56.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 57,
        src: "/p57.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 58,
        src: "/p58.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 59,
        src: "/p60.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 61,
        src: "/p61.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 62,
        src: "/p62.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 63,
        src: "/p63.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 64,
        src: "/p64.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 65,
        src: "/p65.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },{
        id: 66,
        src: "/p66.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 67,
        src: "/p67.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 68,
        src: "/p68.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 69,
        src: "/p69.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 70,
        src: "/p70.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 71,
        src: "/p71.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 72,
        src: "/p72.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 73,
        src: "/p73.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 74,
        src: "/p74.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 75,
        src: "/p75.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 76,
        src: "/p76.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 77,
        src: "/p77.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 78,
        src: "/p78.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 79,
        src: "/p79.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    
    {
        id: 80,
        src: "/p80.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 81,
        src: "/p81.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 82,
        src: "/p82.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 83,
        src: "/p83.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 84,
        src: "/p84.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 85,
        src: "/p85.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 86,
        src: "/p86.png",
        span: "just In",
        header: "NikeCourt Victory",

        any: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10 795.00"


    },
    {
        id: 87,
        src: "/p87.png",
        span: "just In",
        header: "NikeCourt Victory",

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
