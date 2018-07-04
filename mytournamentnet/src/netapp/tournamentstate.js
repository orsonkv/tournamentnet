
export const stateNet = {
    players: [
        {
            countryImg: 'blr',
            firstName: 'Vasya',
            lastName: 'Ivanov',
            ranking: 1921,
            id: 1

        },
        {
            countryImg: 'itl',
            firstName: 'Marko',
            lastName: 'Paolo',
            ranking: 3300,
            id: 2
        },
        {
            countryImg: 'den',
            firstName: 'Peter',
            lastName: 'Gade',
            ranking: 750,
            id: 3
        },
        {
            countryImg: 'grc',
            firstName: 'Nikolos',
            lastName: 'Poopolos',
            ranking: 6500,
            id: 4
        },
        {
            countryImg: 'blr',
            firstName: 'Vasya',
            lastName: 'Fedorov',
            ranking: 1921,
            id: 5

        },
        {
            countryImg: 'eng',
            firstName: 'David',
            lastName: 'Braun',
            ranking: 3300,
            id: 6
        },
        {
            countryImg: 'ger',
            firstName: 'Fridrich',
            lastName: 'Danke',
            ranking: 750,
            id: 7
        },
        {
            countryImg: 'spa',
            firstName: 'Pablo',
            lastName: 'Abian',
            ranking: 6500,
            id: 8
        },
        {
            countryImg: 'spa',
            firstName: 'Pablo',
            lastName: 'Abian',
            ranking: 6500,
            id: 8
        }

    ],
    tours: [],


    pairs: [],
    winners: [],
    loosers: [],
    users: {}

}

stateNet.tours.unshift(stateNet.players);

stateNet.players.forEach(p => {
    stateNet.users[p.id] = p;
});

stateNet.tours = [[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6,  8], [2, 4, 6, 7, 2, 4, 6, 7], [4, 7, 4, 7]];
stateNet.tours.length = 6;

debugger;
console.log(stateNet.tours);


// stateNet.pairs.forEach(pair => {
//     alert(stateNet.users[pair.p1]);
// });

