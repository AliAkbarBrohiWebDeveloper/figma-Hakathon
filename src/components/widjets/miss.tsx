// import Image from 'next/image'
// import React from 'react'
// import Wrapper from '../shareable/Wrapper'
// import Button from '../shareable/Button'

// const EssanImages = [
//   {
//     id: 1,
//     src: "/e1.png",
//   },
//   {
//     id: 2,
//     src: "/e2.png",
//   },
//   {
//     id: 3,
//     src: "/e3.png",
//   },
// ]

// const Miss = () => {
//   return (
//     <Wrapper>
//     <section className='mt-20'>
//       <div className='font-bold'>
//         Donot Miss
//       </div>

//       <main
//         className='mt-9  md:h-[700px] h-[300px] w-auto'
//         style={{
//           backgroundImage: 'url(/m1.png)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           // height: '700px',
//           // width: '100%',
//         }}
//       >
        
//       </main>

//       <div className='text-center mt-10'>
//         <h3 className='text-2xl font-bold'>FLIGHT ESSENTIALS</h3>
//         <p className='max-w-xl mx-auto'>
//           Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
//         </p>
//         <Button text='Shop'/>
//       </div>

//       <div className=' mt-8'>
//         <h3 className='text-xl font-bold'>The Essentials</h3>
//       </div>

      
//       <div className='flex flex-col md:flex-row justify-center gap-6 mt-4'>
//         {EssanImages.map((item) => (
//           <div key={item.id} className='flex flex-col items-center'>
//             <Image
//               src={item.src}
//               alt=''
//               height={540}
//               width={440}
//               className='rounded-lg'
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//     </Wrapper>
//   )
// }

// export default Miss































import Image from 'next/image'
import React from 'react'
import Wrapper from '../shareable/Wrapper'
import Button from '../shareable/Button'

const EssanImages = [
  {
    id: 1,
    src: "/e1.png",
  },
  {
    id: 2,
    src: "/e2.png",
  },
  {
    id: 3,
    src: "/e3.png",
  },
]

const Miss = () => {
  return (
    <Wrapper>
      <section className="mt-20">
        <div className="font-bold">
          Don’t Miss
        </div>

      
        <div className="relative mt-9 w-full md:h-[700px] h-[300px]">
          <Image
            src="/m1.png" 
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg"
          />
        </div>

        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold">FLIGHT ESSENTIALS</h3>
          <p className="max-w-xl mx-auto">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <Button text="Shop" />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">The Essentials</h3>
        </div>

      
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
          {EssanImages.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Image
                src={item.src}
                alt={`Essentials Image ${item.id}`}
                height={540}
                width={440}
                className="rounded-lg"
                layout="responsive" 
              />
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  )
}

export default Miss



