import React, { useState } from 'react'
import Image from 'next/image';

const TeamDiv = ({ teamData, onAddTeam, onRemoveTeam }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectionClick = () => {
        setIsSelected(!isSelected);
        if (isSelected !== true) {
            onAddTeam(teamData);
        } else if (isSelected === true) {
            onRemoveTeam(teamData);
        }
    }

    return (
        <div onClick={ handleSelectionClick }
            className={ `w-full h-full p-2  rounded flex flex-col justify-center items-center cursor-pointer
        ${isSelected ? 'border-2 border-UI-button-text bg-slate-500/40' : 'bg-slate-50/40'}` }>
            <Image src={ teamData.url } width={ 500 } height={ 500 } />
        </div>
    )
}

export default TeamDiv;