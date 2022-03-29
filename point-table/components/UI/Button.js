import React from 'react'

const Button = (props) => {
  return (
    <div className='flex justify-center w-full p-5 bg-slate-200 rounded-md'>{ props.children }</div>
  )
}

export default Button;