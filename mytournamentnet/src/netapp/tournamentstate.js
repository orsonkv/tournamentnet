
export const stateNet = {
    players: [
        {
            countryImg: 'blr',
            firstName: 'Vasya',
            lastName: 'Ivanov',
            ranking:null,
            id: 1
             
        },
        {
            countryImg: 'itl',
            firstName: 'Marko',
            lastName: 'Paolo',
            ranking: null,
            id: 2
        },
        {
            countryImg: 'den',
            firstName: 'Peter',
            lastName: 'Gade',
            ranking: null, 
            id: 3
        },
        {
            countryImg: 'grc',
            firstName: 'Nikolos',
            lastName: 'Poopolos',
            ranking: null,
            id: 4
        }
    ],
    users: {

      

    },
    pairs: [{
        p1: 1,
        p2: 3
    }],
    winners:[],
    loosers:[]

}


// stateNet.players.forEach(p => {
//     stateNet.users[p.id] = p;
// });

// console.log(stateNet);


// stateNet.pairs.forEach(pair => {
//     alert(stateNet.users[pair.p1]);
// });

