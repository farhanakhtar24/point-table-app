import React from 'react'

const ActiveButton = (props) => {
    return (
        <div className='w-full p-5 rounded-md flex justify-center
        text-UI-activeButton-text border-2 bg-slate-800 
        opacity-90 uppercase'>
            { props.children }
        </div>
    )
}

export default ActiveButton;