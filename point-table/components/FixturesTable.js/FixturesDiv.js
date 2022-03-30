import React from 'react'


const FixturesDiv = (props) => {
    return (
        <div className='grid grid-cols-3 gap-5 text-center text-4xl m-3'>
            <div className='grid grid-cols-2'>
                <div className='px-1 py-2'>Logo</div>
                <div className='px-1 py-2'>{ props.homeTeam }</div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='px-1 py-2'>0</div>
                <div className='py-2'>-</div>
                <div className='px-1 py-2'>0</div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='px-1 py-2'>{ props.awayTeam }</div>
                <div className='px-1 py-2'>Logo</div>
            </div>
        </div>
    )
}

export default FixturesDiv;