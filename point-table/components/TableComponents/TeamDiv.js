import React from 'react';

const TeamDiv = (props) => {
    let divColor = '';
    if (props.rank.split('.')[0] % 2 !== 0) {
        divColor = 'bg-gray-400';
    }

    return (
        <div className={ `grid grid-cols-2 text-center text-lg font-semibold ${divColor}` }>
            <div className='flex'>
                <div className='grid grid-cols-2'>
                    <div className='px-1 py-1'>{ props.rank }</div>
                    <div className='px-1 py-1'>{ props.logo }</div>
                </div>
                <div className='flex-grow flex justify-start px-2 py-1'>{ props.name }</div>
            </div>
            <div className='grid grid-cols-7'>
                <div className='px-2 py-1'>{ props.played }</div>
                <div className='px-2 py-1'>{ props.won }</div>
                <div className='px-2 py-1'>{ props.drawn }</div>
                <div className='px-2 py-1'>{ props.lost }</div>
                <div className='px-2 py-1'>{ props.goals_for }</div>
                <div className='px-2 py-1'>{ props.goals_against }</div>
                <div className='px-2 py-1 font-bold'>{ props.points }</div>
            </div>
        </div>
    )
}

export default TeamDiv;