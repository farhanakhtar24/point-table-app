import React from 'react'

const MainItemBox = (props) => {
    return (
        <div className='w-full h-full overflow-hidden bg-main-item-box-background bg-opacity-90 rounded-md'>
            { props.children }
        </div>
    )
}

export default MainItemBox;