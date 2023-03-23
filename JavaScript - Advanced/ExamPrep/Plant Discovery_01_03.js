function solve(input) {
    let rows = input.shift();
    let rarityMap = {};
    let ratingMap = {};
    for (let i = 0; i < rows; i++) {
        let [name, rarity, rating] = input.shift().split("<->");
        rarityMap[name] = {rarity};
        ratingMap[name] = Number(0);
    }

    while (input.length > 1) {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let plant = tokens[1];
        if (!rarityMap.hasOwnProperty(plant)) {
            console.log('error');
        } else {
            switch (command) {
                case 'Rate:':
                    let currentRating = Number(tokens[3]);
                    if (ratingMap[plant] === 0) {
                        ratingMap[plant] = Number(currentRating);
                    } else {
                        let oldRating = ratingMap[plant];
                        let newRating = (currentRating + oldRating) / 2;
                        ratingMap[plant] = Number(newRating);
                    }
                    break;
                case 'Update:':
                    let rarity = Number(tokens[3]);
                    rarityMap[plant] = {rarity};
                    break;
                case 'Reset:':
                    ratingMap[plant] = Number(0);
                    break;
            }
        }
    }
    let entries = Object.entries(rarityMap);
    let valueRatingMap = Object.values(ratingMap);
    console.log('Plants for the exhibition:')
    for (const [name, info] of entries) {
        console.log(`- ${name}; Rarity: ${Number(info.rarity)}; Rating: ${valueRatingMap.shift().toFixed(2)}`);
    }
}

solve((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)

solve((["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
)