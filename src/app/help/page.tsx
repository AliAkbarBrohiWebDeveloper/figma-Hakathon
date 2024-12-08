

import Button from '@/components/shareable/Button'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Helppage = () => {
  return (
    <section className='mt-12 px-4 sm:px-8 lg:px-16'>

      {/* Header Section */}
      <div className='text-center'>
        <h3 className='text-xl sm:text-2xl md:text-3xl font-bold'>GET HELP</h3>
        <br />

      
        <div className='flex justify-center'>
          <div className="relative w-full max-w-xs md:max-w-sm">
            <input 
              type="text" 
              placeholder='What can we help you with?'
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
            <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </div>
        </div>
      </div>

      
      <main className='flex flex-col md:flex-row justify-between mt-12'>

        
        <div className='px-3'>
          <h3 className='text-lg sm:text-xl md:text-2xl font-semibold'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h3>
          <p className='mt-2'>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
          <p className='mt-2'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
          <p className='mt-3'>If you enter your PAN information at checkout, you will be able to pay for your order with PayTM or a local credit or debit card.</p>
          <p className='mt-3'>Apple Pay</p>

          <h6 className='mt-4'>Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you are not already a Member, join us today.</h6>

          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Button text='JOIN US'/>
          <Button text='SHOP NIKE'/>
            
          </div>

          
          <div className='mt-8'>
            <p className='font-semibold'>FAQs</p>
            <p className='mt-6 font-semibold'>Does my card need international purchases enabled?</p>
            <p className='mt-2'>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
            <p className='mt-6'>Please note, some banks may charge <span className='font-bold underline'>a small transaction fee</span> for international orders.</p>
            <h4 className='mt-5 font-bold'>Can I pay for my order with multiple methods?</h4>
            <p>No, payment for Nike orders canot be split between multiple payment methods.</p>
            <p className='mt-6 font-bold'>What payment method is accepted for SNKRS orders?</p>
            <p className='mt-2'>You can use any accepted credit card to pay for your SNKRS order.</p>
            <p className='mt-6 font-bold'>Why donot I see Apple Pay as an option?</p>
            <p className='mt-2'>To see Apple Pay as an option in the Nike App or on Nike.com, you  will need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you will need to use Safari to use Apple Pay on Nike.com.</p>
            <p>Was this answer helpful?</p>
          </div>

          
          <div className='mt-8'>
            <h4>Was this answer helpful?</h4>
            <div className='flex gap-x-2'>
              <Image src={'/l1.png'} alt='' height={30} width={30}/>
              <Image src={'/l2.png'} alt='' height={30} width={30}/>
            </div>
            <h3 className='font-semibold mt-6 text-gray-500'>RELATED</h3>
            <p className='font-semibold'>WHAT ARE NIKES DELIVERY OPTIONS?</p>
            <p className='font-semibold'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
          </div>
        </div>
<hr />
        
        <div className='text-center mt-8 md:mt-0'>
          <h3 className='text-2xl sm:text-5xl '>Contact Us</h3>

        
          <div className='flex flex-col justify-center gap-8 mt-6 gap-y-6'>
            <div className='text-centern '>
              <Image src='/phone1.png' alt='Phone Icon' height={64} width={64} className='md:mx-20 mx-auto'/>
              <h3 className='font-semibold'>000 800 919 0566</h3>
              <h5>Products & Orders: 24 hours a day, 7 days a week</h5>
              <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
            </div>

            <div className='text-center'>
              <Image src='/cam1.png' alt='Camera Icon' height={64} width={64} className='md:mx-20 mx-auto'/>
              <h3 className='font-semibold'>24 hours a day</h3>
              <p>7 days a week</p>
            </div>

            <div className='text-center'>
              <Image src='/cam3.png' alt='Camera Icon' height={64} width={64} className='md:mx-20 mx-auto '/>
              <h3 className='font-semibold'>We will reply within</h3>
              <p>five business days</p>
            </div>

            <div className='text-center'>
              <Image src='/cam2.png' alt='Camera Icon' height={64} width={64} className='md:mx-20 mx-auto '/>
              <h3 className='font-semibold'>STORE LOCATOR</h3>
              <p>Find Nike retail stores near you</p>
            </div>
          </div>
        </div>

      </main>
    </section>
  )
}

export default Helppage;

