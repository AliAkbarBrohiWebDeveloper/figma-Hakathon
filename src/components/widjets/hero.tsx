import Image from 'next/image';
import React from 'react';
import Wrapper from '../shareable/Wrapper';
import Button from "@/components/shareable/Button"

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
    <section className='mt-10'>

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

      <div className='text-center mt-20'>

<h4>First Look</h4>
<h3 className='text-5xl font-semibold'>Nike Air Max Pulse</h3>
<p className='mt-4'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
—designed to push you past your limits and help you go to the max.</p>
<div className='flex justify-center items-center gap-x-9'>
<Button text='Notify Me'/>
<Button text='Shop Air Max'/>
</div>



      </div>

      
      <div className='flex justify-center gap-4 mt-28 flex-col sm:flex-row'>
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
