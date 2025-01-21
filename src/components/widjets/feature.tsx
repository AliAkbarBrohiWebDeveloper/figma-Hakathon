import Image from 'next/image'
import React from 'react'
import Wrapper from '../shareable/Wrapper';
import Button from '../shareable/Button';
import Link from 'next/link';


const GearUpImages = [
  {
    id: 1,
    src: "/g1.png",
    header: "Nike Dri-FIT ADV TechKnit Ultra",
    para: "Men's Short-Sleeve Running Top"
  },
  {
    id: 2,
    src: "/g2.png",
    header: "Nike Dri-FIT Challenger",
    para: "Men's 18cm (approx.) 2-in-1 Versatile Shorts"
  },
  {
    id: 3,
    src: "/g3.png",
    header: "Nike Dri-FIT ADV Run Division",
    para: "Women's Long-Sleeve Running Top"
  },
  {
    id: 4,
    src: "/g4.png",
    header: "Nike Fast",
    para: "Women's Mid-Rise 7/8 Running Leggings with Pockets"
  }
]

const Feature = () => {
  return (
    <Wrapper>
    <section className='mt-5'>
      <div className='font-bold'>
        Featured
      </div>

      <main
        className='mt-16'
        style={{
          backgroundImage: 'url(/bg1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '700px',
          width: '100%',
        }}
      >
    
      </main>

      <div className='text-center md:mt-3'>
        <h3 className='text-2xl font-bold'>STEP INTO WHAT FEELS GOOD</h3>
        <p>Cause everyone should know the feeling of running in that perfect pair.</p>
        <Button text='Find Your Shoe'/>
      </div>

      <div className=' mt-6'>
        <h3 className='text-xl font-bold'>Gear Up</h3>
      </div>

    
      <div className='flex  flex-col md:flex-row justify-center gap-6 mt-8'>
        {GearUpImages.map((product) => (
          <div key={product.id} className='flex flex-col items-center text-center mt-6'>
            <Link href={`/products/${product.id}`}>
            <Image
              src={product.src}
              alt={product.header}
              height={300}
              width={300}
              className='rounded-lg'
            />
            </Link>
            <h3 className='mt-4 text-lg font-semibold'>{product.header}</h3>
            <p>{product.para}</p>
          </div>
        ))}
      </div>
    </section>
    </Wrapper>
  );
}

export default Feature;
