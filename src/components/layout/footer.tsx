import React from 'react'
import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi'
import Wrapper from '../shareable/Wrapper'

const Footer = () => {
  return (
    <Wrapper>
    <footer className='bg-black text-white mt-24 w-auto h-auto md:w-[1440px] md:h-[331px] '>

<main className='conatiner grid grid-cols-1 md:grid-cols-4 text-center  mx-6 py-6'>

<div>

<ul>

    <li className='font-bold'>Find A Store</li>
    <li className='mt-6'>Become A Member</li>
    <li>Sign Up for Email</li>
    <li>Send Us Feedback</li>
    <li>Student Discounts</li>
</ul>

</div>
<div>
    <ul>
        <li className='font-bold '> Get Help</li>
        <li className='mt-6'>Order Status</li>
        <li>Delivery</li>
        <li>Returns</li>
        <li>Payment Options</li>
        <li>Contact Us On Nike.com Inquiries</li>
        <li>Contact Us On All Other Inquiries</li>
    </ul>
</div>
<div>

    <ul>
        <li className='font-bold'>About Nike</li>
        <li className='mt-6'>News</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>Sustainability</li>
    </ul>
</div>
<div className='flex  justify-evenly items-center'>
<BiLogoTwitter className='text-2xl font-bold'/>
<BiLogoFacebook className='text-2xl font-bold'/>



</div>


</main>


    </footer>
    </Wrapper>
  )
}

export default Footer