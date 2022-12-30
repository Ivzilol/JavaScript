function towns(list) {
    const result = {};

    for (const town of list) {
        const tokens = town.split(' <-> ');
        const nameTown = tokens[0];
        let population = Number(tokens[1]);
        if(result[nameTown] != undefined) {
            population += result[nameTown];
        } 
        result[nameTown] = population;
    }
    for (let [nameTown, population] of Object.entries(result)) {
        console.log(`${nameTown} : ${population}`);
    }
}

towns(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000']);

console.log('----');

towns(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000']);