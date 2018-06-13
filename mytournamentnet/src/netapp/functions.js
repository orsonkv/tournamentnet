export function addPlayer (firstName, lastName, ranking, country) {
    return {
        firstName: firstName,
        lastName: lastName,
        ranking: ranking,
        country: country
    }

}



export function addPlayersToArray (obj, arr) {
    return arr = [...arr, obj];
}