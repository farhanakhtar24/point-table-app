import React from 'react'

const MainItemBox = (props) => {
    return (
        <div className='w-full h-full bg-main-item-box-background opacity-90 rounded-md'>
            { props.children }
        </div>
    )
}

export default MainItemBox;