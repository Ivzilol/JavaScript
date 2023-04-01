function solve(input) {
    let neighborhood = [];
    let inputTargets = input.shift().split('@');
    for (let i = 0; i < inputTargets.length; i++) {
        neighborhood.push(inputTargets[i]);
    }
    let lastPosition = 0;
    for (const data of input) {
        if (data === 'Love!') {
            break;
        }
        let token = data.split(' ');
        let rangeGump = Number(token[1]);
        lastPosition += Number(rangeGump);
        if (lastPosition > neighborhood.length - 1) {
            lastPosition = 0;
        }
        if (neighborhood[lastPosition] === 0) {
            console.log(`Place ${lastPosition} already had Valentine's day.`);
            continue;
        }
        neighborhood[lastPosition] -= 2;
        if (neighborhood[lastPosition] === 0) {
            console.log(`Place ${lastPosition} has Valentine's day.`);
        }
    }
    console.log(`Cupid's last position was ${lastPosition}.`)
    let countFailed = 0;
    for (let i = 0; i < neighborhood.length; i++) {
        if (neighborhood[i] !== 0) {
            countFailed++;
        }
    }
    if (countFailed > 0) {
        console.log(`Cupid has failed ${countFailed} places.`);
    } else {
        console.log('Mission was successful.');
    }
}

// solve((["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"])
// )

solve((["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
)