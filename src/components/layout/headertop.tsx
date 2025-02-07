

import Link from 'next/link'
import React from 'react'
import Wrapper from '../shareable/Wrapper'
import Image from 'next/image'
import { Menu } from 'lucide-react'




import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Navbar from './Navbar'

const Headertop = () => (
  <section className="sticky top-0 z-10 bg-[#F5F5F5]">
    <Wrapper>
      <header className="flex justify-between items-center p-4 md:p-3 mt-0">
     
        <div className="flex items-center">
          <Image src="/c1.png" alt="Logo" height={50} width={50} />
        </div>

   
        <div className="hidden md:flex gap-x-8 font-bold text-gray-800">
          <Link href="/">Home</Link>
          <Link href="/products">Find a Store</Link>
          <Link href="/help">Help</Link>
          <Link href="/join">Join Us</Link>
          {/* <Link href="/sign">Sign In</Link> */}
       
        </div>

       
        <div className="md:hidden">
          <Navbar />
        </div>
        

        {/* Mobile Navigation Sheet (Hamburger Menu) */}
        <div>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="text-9xl text-gray-800 hover:text-teal-500 transition-colors duration-300" />
            </SheetTrigger>
            <SheetContent side="left" className=" p-6  rounded-sm ">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-y-12  font-bold text-xl  text-center">
                    <Link href="/">Home</Link>
                    <Link href="/products">Find a Store</Link>
                    <Link href="/help">Help</Link>
                    <Link href="/join">Join Us</Link>
                    <Link href="/sign">Sign In</Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </Wrapper>
  </section>
)

export default Headertop

































