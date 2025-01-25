

import React from 'react'
import Wrapper from '../shareable/Wrapper'
import Image from 'next/image'

function FeatureImg() {
  return (
    <Wrapper>
      <section>
        <div className="font-bold text-xl">Featured</div>

        <div className="relative mt-16 w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[700px]">
        
          <Image
            src="/bg1.png"
            alt="Featured Image"
            layout="fill" 
            objectFit="cover" 
            objectPosition="center" 
            className="rounded-lg"
          />
        </div>
      </section>
    </Wrapper>
  )
}

export default FeatureImg;
