import React from 'react'
import Link from "next/link";
import Layout from '../../components/Layout/Layout';
import MainTable from '../../components/TableComponents/MainTable';
import ActiveButton from '../../components/UI/ActiveButton';
import Button from '../../components/UI/Button';
import { useRouter } from 'next/router';

const tablePage = () => {
    const router = useRouter();
    const pathname = router.pathname.split('/')[1];
    console.log(pathname);

    return (
        <div className='tableClass'>
            <Layout>
                <div className='grid gap-3 grid-cols-2 justify-around w-full mb-3'>
                    <Link href='/table'>
                        <a><ActiveButton>Table</ActiveButton></a>
                    </Link>
                    <Link href='/fixtures'>
                        <a><Button>Fixtures</Button></a>
                    </Link>
                </div>
                <MainTable />
            </Layout>
        </div>
    )
}

export default tablePage;