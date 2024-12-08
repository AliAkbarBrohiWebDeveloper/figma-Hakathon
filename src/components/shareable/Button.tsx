import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
  return (
    <div>
        
        <button  className='py-2 px-6 rounded-2xl border-2 white mt-6> mt-6 bg-black hover:scale-105 duration-300 text-white'>{text}</button>
        
        </div>
    
  )
}
export default Button