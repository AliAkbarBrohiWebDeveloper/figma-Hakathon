// import Link from 'next/link'
// import React from 'react'
// import Wrapper from '../shareable/Wrapper'
// import Image from 'next/image'


// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import { Menu } from 'lucide-react'

// import Navbar from './Navbar'



// const Headertop = () => (

//   <section className='sticky top-0  z-10' >
//   <Wrapper>
//     <header className='flex justify-between items-center gap-x-9 bg-[#F5F5F5] mt-6 '>

//       <div>

//         <Image src={'/c1.png'} alt='' height={50} width={50} />

//       </div>

//       <div className='  gap-x-10 hidden md:flex font-bold md:ml-[700px]'>

//         <Link href={'/'}></Link>



//         <Link href={'products'}>Find a Store |</Link>




//         <Link href={'help'}>Help |</Link>


//         <Link href={'/join'}>Join Us |</Link>


//         <Link href={'/sign'}>Sign In |</Link>


//       </div>

//       {/* <div className="relative w-64  md:hidden sm:block">
//         <input
//           type="text"

//           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg" />
//         <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl " />
//       </div> */}
//       {/* <div className='md:hidden'>
//         <Link href={'/Cart'}><BiCart className='text-3xl font-bold' /></Link>


//       </div> */}

//       <div className='md:hidden'>

//         <Navbar/>
//       </div>



//       <div>


//         <Sheet>
//           <SheetTrigger className='md:hidden'><Menu /></SheetTrigger>
//           <SheetContent  side="left" className="bg-gray-900 text-white" >
//             <SheetHeader>
//               <SheetTitle></SheetTitle>
//               <SheetDescription>
//                 <div className='flex flex-col gap-y-6 text-sm  py-6 font-bold  text-white' >

//                   <Link href={'/'}></Link>


//                   <Link href={'/'}>New & Featured</Link>
//                   <Link href={'products'}>Find a Store</Link>

//                   <Link href={'help'}>Help</Link>


//                   <Link href={'/join'}>Join Us</Link>


//                   <Link href={'/sign'}>Sign In</Link>





//                 </div>
//               </SheetDescription>
//             </SheetHeader>
//           </SheetContent>
//         </Sheet>



//       </div>


//     </header>
//   </Wrapper>
//   </section>
// )

// export default Headertop




















// // import Link from 'next/link'
// // import React from 'react'
// // import Wrapper from '../shareable/Wrapper'
// // import Image from 'next/image'
// // import { Menu } from 'lucide-react'

// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetDescription,
// //   SheetHeader,
// //   SheetTitle,
// //   SheetTrigger,
// // } from "@/components/ui/sheet"

// // import Navbar from './Navbar'

// // const Headertop = () => (
// //   <Wrapper>
// //     <header className="flex justify-between items-center px-6 py-4 md:bg-[#F5F5F5] mt-6">
// //       {/* Logo Section */}
// //       <div className="flex items-center">
// //         <Image src={'/c1.png'} alt="Logo" height={50} width={50} />
// //       </div>

// //       {/* Desktop Navigation */}
// //       <div className="hidden md:flex items-center gap-x-8 font-bold text-gray-800">
// //         <Link href={'/'} className="hover:text-teal-500 transition-colors duration-300">Home</Link>
// //         <Link href={'/products'} className="hover:text-teal-500 transition-colors duration-300">Find a Store</Link>
// //         <Link href={'/help'} className="hover:text-teal-500 transition-colors duration-300">Help</Link>
// //         <Link href={'/join'} className="hover:text-teal-500 transition-colors duration-300">Join Us</Link>
// //         <Link href={'/sign'} className="hover:text-teal-500 transition-colors duration-300">Sign In</Link>
// //       </div>

// //       {/* Mobile Menu Button */}
// //       <div className="md:hidden">
// //         <Navbar />
// //       </div>

// //       {/* Mobile Navigation - Sheet */}
// //       <div>
// //         <Sheet>
// //           <SheetTrigger className="md:hidden">
// //             <Menu className="text-2xl text-gray-800 hover:text-teal-500 transition-colors duration-300" />
// //           </SheetTrigger>
// //           <SheetContent side="left" className="bg-black p-6 text-white">
// //             <SheetHeader>
// //               <SheetTitle></SheetTitle>
// //               <SheetDescription>
// //                 <div className="flex flex-col gap-y-6 text-xl font-bold text-white">
// //                   <Link href={'/'} className="hover:text-teal-500">Home</Link>
// //                   <Link href={'/products'} className="hover:text-teal-500">Find a Store</Link>
// //                   <Link href={'/help'} className="hover:text-teal-500">Help</Link>
// //                   <Link href={'/join'} className="hover:text-teal-500">Join Us</Link>
// //                   <Link href={'/sign'} className="hover:text-teal-500">Sign In</Link>
// //                 </div>
// //               </SheetDescription>
// //             </SheetHeader>
// //           </SheetContent>
// //         </Sheet>
// //       </div>
// //     </header>
// //   </Wrapper>
// // )

// // export default Headertop
































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
      <header className="flex justify-between items-center p-4 md:p-3 mt-1">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src="/c1.png" alt="Logo" height={50} width={50} />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-x-8 font-bold text-gray-800">
          <Link href="/">Home</Link>
          <Link href="/products">Find a Store</Link>
          <Link href="/help">Help</Link>
          <Link href="/join">Join Us</Link>
          <Link href="/sign">Sign In</Link>
        </div>

        {/* Mobile Navigation Icon (Navbar) */}
        <div className="md:hidden">
          <Navbar />
        </div>

        {/* Mobile Navigation Sheet (Hamburger Menu) */}
        <div>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="text-2xl text-gray-800 hover:text-teal-500 transition-colors duration-300" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-black p-6 text-white">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-y-6 text-xl font-bold text-white">
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

































