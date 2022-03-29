import React from 'react'
import MainItemBox from '../UI/MainItemBox';
import TeamDiv from './TeamDiv';

const DUMMYTEAM = [
    {
        name: 'FC Bayern',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goals_against: 0,
        goals_for: 0,
        points: 9,
    },
    {
        name: 'Real Madrid',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goals_against: 0,
        goals_for: 0,
        points: 0,
    },
    {
        name: 'Manchester City',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goals_against: 0,
        goals_for: 0,
        points: 8,
    },
    {
        name: 'Liverpool',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goals_against: 0,
        goals_for: 0,
        points: 3,
    },
]

const MainTable = () => {
    DUMMYTEAM.sort((a, b) => a.points > b.points ? -1 : 1);
    return (
        <MainItemBox>
            <div className='flex flex-col'>
                <div className='h1 text-center my-5'>
                    Tournament
                </div>
                <div className='text-text-primary'>
                    <TeamDiv rank={ '' }
                        logo={ '' }
                        name={ '' }
                        played={ 'P' }
                        won={ 'W' }
                        drawn={ 'D' }
                        lost={ 'L' }
                        goals_against={ 'GA' }
                        goals_for={ 'GF' }
                        points={ 'PTS' }
                    />
                    { DUMMYTEAM.map((team, index) => {
                        return <TeamDiv
                            rank={ index + 1 + '.' }
                            logo={ 'logo' }
                            name={ team.name }
                            played={ team.played }
                            won={ team.won }
                            drawn={ team.drawn }
                            lost={ team.lost }
                            goals_against={ team.goals_against }
                            goals_for={ team.goals_for }
                            points={ team.points }
                        />;
                    }) }
                </div>
            </div>
        </MainItemBox>
    )
}

export default MainTable;