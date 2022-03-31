import React, { useRef } from 'react'
import MainItemBox from '../UI/MainItemBox';
import Button from '../UI/Button';
import { useRouter } from 'next/router';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase-config';

const dbStructuring = function (teams) {
    const selectedTeamsObject = {};
    const table = {};
    const fixtures = {};

    /*
    {
        id: 'fixture-1',
        homeTeam: 'MUN',
        awayTeam: 'LIV',
    },
     */

    //Selected teams objects structure 
    [...teams].forEach(team => {
        selectedTeamsObject[team.short] = team;
    });

    //Table structure 
    [...teams].forEach(team => {
        table[team.name] = {
            id: team.id,
            name: team.name,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goals_against: 0,
            goals_for: 0,
            points: 0,
        };
    });
    //Fixtures structure 


    return { selectedTeamsObject, table };
}

const AddTournamentNameDiv = ({ teams }) => {
    const router = useRouter();
    const tournamentName = useRef('');

    // submitting team data to firebase
    const addTournamentName = async function (event) {
        event.preventDefault();

        if (tournamentName.current.value.length > 0 && teams.size > 0) {
            // converting teams set to object
            const { selectedTeamsObject, table } = dbStructuring(teams);

            await setDoc(doc(db, tournamentName.current.value, "selected-teams"), selectedTeamsObject);
            await setDoc(doc(db, tournamentName.current.value, "points-table"), table);
            router.push(`${tournamentName.current.value}/table`);
        }
        else if (tournamentName.current.value.length === 0 && teams.size === 0) {
            alert('Please select at least one team & add a tournament name');
        }
        else if (tournamentName.current.value.length === 0) {
            alert('Please enter a tournament name');
            console.log(teams);
        }
        else if (teams.size === 0) {
            alert('Please select at least one team');
        }
    }

    return (
        <MainItemBox>
            <form className='w-full h-full flex items-center justify-center flex-col gap-3 p-10 text-text-primary' onSubmit={ addTournamentName }>
                <label className='uppercase font-semibold text-xl'>Tournament Name</label>
                <input ref={ tournamentName } type='text' className='text-center rounded-lg 
                bg-main-item-box-background outline-none w-8/12focus:outline-text-primary p-5'></input>
                <button className='w-8/12 active:scale-95' ><Button>Add</Button></button>
            </form>
        </MainItemBox>
    )
}

export default AddTournamentNameDiv;