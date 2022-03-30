import React from 'react'

const CurrentFixtues = () => {
    return (
        <div className='flex flex-col text-4xl m-3'>
            <div className='grid grid-cols-3'>
                <div className='flex flex-col'>
                    <div className='flex justify-center items-center px-1 py-2'>Logo</div>
                    <div className='flex justify-center items-center px-1 py-2'>Name</div>
                </div>
                <div className='flex justify-center items-center'>
                    vs
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-center items-center px-1 py-2'>Logo</div>
                    <div className='flex justify-center items-center px-1 py-2'>Name</div>
                </div>
            </div>
            <div className='grid grid-cols-3 text-center'>
                <input type='number' className='text-center rounded-lg bg-main-item-box-background outline-none' placeholder='0' />
                <div className='py-2'>-</div>
                <input type='number' className='text-center rounded-lg bg-main-item-box-background outline-none' placeholder='0' />
            </div>
        </div>
    )
}

export default CurrentFixtues;