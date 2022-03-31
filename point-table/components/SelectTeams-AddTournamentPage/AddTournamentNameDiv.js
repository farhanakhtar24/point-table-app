import React, { useRef } from 'react'
import MainItemBox from '../UI/MainItemBox';
import Button from '../UI/Button';
import { useRouter } from 'next/router';
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase-config';

import useDbStructuring from '../../hooks/use-DbStructuring';

const AddTournamentNameDiv = ({ teams }) => {
    const router = useRouter();
    const tournamentNameRef = useRef('');

    // submitting team data to firebase
    const addTournamentName = async function (event) {
        event.preventDefault();

        if (tournamentNameRef.current.value.length > 0 && teams.size >= 2) {
            // converting teams set to object
            const { selectedTeamsObject, table, fixtures } = useDbStructuring(teams);

            const selectedTeamsRef = doc(db, 'tournaments', tournamentNameRef.current.value, 'tournament-collection', "selected-teams");
            const tableRef = doc(db, 'tournaments', tournamentNameRef.current.value, 'tournament-collection', "points-table");
            const fixturesRef = doc(db, 'tournaments', tournamentNameRef.current.value, 'tournament-collection', "fixtures");

            await updateDoc(doc(db, 'tournaments', 'tournamentNames'), {
                tournamentNamesDoc: arrayUnion(tournamentNameRef.current.value)
            })
            await setDoc(selectedTeamsRef, selectedTeamsObject);
            await setDoc(tableRef, table);
            await setDoc(fixturesRef, fixtures);

            router.push(`${tournamentNameRef.current.value}/table`);
        }
        else if (tournamentNameRef.current.value.length === 0 && teams.size < 2) {
            alert('Please select at least two teams & add a tournament name !!');
        }
        else if (tournamentNameRef.current.value.length === 0) {
            alert('Please enter a tournament name !!');
            console.log(teams);
        }
        else if (teams.size < 2) {
            alert('Please select at least two teams !!');
        }
    }

    return (
        <MainItemBox>
            <form className='w-full h-full flex items-center justify-center flex-col gap-3 p-10 text-text-primary' onSubmit={ addTournamentName }>
                <label className='uppercase font-semibold text-xl'>Tournament Name</label>
                <input ref={ tournamentNameRef } type='text' className='text-center rounded-lg 
                bg-main-item-box-background outline-none w-8/12focus:outline-text-primary p-5'></input>
                <button className='w-8/12 active:scale-95' ><Button>Add</Button></button>
            </form>
        </MainItemBox>
    )
}

export default AddTournamentNameDiv;