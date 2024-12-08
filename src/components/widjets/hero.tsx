import Image from 'next/image';
import React from 'react';
import Wrapper from '../shareable/Wrapper';

const AirMax = [
  {
    id: 1,
    src: "/h2.png",
    header: "Nike Air Max Pulse",
    para: "Women's Shoes"
  },
  {
    id: 2,
    src: "/h3.png",
    header: "Nike Air Max Pulse",
    para: "Men's Shoes"
  },
  {
    id: 3,
    src: "/h4.png",
    header: "Nike Air Max 97 SE",
    para: "Men's Shoes"
  }
]

const Hero = () => {
  return (
    <Wrapper>
    <section className='mt-20'>

      <div className='text-center'>

        <h2 className='font-bold'>Hello Nike App</h2>
        <p className='text-sm'>Download the app to access everything Nike. Get Your Great</p>
      </div>
      <main
        style={{
          backgroundImage: 'url(/h1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '700px',
          width: '100%',  
        }}
        className="relative"
      >
      </main>

      <div className='mt-9'>
        <div className='text-center'>
          <p>First Look</p>
          <h2 className='text-2xl font-bold'>Nike Air Max Pulse</h2>
          <p>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.</p>
        </div>
        <div className='flex justify-center items-center gap-x-4 mt-6'>
          <button className='bg-black text-white px-6 py-2 rounded-lg'>Notify Me</button>
          <button className='bg-black text-white px-6 py-2 rounded-lg'>Shop Air Max</button>
        </div>
      </div>

      
      <div className='flex justify-center gap-4 mt-12 flex-col sm:flex-row'>
        {
          AirMax.map((item) => {
            return (
              <div key={item.id} className='text-center'>
                <Image src={item.src} alt='' height={441} width={441} className='mx-auto' />
                <h3 className='mt-4 text-lg font-semibold'>{item.header}</h3>
                <p>{item.para}</p>
              </div>
            )
          })
        }
      </div>
    </section>
    </Wrapper>
  );
}

export default Hero;
