function solve(input) {
    let obj = {};
    const arr = [];
    for (const data of input) {
        let currentHero = data.toString().split(' / ');
        obj = {
            Hero: currentHero[0],
            level: currentHero[1],
            items: currentHero[2]
        }
        arr.push(obj);
    }
    arr.sort((left, right) => left.level - right.level);
    for (let i = 0; i < arr.length; i++) {
        let currentObj = arr[i];
        console.log(`Hero: ${currentObj.Hero}`)
        console.log(`level => ${currentObj.level}`)
        console.log(`items => ${currentObj.items}`)
    }
}

solve([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)

solve([
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
    ]
)