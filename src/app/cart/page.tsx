import Wrapper from '@/components/shareable/Wrapper'
import Image from 'next/image'
import React from 'react'

const Cart  = () => {
  return (
    <Wrapper>
    <section className='mt-10'>

<main className='flex flex-col md:flex-row  justify-center items-center gap-6'>

<div>

<Image src={'/cart.png'} alt='' height={653} width={653}/>

</div>
<div>

<h3 className='text-xl font-bold'>Nike Air Force 1 
PLT.AF.ORM</h3>
<p>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
<span className='text-xl font-bold'>₹ 8 695.00</span>
<br />
<button className='bg-black px-6 py-2 rounded-lg  text-white mt-6'>  Add To Cart</button>

</div>



</main>



    </section>
    </Wrapper>
  )
}

export default Cart 