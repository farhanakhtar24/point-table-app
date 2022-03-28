import React from 'react'

const Layout = (props) => {
    return (
        <div className='bg-world-cup bg-cover bg-no-repeat bg-center h-screen w-screen' >
            <div className='w-full h-full px-32 py-14 text-white'>
                { props.children }
            </div >
        </div>
    )
}

export default Layout;