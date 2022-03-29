import React from 'react'

const ActiveButton = (props) => {
    return (
        <div className='flex justify-center w-full p-5 bg-slate-700 rounded-md'>{ props.children }</div>
    )
}

export default ActiveButton;