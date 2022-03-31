import React from 'react'
import MainItemBox from '../UI/MainItemBox';
import TeamDiv from './TeamDiv';

const TeamsList = [
    {
        id: '1',
        name: 'FC Bayern',
        short: 'FCB',
        url: '/Assets/team-icons/fc-bayern.png',
    },
    {
        id: '2',
        name: 'FC Barcelona',
        short: 'BAR',
        url: '/Assets/team-icons/fc-barcelona.png',
    },
    {
        id: '3',
        name: 'Chelsea FC',
        short: 'CHE',
        url: '/Assets/team-icons/chelsea.png',
    },
    {
        id: '4',
        name: 'Real Madrid',
        short: 'RMD',
        url: '/Assets/team-icons/rm.png',
    },
    {
        id: '5',
        name: 'Manchester United',
        short: 'MNU',
        url: '/Assets/team-icons/man-u.png',
    },
    {
        id: '6',
        name: 'Liverpool',
        short: 'LIV',
        url: '/Assets/team-icons/liv.png',
    },
    {
        id: '7',
        name: 'Paris Saint-Germain',
        short: 'PSG',
        url: '/Assets/team-icons/psg.png',
    },
    {
        id: '8',
        name: 'Manchester City',
        short: 'MNC',
        url: '/Assets/team-icons/man-city.png',
    },
    {
        id: '9',
        name: 'Athletico Madrid',
        short: 'ATM',
        url: '/Assets/team-icons/atm.png',
    },
    {
        id: '10',
        name: 'Juventus',
        short: 'JUV',
        url: '/Assets/team-icons/juv.png',
    },
    {
        id: '11',
        name: 'Inter Milan',
        short: 'INT',
        url: '/Assets/team-icons/inter.png',
    },
    {
        id: '12',
        name: 'AC Milan',
        short: 'MIL',
        url: '/Assets/team-icons/milan.png',
    },
    {
        id: '13',
        name: 'Ajax',
        short: 'AFC',
        url: '/Assets/team-icons/ajax.png',
    },
    {
        id: '14',
        name: 'Tottenham Hotspur',
        short: 'TOT',
        url: '/Assets/team-icons/tottenham.png',
    },
    {
        id: '15',
        name: 'Arsenal',
        short: 'ARS',
        url: '/Assets/team-icons/arsenal.png',
    },
    {
        id: '16',
        name: 'FC Porto',
        short: 'FCP',
        url: '/Assets/team-icons/fc-porto.png',
    },
    {
        id: '17',
        name: 'Borussia Dortmund',
        short: 'DOR',
        url: '/Assets/team-icons/bvb.png',
    },
    {
        id: '18',
        name: 'Atalanta',
        short: 'ATA',
        url: '/Assets/team-icons/atalanta.png',
    },
    {
        id: '19',
        name: 'SL Benfica',
        short: 'SLB',
        url: '/Assets/team-icons/benfica.png',
    },
    {
        id: '20',
        name: 'RB Leipzig',
        short: 'RBL',
        url: '/Assets/team-icons/leipzig.png',
    },
    {
        id: '21',
        name: 'Olympique Lyonnais',
        short: 'OL',
        url: '/Assets/team-icons/lyon.png',
    },
    {
        id: '22',
        name: 'AS Monaco',
        short: 'ASM',
        url: '/Assets/team-icons/monaco.png',
    },
    {
        id: '23',
        name: 'Napoli',
        short: 'NAP',
        url: '/Assets/team-icons/napoli.png',
    },
    {
        id: '24',
        name: 'Sevilla',
        short: 'SEV',
        url: '/Assets/team-icons/sevilla.png',
    },
    {
        id: '25',
        name: 'Sporting CP',
        short: 'SCP',
        url: '/Assets/team-icons/sporting-cp.png',
    },
    {
        id: '26',
        name: 'Valencia',
        short: 'VAL',
        url: '/Assets/team-icons/valencia.png',
    },
    {
        id: '27',
        name: 'Villarreal',
        short: 'VIL',
        url: '/Assets/team-icons/villareal.png',
    },
    {
        id: '28',
        name: 'Wolfsburg',
        short: 'WOB',
        url: '/Assets/team-icons/wolfsburg.png',
    }
]

const SelectTeams = ({ teams }) => {
    const addTeam = function (teamData) {
        teams.add(teamData);
        console.log(teams);
    }

    const removeTeam = function (teamData) {
        teams.delete(teamData);
        console.log(teams);
    }

    return (
        <MainItemBox>
            <div className='h1 text-center py-5'>
                Select Teams
            </div>
            <div className='grid grid-cols-7 grid-rows-4 p-10 gap-2'>
                { TeamsList.map((team, index) => {
                    return <TeamDiv key={ index } teamData={ team } onAddTeam={ addTeam } onRemoveTeam={ removeTeam } />
                }) }
            </div>
        </MainItemBox>
    )
}
export default SelectTeams;