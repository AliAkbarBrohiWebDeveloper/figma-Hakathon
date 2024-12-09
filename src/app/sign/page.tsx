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
<input type="checkbox" /> <p>Keep me signed in</p>
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