

import Wrapper from '@/components/shareable/Wrapper'
import Image from 'next/image'
import React from 'react'

const Checkpage = () => {
  return (
    <Wrapper>
      <section className='mt-16'>
        <main>
          <div className='flex flex-col md:flex-row gap-10 md:gap-14'>
            {/* Left Side: Order Details */}
            <div className='flex-1'>
              <h2 className='font-bold text-xl'>How would you like to get your order?</h2>
              <p className='mt-3 text-sm'>
                Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More
              </p>

              <div className='flex gap-x-6 border-4 mt-6 p-2'>
                <Image src={'/d1.png'} alt='' height={19} width={21} />
                <span>Deliver It</span>
              </div>

              <div className='mt-6'>
                <h4>Enter your name and address:</h4>

                <input type="text" placeholder='First Name' required className='border-2 w-full md:w-96 mt-6' />
                <br />
                <input type="text" placeholder='Last Name' required className='border-2 w-full md:w-96 mt-6' />
                <br />
                <input type="text" placeholder='Address Line 1' required className='border-2 w-full md:w-96 mt-6' />
                <br />
                <input type="text" placeholder='Address Line 2' required className='border-2 w-full md:w-96 mt-6' />
                <br />
                <input type="text" placeholder='Address Line 3' required className='border-2 w-full md:w-96 mt-6' />
                <br />
                <input type="text" placeholder='Postal Code' required className='border-2 w-full md:w-96 mt-6' />
                <input type="text" placeholder='Locality' required className='border-2 w-full md:w-96 mt-6' />
                <br />
                <div className='flex gap-x-6'>
                  <select className='w-full md:w-auto'>
                    <option value="">State/Territory</option>
                  </select>
                  <select className='w-full md:w-auto'>
                    <option value="">India</option>
                    <option value="">Pakistan</option>
                  </select>
                </div>

                <h5 className='mt-6'>Save this address to my profile</h5>
                <p>Make this my preferred address</p>

                <h4 className='mt-6 font-bold text-xl'>What's your contact information?</h4>
                <input type="text" placeholder='Email' required className='border-2 w-full md:w-96 mt-6' />
                <br />
                <input type="text" placeholder='Phone Number' required className='border-2 w-full md:w-96 mt-6' />
                <br />
                <span>A carrier might contact you to confirm delivery.</span>

                <h4 className='text-xl font-bold mt-6'>What's your PAN?</h4>
                <input type="text" placeholder='PAN' className='mt-9 w-full md:w-96' />
                <br />
                <p className='mt-6 text-sm'>
                  Enter your PAN to enable payment with UPI, Net Banking or local card methods
                </p>
                <span className='text-sm mt-6'>Save PAN details to Nike Profile</span>
                <p className='mt-6 text-sm'>
                  I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.
                </p>

                <div className='text-center mt-9'>
                  <button className='px-16 py-2 rounded-sm border-2'>Continue</button>
                </div>

                <div className='mt-6'>
                  <h3>Delivery</h3>
                  <h3>Shipping</h3>
                  <h3>Billing</h3>
                  <h3>Payment</h3>
                </div>
              </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className='flex-1'>
              <h4 className='font-bold text-xl'>Order Summary</h4>
              <div className='flex gap-x-20 mt-10'>
                <h4>Subtotal</h4>
                <span>₹ 20,890.00</span>
              </div>
              <div className='flex gap-x-20 mt-7'>
                <h6>Delivery/Shipping</h6>
                <span>Free</span>
              </div>
              <div className='flex gap-x-20 mt-7 font-bold'>
                <p>Total</p>
                <span>₹ 20,890.00</span>
              </div>
              <p className='mt-7 text-sm'>(The total reflects the price of your order, including all duties and taxes)</p>

              <div className='flex items-center mt-10'>
                <div>
                  <Image src={'/r1.png'} alt='' height={208} width={208} />
                </div>
                <div>
                  <h3 className='font-normal'>Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</h3>
                  <p>Qty 1</p>
                  <p>₹ 3,895.00</p>
                </div>
              </div>

              <div className='flex items-center mt-6'>
                <div>
                  <Image src={'/s2.png'} alt='' height={208} width={208} />
                </div>
                <div>
                  <h5 className='font-normal'>Nike Air Max 97 SE Men's Shoes</h5>
                  <p>Qty 1</p>
                  <p>Size UK 8</p>
                  <span>₹ 16,995.00</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </Wrapper>
  )
}

export default Checkpage;









