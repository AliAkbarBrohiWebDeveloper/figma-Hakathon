import Link from 'next/link'
import React from 'react'


const SignIpage = () => {
  return (
    <section className="mt-6">

<main className=" text-center">

<div>

<h5 className="text-2xl font-bold">YOUR ACCOUNT FOR EVERYTHING NIKE</h5>


<form action="" className="mt-16">

<input type="email"  placeholder="Email address" required className="border-b-2 border-2 w-auto mt-3"/>
<br />
<input type="password"  placeholder="Password" required className="border-2 w-auto mt-3"/>
<br />
<div className='flex justify-center items-center gap-x-6 mt-9'>

<p>Keep me signed in</p>
<span>Forgotten your password?</span>
</div>
<br />
<button className="mt-5 px-28 py-2 bg-black text-white font-bold">sign In</button>

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