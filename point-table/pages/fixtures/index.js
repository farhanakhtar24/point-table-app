import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import FixturesTable from '../../components/FixturesTable.js/FixturesTable';
import Layout from '../../components/Layout/Layout';
import ActiveButton from '../../components/UI/ActiveButton';
import Button from '../../components/UI/Button';

const fixturesPage = () => {
    const router = useRouter();
    const pathname = router.pathname.split('/')[1];
    console.log(pathname);

    return (
        <div className='tableClass'>
            <Layout>
                <div className='grid gap-3 grid-cols-2 justify-around w-full mb-3'>
                    <Link href='/table'>
                        <a><Button>Table</Button></a>
                    </Link>
                    <Link href='/fixtures'>
                        <a><ActiveButton>Fixtures</ActiveButton></a>
                    </Link>
                </div>
                <FixturesTable />
            </Layout>
        </div>
    )
}

export default fixturesPage;