
import Button from '@/components/shareable/Button'
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
            
            <div className='bg-[#F5F5F5] w-[400px]md:w-[647px] h-[70px] md:h-[62px] flex  gap-x-5 pl-[4px]'>
              <div>
              <h3 className='font-semibold'>Free Delivery</h3>
              <p className='text-sm'>Applies to orders of ₹ 14,000.00 or more.</p>
              </div>
              <button className='mt-2 underline w-[64px] h-[24px]'>View details</button>
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
              <div className="flex justify-between  items-center md:w-[334px] h-[62px] gap-x-28 mt-6 border-t-2 border-b-2">
                <p>Total</p>
                <p>₹ 20,890.00</p>
              </div>

              <div className='text-center mt-6'>
                <Link href={'check'}>
                <Button text=' Member Checkout'/>
                </Link>
              </div>
            </div>
          </div>

          
          <div className='mt-12'>
            <h3 className='text-lg font-bold'>Bag</h3>
          </div>

          
          <div className='flex  gap-6 mt-8'>
            <div>
              <Image src={'/menimg.png'} alt='' height={150} width={150} />
            </div>
            <div className='flex flex-col justify-between'>
              <h3 className='font-semibold'>Nike Dri-FIT ADV TechKnit Ultra</h3>
              <span className='text-sm text-gray-600'>MRP: ₹ 3,895.00</span>
              <p className='text-sm text-[#757575]'>Mens Short-Sleeve Running Top</p>
              <p className='text-sm text-[#757575]'>Ashen Slate/Cobalt Bliss</p>

              <div className='flex gap-x-9 mt-2'>
                <h5 className='text-sm text-[#757575]'>Size: L</h5>
                <h5 className='text-sm text-[#757575]'>Quantity: 1</h5>
              </div>
              <div className='flex gap-x-4 mt-3'>
                <BiHeart className='text-xl' />
                <MdDelete className='text-xl' />
              </div>
            </div>
          </div>

          
          <div className='flex  gap-[149px] mt-8'>
            <div></div>
            
            <div className='flex flex-col justify-between w-[537px] h-[112px]'>
              <h4 className='font-semibold'>Nike Air Max 97 SE</h4>
              <p className='text-sm'>Mens Shoes</p>
              <p className='text-sm text-gray-500'>Flat Pewter/Light Bone/Black/White</p>

              <div className='flex gap-x-9 mt-2'>
                <h5 className='text-sm text-[#757575] '>Size: 8</h5>
                <h5 className='text-sm text-[#757575]'>Quantity:1</h5>
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
            <div className='flex flex-col '>
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
