import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import MainItemBox from '../UI/MainItemBox';
import TeamDiv from './TeamDiv';
import { useRouter } from 'next/router';
import { db } from '../../firebase/firebase-config';
import { ImSpinner2 } from 'react-icons/im';

const MainTable = () => {
    const router = useRouter();
    const tournamentName = router.query.tournament;

    const [isLoading, setIsloading] = useState(true);

    const randomArray = [];
    const [DUMMYTEAM, setDUMMYTEAM] = useState([]);

    useEffect(() => {
        const tournamentfetcher = async function () {
            const pointTable = await getDoc(doc(db, `${tournamentName}`, "points-table"));
            // const selectedTeams = await getDoc(doc(db, `${tournamentName}`, "selected-teams"));
            if (pointTable.exists()) {
                for (const [key, value] of Object.entries(pointTable.data())) {
                    randomArray.push(value);
                }
                // const selectedTeams = await getDoc(doc(db, `${tournamentName}`, "selected-teams"));
                // for (const [key, value] of Object.entries(selectedTeams.data())) {
                // }

            }

            setDUMMYTEAM(randomArray);
            setIsloading(false);
        }
        tournamentfetcher()
    }, [tournamentName])

    DUMMYTEAM.sort((a, b) => a.points > b.points ? -1 : 1);
    return (
        <MainItemBox>
            <div className='flex flex-col w-full h-full'>
                <div className='h1 text-center my-5'>
                    Tournament
                </div>
                { isLoading &&
                    <div className='w-full h-full flex justify-center items-center'>
                        <ImSpinner2 className='text-text-primary animate-spin w-14 h-14' />
                    </div>
                }
                { !isLoading &&
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
                                key={ team.id }
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
                }
            </div>
        </MainItemBox>
    )
}

export default MainTable;





















