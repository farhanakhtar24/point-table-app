import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Layout from '../../../components/Layout/Layout';
import MainTable from '../../../components/TableComponents/MainTable';
import ActiveButton from '../../../components/UI/ActiveButton';
import Button from '../../../components/UI/Button';
import { useRouter } from 'next/router';

import { db } from '../../../firebase/firebase-config';
import { collection, getDoc, addDoc, updateDoc, doc, deleteDoc } from '@firebase/firestore';


const tablePage = () => {
    const router = useRouter();
    const tournament = router.query.tournament;

    const [teams, setTeams] = useState([]);
    const docRef = doc(db, "tournament-1", "teams-selected");

    useEffect(() => {
        const getTeamsSelected = async function () {
            const docSnap = await getDoc(docRef);
            docSnap.data();
            setTeams(docSnap.data());
            console.log(docSnap.data());
        }
        getTeamsSelected();
    }, []);
    return (
        <div className='tablePageClass'>
            <Layout>
                <div className='grid gap-3 grid-cols-3 justify-around w-full mb-3'>
                    <Link href={ `/` }>
                        <a><Button>Tournaments</Button></a>
                    </Link>
                    <Link href={ `/${tournament}/table` }>
                        <a><ActiveButton>Points Table</ActiveButton></a>
                    </Link>
                    <Link href={ `/${tournament}/fixtures` }>
                        <a><Button>Fixtures</Button></a>
                    </Link>
                </div>
                <MainTable />
            </Layout>
        </div>
    )
}

export default tablePage;