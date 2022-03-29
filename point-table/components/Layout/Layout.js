import React from 'react'

const Layout = (props) => {
    return (
        <div className='w-full h-full px-32 py-14 text-white flex flex-col'>
            { props.children }
        </div >
    )
}

export default Layout;