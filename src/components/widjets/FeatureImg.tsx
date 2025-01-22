import React from 'react'
import Wrapper from '../shareable/Wrapper'

function FeatureImg() {
  return (
    <Wrapper>
  <section>
    

 <div className="font-bold text-xl">Featured</div>

        <main
          className="mt-16"
          style={{
            backgroundImage: 'url(/bg1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '700px',
            width: '100%',
          }}
        >
      
        </main>

  </section>
  </Wrapper>
  
  )
}

export default FeatureImg