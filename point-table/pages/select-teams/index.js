import React, { Fragment } from 'react'
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import AddTournamentNameDiv from '../../components/SelectTeams-AddTournamentPage/AddTournamentNameDiv';
import SelectTeams from '../../components/SelectTeams-AddTournamentPage/SelectTeams';

const selectTeamsPage = () => {
    const teams = new Set();
    return (
        <Fragment>
            <Head>
                <title>New Tournament</title>
            </Head>

            <div className='selectTeamsPageClass'>
                <Layout>
                    <div className='w-full h-full grid grid-cols-10 gap-3'>
                        <div className='col-span-3'>
                            <AddTournamentNameDiv teams={ teams } />
                        </div>
                        <div className='col-span-7'>
                            <SelectTeams teams={ teams } />
                        </div>
                    </div>
                </Layout>
            </div>
        </Fragment>
    )
}

export default selectTeamsPage;