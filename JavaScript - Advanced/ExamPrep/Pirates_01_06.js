function solve(input) {
    let peopleMap = {};
    let goldMap = {};
    while (true) {
        let data = input.shift();
        if (data === 'Sail') {
            break;
        }
        let tokens = data.split('||');
        let town = tokens[0];
        let population = tokens[1];
        let gold = tokens[2];
        if (peopleMap.hasOwnProperty(town)) {
            let oldQuantityPeople = peopleMap[town];
            peopleMap[town] = Number(population) + Number(oldQuantityPeople);
            let oldQuantityGold = goldMap[town];
            goldMap[town] = Number(gold) + Number(oldQuantityGold);
        } else {
            peopleMap[town] = Number(population);
            goldMap[town] = Number(gold);
        }
    }

    while (true) {
        let data = input.shift();
        if (data === 'End') {
            break;
        }
        let tokens = data.split('=>');
        let command = tokens[0];
        let town = tokens[1];
        switch (command) {
            case 'Plunder':
                let killPeople = tokens[2];
                let stealingGold = tokens[3];
                let oldContPeople = peopleMap[town];
                let oldQuantityGold = goldMap[town];
                let newCountPeople = Number(oldContPeople) - Number(killPeople);
                let newQuantityGold = Number(oldQuantityGold) - Number(stealingGold);
                if (newCountPeople > 0 && newQuantityGold > 0) {
                    peopleMap[town] = newCountPeople;
                    goldMap[town] = newQuantityGold;
                    console.log(`${town} plundered! ${stealingGold} gold stolen, ${killPeople} citizens killed.`);
                } else {
                    console.log(`${town} plundered! ${stealingGold} gold stolen, ${killPeople} citizens killed.`);
                    delete peopleMap[town];
                    delete goldMap[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;
            case 'Prosper':
                let increaseGold = tokens[2];
                if (increaseGold < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    let currentGold = goldMap[town];
                    goldMap[town] = Number(increaseGold) + Number(currentGold);
                    console.log(`${increaseGold} gold added to the city treasury. ${town} now has ${goldMap[town]} gold.`);

                }
                break;
        }
    }
    let countCity = Object.keys(peopleMap).length;
    if (countCity === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${countCity} wealthy settlements to go to:`);
        let entriesPeopleMap = Object.entries(peopleMap);
        let valuesGoldMap = Object.values(goldMap);
        for (const [town, people] of entriesPeopleMap) {
            console.log(`${town} -> Population: ${people} citizens, Gold: ${valuesGoldMap.shift()} kg`);
        }
    }
}

solve((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
)

solve((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
)

