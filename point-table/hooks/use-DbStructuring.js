import React from 'react'

const useDbStructuring = function (teams) {
    const selectedTeamsObject = {};
    const table = {};
    const fixtures = {};

    //Selected teams objects structure 
    [...teams].forEach(team => {
        selectedTeamsObject[team.short] = team;
    });

    //Table structure 
    [...teams].forEach(team => {
        table[team.name] = {
            id: team.id,
            name: team.name,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goals_against: 0,
            goals_for: 0,
            points: 0,
        };
    });

    //Fixtures structure 
    const tempTeam = [...teams];
    let index = 1;
    for (let i = 0; i < tempTeam.length; i++) {
        for (let j = i + 1; j < tempTeam.length; j++, index++) {
            fixtures[index] = {
                id: tempTeam[i].short + ' vs ' + tempTeam[j].short,
                homeTeam: tempTeam[i].short,
                awayTeam: tempTeam[j].short,
                homeTeamScore: null,
                awayTeamScore: null,
            }
        }
    }

    return { selectedTeamsObject, table, fixtures };
}

export default useDbStructuring;