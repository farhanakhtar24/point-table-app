import React, { Fragment } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import FixturesTable from '../../../components/FixturesTable.js/FixturesTable';
import Layout from '../../../components/Layout/Layout';
import ActiveButton from '../../../components/UI/ActiveButton';
import Button from '../../../components/UI/Button';
import Head from 'next/head';


const fixturesPage = () => {
    const router = useRouter();
    const tournament = router.query.tournament;

    return (
        <Fragment>
            <Head>
                <title>{ tournament } || Fixtures</title>
            </Head>
            < div className='fixturesPageClass' >
                <Layout>
                    <div className='grid gap-3 grid-cols-3 justify-around w-full mb-3'>
                        <Link href={ `/` }>
                            <a><Button>Tournaments</Button></a>
                        </Link>
                        <Link href={ `/${tournament}/table` }>
                            <a><Button>Points Table</Button></a>
                        </Link>
                        <Link href={ `/${tournament}/fixtures` }>
                            <a><ActiveButton>Fixtures</ActiveButton></a>
                        </Link>
                    </div>
                    <FixturesTable />
                    <div className='grid gap-3 grid-cols-2 justify-around w-full mt-3'>
                        <Button>Undo</Button>
                        <ActiveButton>Save</ActiveButton>
                    </div>
                </Layout>
            </ div>
        </Fragment>
    )
}

export default fixturesPage;