import React from 'react'
import Button from '../shareable/Button'
import Wrapper from '../shareable/Wrapper'

function BacImg() {
  return (
    <Wrapper>
    <section>

<div className='text-center bg-gray-200 '>
          <h2 className='font-bold'>Hello Nike App</h2>
          <p className='text-sm'>Download the app to access everything Nike. Get Your Great</p>
        </div>
        
        <main
          style={{
            backgroundImage: 'url(/h1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="relative md:h-[700px] h-[300px] w-auto mt-9"
        ></main>

        <div className='text-center mt-28'>
          <h4>First Look</h4>
          <h3 className='text-5xl font-semibold'>Nike Air Max Pulse</h3>
          <p className='mt-4'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max.</p>
          <div className='flex justify-center items-center gap-x-9'>
            <Button text='Notify Me'/>
            <Button text='Shop Air Max'/>
          </div>
        </div>

    </section>
    </Wrapper>
  )
}

export default BacImg