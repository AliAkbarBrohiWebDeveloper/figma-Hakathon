import React from 'react'

import Link from 'next/link'
import { BiCart, BiHeart, BiSearch, BiUser } from 'react-icons/bi'


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"



  
  
import { Menu } from 'lucide-react'
import Wrapper from '../shareable/Wrapper'
import Image from 'next/image'
  

const Headermain = () => {
  
  return(
    <Wrapper>

      <header className="flex justify-between gap-x-9 items-center p-4">


        <div>
<Image src={'/vector1.png'} alt='' height={20} width={58}/>


        </div>
    

        <div>
          <ul className=" space-x-4 hidden md:flex font-semibold">
            <li>
              <Link href={'/'}>New & Featured</Link>
            </li>
            <li>
              <Link href={'men'}>Men</Link>
            </li>
            <li>
              <Link href={''}>Women</Link>
            </li>
            <li>
              <Link href={'/signup'}>Kids</Link>
            </li>
            <li>
              <Link href={'/signup'}>Sales</Link>
            </li>
            <li>
              <Link href={'/signup'}>SNKRS</Link>
            </li>
            
            
            
          
          </ul>
        </div>

        <div className="relative w-64 hidden md:block"> 
          <input 
            type="text" 
             
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl " />
        </div>
<div>
  <Link href={'/heart'}><BiHeart className='text-4xl font-bold'/></Link>

</div>
<div>
  <Link href={'/cart'}><BiCart className='text-3xl font-bold'/></Link>


</div>
<div>


<div className='md:hidden'>
 <Link href={'/user'}>
<BiUser className='text-3xl font-bold'/>

</Link>
</div>


</div>



<Sheet>
  <SheetTrigger className='md:hidden'><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      
      <ul className=" space-x-4 sm:flex font-semibold text-xl gap-y-6">
            <li>
              <Link href={'/'}>New & Featured</Link>
            </li>
            <li>
              <Link href={'men'}>Men</Link>
            </li>
            <li>
              <Link href={'women'}>Women</Link>
            </li>
            <li>
              <Link href={'kids'}>Kids</Link>
            </li>
            <li>
              <Link href={'/sales'}>Sales</Link>
            </li>
            <li>
              <Link href={'SNkRS'}>SNKRS</Link>
            </li>
            
            
            
          
          </ul>
        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>




      </header>
      </Wrapper>
    
  )
}

export default Headermain
