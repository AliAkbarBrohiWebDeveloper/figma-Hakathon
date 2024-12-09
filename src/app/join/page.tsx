import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Joinpage = () => {
  return (
    <section className='mt-14'>

<main className=" text-center">

<div className='flex justify-center items-center'>
<Image src={'/vector1.png'} alt='' height={17} width={324}/>

  </div>


<div>

<h5 className="text-2xl font-bold">BECOME A NIKE MEMBER</h5>
<p className='mt-9'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community...</p>


<form action="" className="mt-16">

<input type="email"  placeholder="Email address" required className="border-b-2 border-2 w-96 mt-9 h-12 rounded-sm"/>
<br />
<input type="password"  placeholder="Password" required className="border-2 w-96 mt-3 h-12 rounded-sm"/>

<br />
<input type="email"  placeholder="First Name" required className="border-b-2 border-2 w-96 mt-9 h-12 rounded-sm"/>
<br />
<input type="password"  placeholder="Last Name" required className="border-2 w-96 mt-9 h-12 rounded-sm"/>

<br />
<input type="password"  placeholder="Date of Birth" required className="border-2 w-96 mt-9 h-12 rounded-sm"/>

<br />

<p className='mt-6 font-semibold'>Select Your Nationality</p>
<select name="" id="" className='mt-6'>
<option value=""> India</option>
<option value="">Pakistan</option>


</select>
<br />
<div className='mt-16 flex justify-center items-center gap-x-6'>
  <p className='font-semibold'>Select Your Gender</p>
  <br />
<input type="radio"  value="Male"name='gender'  />Male
<input type="radio"  value="Female"name='gender'  />Female
</div>
<br />
<p className='text-sm'>Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
<input type="checkbox" className='mt-9 '/> <span>By creating an account, you agree to Nikes Privacy Policy and Terms of Use</span>
<p className="mt-9">Already a Member?

<Link href={'sign'} className="font-bold underline mt-5">Sign</Link>

</p>


</form>

</div>



</main>


    </section>
  )
}

export default Joinpage