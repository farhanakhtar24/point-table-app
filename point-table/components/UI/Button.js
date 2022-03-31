import React from 'react'

const Button = (props) => {
  return (
    <div className='w-full p-5 rounded-md flex justify-center font-semibold
    bg-UI-button-bg text-slate-800 border-2 border-main-item-box-background
    opacity-90 uppercase '>
      { props.children }
    </div>
  )
}

export default Button;