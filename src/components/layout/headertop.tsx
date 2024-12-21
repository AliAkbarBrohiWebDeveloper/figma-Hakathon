import Link from 'next/link'
import React from 'react'
import Wrapper from '../shareable/Wrapper'
import Image from 'next/image'


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { BiSearch } from 'react-icons/bi'



const Headertop = () => {
  return (
    <Wrapper>
    <header className='flex justify-between items-center gap-x-9  md:bg-[#F5F5F5]'>

      <div>

<Image src={'/c1.png'} alt='' height={50} width={50}/>

      </div>

<div className='  gap-x-10 hidden md:flex font-bold md:ml-[700px]' >

<Link href={'/'}></Link>



    <Link href={'products'}>Find a Store |</Link>




  <Link href={'help'}>Help |</Link>


  <Link href={'/join'}>Join Us |</Link>


    <Link href={'/sign'}>Sign In |</Link>

  
</div>

<div className="relative w-64  md:hidden sm:block"> 
          <input 
            type="text" 
             
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl " />
        </div>


<div>


<Sheet>
  <SheetTrigger className='md:hidden'><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <div className='flex flex-col gap-y-6 text-xl font-bold' >

<Link href={'/'}></Link>


<Link href={'/'}>New & Featured</Link>
    <Link href={'products'}>Find a Store</Link>




  <Link href={'help'}>Help</Link>


  <Link href={'/join'}>Join Us</Link>


    <Link href={'/sign'}>Sign In</Link>
              <Link href={'men'}>Men</Link>
            
            
              <Link href={''}>Women</Link>
          
            
              <Link href={''}>Kids</Link>
        
        
              <Link href={''}>Sales</Link>
            
              <Link href={''}>SNKRS</Link>
            



</div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>



</div>


    </header>
    </Wrapper>
  )
}

export default Headertop