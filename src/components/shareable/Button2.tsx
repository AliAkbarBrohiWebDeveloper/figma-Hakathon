import React, { FC } from 'react'

const Button2:FC<{text:string}> = ({text}) => {
  return (
    <div>
        
        <button  className='py-2 px-6 rounded-2xl border-2 white mt-6> mt-6 '>{text}</button>
        
        </div>
    
  )
}
export default Button2