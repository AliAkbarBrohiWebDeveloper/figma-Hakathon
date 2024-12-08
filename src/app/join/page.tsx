import Link from 'next/link'
import React from 'react'

const Joinpage = () => {
  return (
    <section className='mt-14'>

<main className=" text-center">

<div>

<h5 className="text-2xl font-bold">YOUR ACCOUNT FOR EVERYTHING NIKE</h5>
<p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>


<form action="" className="mt-16">

<input type="email"  placeholder="Email address" required className="border-b-2 border-2 w-96 mt-9"/>
<br />
<input type="password"  placeholder="Password" required className="border-2 w-96 mt-3"/>

<br />
<input type="email"  placeholder="First Name" required className="border-b-2 border-2 w-96 mt-9"/>
<br />
<input type="password"  placeholder="Last Name" required className="border-2 w-96 mt-9"/>

<br />
<input type="password"  placeholder="Date of Birth" required className="border-2 w-96 mt-9"/>

<br />


<select name="" id="" className='mt-6'>
<option value=""> India</option>
<option value="">Pakistan</option>


</select>
<br />
<div className='mt-16 flex justify-center items-center gap-x-6'>
<input type="radio"  value="Male"name='gender'  />Male
<input type="radio"  value="Female"name='gender'  />Female
</div>
<br />
<p>Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
<h3 className='mt-9'>By creating an account, you agree to Nikes Privacy Policy and Terms of Use.</h3>
<button className="mt-5 px-28 py-2 bg-black text-white font-bold">Join Us</button>


<p className="mt-3">Already a Member?

<Link href={'sign'} className="font-bold underline">Sign</Link>

</p>


</form>

</div>



</main>


    </section>
  )
}

export default Joinpage