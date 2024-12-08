import Link from 'next/link'
import React from 'react'
import Wrapper from '../shareable/Wrapper'


const Headertop = () => {
  return (
    <Wrapper>
    <header className='flex justify-end items-center gap-x-6 font-sm'>

<div >

<Link href={'/'}></Link>


</div>
<div>
    <Link href={'products'}>Find a Store |</Link>


</div>
<div>

  <Link href={'help'}>Help |</Link>

</div>
<div>
  <Link href={'/join'}>Join Us |</Link>

</div>
<div>
    <Link href={'/sign'}>Sign In |</Link>
</div>


    </header>
    </Wrapper>
  )
}

export default Headertop