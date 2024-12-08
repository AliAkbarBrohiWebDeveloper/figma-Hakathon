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



const Headertop = () => {
  return (
    <Wrapper>
    <header className='flex justify-between items-center gap-x-9'>

      <div>

<Image src={'/c1.png'} alt='' height={24} width={24}/>

      </div>

<div className='  gap-x-10 hidden md:flex font-bold' >

<Link href={'/'}></Link>



    <Link href={'products'}>Find a Store|</Link>




  <Link href={'help'}>Help|</Link>


  <Link href={'/join'}>Join Us|</Link>


    <Link href={'/sign'}>Sign In|</Link>
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



    <Link href={'products'}>Find a Store|</Link>




  <Link href={'help'}>Help|</Link>


  <Link href={'/join'}>Join Us|</Link>


    <Link href={'/sign'}>Sign In|</Link>
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