import React, { useEffect, useState } from 'react';
import MainItemBox from '../UI/MainItemBox';
import TournamentCard from './TournamentCard';
import Link from 'next/link';
import NewTournamentCard from './NewTournamentCard';
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from '../../firebase/firebase-config';
import { ImSpinner2 } from 'react-icons/im';



const SelectTournamentsBox = () => {
    const [isLoading, setIsloading] = useState(true);

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
            setIsloading(false);
        }
        tournamentNamesfetcher();
    }, [])

    return (
        <MainItemBox>
            <div className='h-full flex flex-col'>
                <div className='h1 text-center py-5'>
                    Select Tournament
                </div>
                { isLoading &&
                    <div className='w-full h-full flex justify-center items-center'>
                        <ImSpinner2 className='text-text-primary animate-spin w-14 h-14' />
                    </div>
                }
                { !isLoading &&
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
                }
            </div>
        </MainItemBox>
    )
}

export default SelectTournamentsBox;