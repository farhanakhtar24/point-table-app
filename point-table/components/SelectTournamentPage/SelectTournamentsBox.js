import React, { useEffect, useState } from 'react';
import MainItemBox from '../UI/MainItemBox';
import TournamentCard from './TournamentCard';
import Link from 'next/link';
import NewTournamentCard from './NewTournamentCard';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase-config';


const SelectTournamentsBox = () => {
    const [DUMMYTOURNAMENTS, setDUMMYTOURNAMENTS] = useState([]);
    const randomArray = [];
    useEffect(() => {
        const tournamentNamesfetcher = async function () {
            const docRef = doc(db, "tournaments", "tournamentNames");
            const docSnap = await getDoc(docRef);
            const { tournamentNamesDoc } = docSnap.data()
            tournamentNamesDoc.forEach((element, index) => {
                randomArray.push({
                    key: `tour-${index + 1}`,
                    name: element,
                    url: `/${element}/table`
                })
            });
            setDUMMYTOURNAMENTS(randomArray);
        }
        tournamentNamesfetcher();
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