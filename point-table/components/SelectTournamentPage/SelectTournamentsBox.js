import React from 'react';
import MainItemBox from '../UI/MainItemBox';

const TeamsList = [
    {
        id: 't1',
        name: 'FC Bayern',
        img: '../Assets/team-icons/fc-bayern.png',
    }
]

const SelectTournamentsBox = () => {
    return (
        <MainItemBox>
            <div className='flex flex-col'>
                <div className='h1 text-center my-5'>
                    Select Tournament
                </div>
                <div className='grid grid-cols-4 grid-rows-2'>

                </div>
            </div>
        </MainItemBox>
    )
}

export default SelectTournamentsBox;