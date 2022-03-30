import React from 'react'

const ActiveButton = (props) => {
    return (
        <div className='w-full p-5 rounded-md flex justify-center
        text-UI-activeButton-text bg-UI-activeButton-bg border-2 border-UI-activeButton-border
        opacity-90 uppercase'>
            { props.children }
        </div>
    )
}

export default ActiveButton;