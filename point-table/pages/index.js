import React, { Fragment, useEffect } from 'react'
import Layout from '../components/Layout/Layout';
import SelectTournamentsBox from '../components/SelectTournamentPage/SelectTournamentsBox';
import Head from 'next/head';

const index = () => {

    return (
        <Fragment>
            <Head>
                <title>Tournaments</title>
            </Head>
            <div className='selectTournamentPageCLass'>
                <Layout>
                    <SelectTournamentsBox />
                </Layout>
            </div>
        </Fragment>
    )
}

export default index;