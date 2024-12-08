import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const SignIpage = () => {
  return (
    <section className="mt-12">

<main className=" text-center">


  <div className='flex justify-center items-center'>
<Image src={'/vector1.png'} alt='' height={17} width={324}/>

  </div>

<div>

<h5 className="text-2xl font-bold">YOUR ACCOUNT FOR EVERYTHING NIKE</h5>


<form action="" className="mt-16">

<input type="email"  placeholder="Email address" required className="border-b-2 border-2  mt-3 rounded-sm h-12 w-96"/>
<br />
<input type="password"  placeholder="Password" required className="border-2 mt-6 rounded-sm h-12 w-96"/>
<br />
<div className='flex justify-center items-center gap-x-6 mt-9'>


<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="19" height="19" rx="2.5" stroke="#BCBCBC"/>
<g clip-path="url(#clip0_1_2023)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.63121 10.6863L6.67606 8.73415L5.11133 10.2959L8.63128 13.8104L14.8891 7.56229L13.3244 6L8.63121 10.6863Z" fill="#111111"/>
</g>
<defs>
<clipPath id="clip0_1_2023">
<rect width="9.77778" height="8" fill="white" transform="translate(5.11133 6)"/>
</clipPath>
</defs>
</svg>



<p>Keep me signed in</p>
<span>Forgotten your password?</span>
</div>
<br />
<button className="mt-5 px-28 py-2 bg-black text-white font-bold rounded-sm hover:scale-105 duration-300">sign In</button>

<p className="mt-3">Not A Member

<Link href={'join'} className="font-bold underline"> join us</Link>

</p>


</form>

</div>



</main>


</section>
  )
}

export default SignIpage