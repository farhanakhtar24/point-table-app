import React from 'react'
import Layout from '../components/Layout/Layout';
import SelectTournamentsBox from '../components/SelectTournamentPage/SelectTournamentsBox';

const index = () => {

    return (
        <div className='selectTournamentPageCLass'>
            <Layout>
                <SelectTournamentsBox></SelectTournamentsBox>
            </Layout>
        </div>
    )
}

export default index;