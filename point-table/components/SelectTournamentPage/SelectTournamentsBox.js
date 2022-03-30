import React, { useEffect } from 'react';
import MainItemBox from '../UI/MainItemBox';
import TournamentCard from './TournamentCard';
import Link from 'next/link';
import NewTournamentCard from './NewTournamentCard';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase-config';

const DUMMYTOURNAMENTS = [
    {
        key: 'tour-1',
        name: 'Tournament 1',
        url: '/tournament-1/table',
    },
    {
        key: 'tour-2',
        name: 'Tournament 2',
        url: '/tournament-2/table',
    },
]

const SelectTournamentsBox = () => {
    useEffect(() => {
        // const tournamentFetcher = async function () {
        //     const querySnapshot = await getDocs(collection(db, 'tournaments'));
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.id, " => ", doc.data());
        //     });
        // }
    }, [])


    return (
        <MainItemBox>
            <div className='h-full flex flex-col'>
                <div className='h1 text-center py-5'>
                    Select Tournament
                </div>
                <div className='h-full px-10 pt-5 pb-10 grid grid-cols-5 grid-rows-2 gap-10'>
                    <Link href='/select-teams'>
                        <a><NewTournamentCard /></a>
                    </Link>
                    { DUMMYTOURNAMENTS.map((tournament, index) => {
                        return (
                            <Link href={ tournament.url } key={ tournament.key }>
                                <a><TournamentCard name={ tournament.name } /></a>
                            </Link>
                        )
                    }) }
                </div>
            </div>
        </MainItemBox>
    )
}

export default SelectTournamentsBox;