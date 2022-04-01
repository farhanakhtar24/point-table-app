import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const Button = (props) => {
  return (
    <div className='w-full p-5 rounded-md flex justify-center items-center gap-1  font-semibold
    bg-UI-button-bg text-slate-800 border-2 border-main-item-box-background
    opacity-90 uppercase '>
      { props.isLoading && <ImSpinner2 className='animate-spin' /> }
      { props.children }
    </div>
  )
}

export default Button;