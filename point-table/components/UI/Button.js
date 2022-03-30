import React from 'react'

const Button = (props) => {
  return (
    <div className='w-full p-5 rounded-md flex justify-center font-semibold
    bg-UI-button-bg text-UI-button-text border-2 border-UI-button-bg
    opacity-90 uppercase'>
      { props.children }
    </div>
  )
}

export default Button;