import React from 'react'

const TournamentCard = (props) => {
    return (
        <div className='w-full h-full bg-slate-800 opacity-80 rounded-md text-xl flex justify-center items-center'>
            { props.name }
        </div>
    )
}

export default TournamentCard;