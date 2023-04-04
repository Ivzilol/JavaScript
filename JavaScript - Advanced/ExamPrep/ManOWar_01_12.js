function solve(input) {
    let pirateShip = [];
    let warShip = [];
    let inputPirateShip = input.shift().split('>');
    for (let i = 0; i < inputPirateShip.length; i++) {
        pirateShip.push(inputPirateShip[i]);
    }
    let inputWarShip = input.shift().split('>');
    for (let i = 0; i < inputWarShip.length; i++) {
        warShip.push(inputWarShip[i]);
    }
    let maxHealth = input.shift();

    for (const data of input) {
        if (data === 'Retire') {
            break;
        }
        let tokens = data.split(' ');
        let command = tokens[0];
        let index = tokens[1];
        switch (command) {
            case 'Fire':
                let damage = tokens[2];
                if (index < 0 || index >= warShip.length) {
                    continue;
                }
                let damageWarShip = Number(warShip[index]) - Number(damage);
                if (damageWarShip <= 0) {
                    console.log('You won! The enemy ship has sunken.')
                    return;
                } else {
                    warShip[index] -= damage;
                }
                break;
            case 'Defend':
                let endIndex = tokens[2];
                let damagePirateShip = tokens[3];
                if (index < 0 || index >= pirateShip.length || endIndex < 0 || endIndex >= pirateShip.length) {
                    continue;
                }
                for (let i = index; i <= endIndex; i++) {
                    pirateShip[i] -= damagePirateShip;
                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
                break;
            case 'Repair':
                let repairHealth = tokens[2];
                pirateShip[index] += Number(repairHealth);
                if (pirateShip[index] > maxHealth) {
                    pirateShip[index] = maxHealth;
                }
                break;
            case 'Status':
                let percent = maxHealth * 0.20;
                let count = 0;
                for (let i = 0; i < pirateShip.length; i++) {
                    if (pirateShip[i] < percent) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
        }
    }
    let statusPirateShip = 0;
    for (let i = 0; i < pirateShip.length; i++) {
        statusPirateShip += Number(pirateShip[i]);
    }
    let statusWarShip = 0
    for (let i = 0; i < warShip.length; i++) {
        statusWarShip += Number(warShip[i]);
    }
    console.log(`Pirate ship status: ${statusPirateShip}`);
    console.log(`Warship status: ${statusWarShip}`);


}

// solve((["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"])
// )

solve((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
)