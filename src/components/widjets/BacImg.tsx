

import React from 'react'
import Button from '../shareable/Button'
import Wrapper from '../shareable/Wrapper'
import Image from 'next/image'

function BacImg() {
  return (
    <Wrapper>
      <section>

        <div className="text-center bg-gray-200 py-5">
          <h2 className="font-bold text-2xl">Hello Nike App</h2>
          <p className="text-sm">Download the app to access everything Nike. Get Your Great</p>
        </div>

      
        <div className="relative mt-9 w-full h-[300px] md:h-[700px]">
          <Image
            src="/h1.png"
            alt="Nike Background"
            layout="fill" 
            objectFit="cover" 
            objectPosition="center" 
            className="rounded-lg" 
          />
        </div>

     
        <div className="text-center mt-28">
          <h4>First Look</h4>
          <h3 className=" text-2xl md:text-4xl font-semibold">Nike Air Max Pulse</h3>
          <p className="mt-4 text-sm">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex justify-center items-center gap-x-9 mt-6">
            <Button text="Notify Me" />
            <Button text="Shop Air Max" />
          </div>
        </div>

      </section>
    </Wrapper>
  )
}

export default BacImg;















