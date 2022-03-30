import React from 'react'
import MainItemBox from '../UI/MainItemBox';
import CurrentFixtues from './CurrentFixtues';
import FixturesDiv from './FixturesDiv';

const MATCH_LIST = [
    {
        id: 'fixture-1',
        homeTeam: 'MUN',
        awayTeam: 'LIV',
    },
    {
        id: 'fixture-2',
        homeTeam: 'MUN',
        awayTeam: 'LIV',
    },
    {
        id: 'fixture-3',
        homeTeam: 'MUN',
        awayTeam: 'LIV',
    },
    {
        id: 'fixture-4',
        homeTeam: 'MUN',
        awayTeam: 'LIV',
    }
    ,
    {
        id: 'fixture-5',
        homeTeam: 'MUN',
        awayTeam: 'LIV',
    }
    ,
    {
        id: 'fixture-6',
        homeTeam: 'MUN',
        awayTeam: 'LIV',
    }
]

const FixturesTable = () => {
    return (
        <MainItemBox>
            <div className='flex flex-col'>
                <div className='h1 text-center py-5'>
                    Scores & Fixtures
                </div>
                <div className='grid grid-cols-2 gap-5 text-text-primary'>
                    <form>
                        <CurrentFixtues />
                    </form>
                    <div className='fixtures'>
                        { MATCH_LIST.map((match) => {
                            return (
                                <FixturesDiv
                                    key={ match.id }
                                    homeTeam={ match.homeTeam }
                                    awayTeam={ match.awayTeam }
                                />
                            )
                        }) }
                    </div>
                </div>
            </div>
        </MainItemBox>
    )
}

export default FixturesTable;