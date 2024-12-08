
import Wrapper from '@/components/shareable/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiHeart } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

const MenPage = () => {
  return (
    <Wrapper>
      <section className='mt-20'>

        <main>
          
          <div className='flex flex-col md:flex-row justify-between gap-6 mt-8'>
            
            <div>
              <h3 className='font-semibold'>Free Delivery</h3>
              <p>Applies to orders of ₹ 14,000.00 or more.</p>
              <button className='mt-2 text-blue-500'>View details</button>
            </div>

            <div className='mt-9 md:mt-0'>
              <h3 className='text-xl font-bold'>Summary</h3>
              
              <div className='flex justify-between gap-x-28 mt-6'>
                <h3>Subtotal</h3>
                <h3>₹ 20,890.00</h3>
              </div>
              <div className='flex justify-between gap-x-16 mt-6'>
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between gap-x-28 mt-6">
                <p>Total</p>
                <p>₹ 20,890.00</p>
              </div>

              <div className='text-center mt-6'>
                <Link href={'check'}>
                  <button className='px-6 py-2 bg-black rounded-lg text-white w-full md:w-auto'>
                    Member Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>

          
          <div className='mt-12'>
            <h3 className='text-lg font-bold'>Bag</h3>
          </div>

          
          <div className='flex flex-col md:flex-row gap-6 mt-8'>
            <div>
              <Image src={'/menimg.png'} alt='' height={150} width={150} />
            </div>
            <div className='flex flex-col justify-between'>
              <h3 className='font-semibold'>Nike Dri-FIT ADV TechKnit Ultra</h3>
              <span className='text-sm text-gray-600'>MRP: ₹ 3,895.00</span>
              <p className='text-sm'>Mens Short-Sleeve Running Top</p>
              <p className='text-sm text-gray-500'>Ashen Slate/Cobalt Bliss</p>

              <div className='flex justify-between mt-2'>
                <h5 className='text-sm'>Size: L</h5>
                <h5 className='text-sm'>Quantity: 1</h5>
              </div>
              <div className='flex gap-x-4 mt-3'>
                <BiHeart className='text-xl' />
                <MdDelete className='text-xl' />
              </div>
            </div>
          </div>

          
          <div className='flex flex-col md:flex-row gap-6 mt-8'>
            <div>
              <Image src={'/menimg.png'} alt='' height={150} width={150} />
            </div>
            <div className='flex flex-col justify-between'>
              <h4 className='font-semibold'>Nike Air Max 97 SE</h4>
              <p className='text-sm'>Mens Shoes</p>
              <p className='text-sm text-gray-500'>Flat Pewter/Light Bone/Black/White</p>

              <div className='flex justify-between mt-2'>
                <h5 className='text-sm'>Size: L</h5>
                <h5 className='text-sm'>Quantity: 1</h5>
              </div>
              <div className='flex gap-x-4 mt-3'>
                <BiHeart className='text-xl' />
                <MdDelete className='text-xl' />
              </div>
            </div>
          </div>

          
          <div className='mt-12'>
            <h4 className='text-lg font-semibold'>Favourites</h4>
            <p className='text-sm'>There are no items saved to your favourites.</p>
          </div>

        
          <div className='mt-12'>
            <h3 className='text-lg font-semibold'>You Might Also Like</h3>
          </div>

          
          <div className='mt-4'>
            <div className='flex flex-col items-center'>
              <Image src={'/f1.png'} alt='' height={431} width={431} />
              <h5 className='font-bold mt-2'>Air Jordan 1 Mid SE Craft</h5>
              <p className='text-sm'>Mens Shoes</p>
              <span className='text-sm text-gray-600'>MRP: ₹ 12,295.00</span>
            </div>
          </div>
        </main>

      </section>
    </Wrapper>
  )
}

export default MenPage;
