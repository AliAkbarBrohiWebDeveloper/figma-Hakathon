import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'



const Footer = () => {
  return (
    
    
    <footer className='bg-black text-white mt-24 w-auto h-auto md:w-[1740px] md:h-[331px] '>

<main className='conatiner grid grid-cols-1 md:grid-cols-4  mx-3 py-3'>

<div>

<ul>

    <li className='font-bold'>Find A Store</li>
    <li className='mt-6'>Become A Member</li>
    <li className='mt-6'>Sign Up for Email</li>
    <li className='mt-6'>Send Us Feedback</li>
    <li className='mt-6'>Student Discounts</li>
</ul>

</div>
<div>
    <ul>
        <li className='font-bold '> Get Help</li>
        <li className='mt-6'>Order Status</li>
        <li className='mt-6'>Delivery</li>
        <li className='mt-6'>Returns</li>
        <li className='mt-6'>Payment Options</li>
        <li className='mt-6'>Contact Us On Nike.com Inquiries</li>
        <li className='mt-5'>Contact Us On All Other Inquiries</li>
    </ul>
</div>
<div>

    <ul>
        <li className='font-bold'>About Nike</li>
        <li className='mt-6'>News</li>
        <li className='mt-6'>Careers</li>
        <li className='mt-6'>Investors</li>
        <li className='mt-6'>Sustainability</li>
    </ul>
</div>
<div className='flex gap-x-3 items-center'>
<BiLogoTwitter className='text-5xl font-bold'/>
<BiLogoFacebook className='text-5xl font-bold'/>
<BiLogoYoutube className='text-5xl font-bold'/>
<BiLogoInstagram className='text-5xl font-bold'/>



</div>


</main>


    </footer>
    

  )
}

export default Footer