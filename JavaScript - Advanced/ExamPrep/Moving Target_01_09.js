function solve(input) {
    let targets = [];
    let inputTargets = input.shift().split(' ');
    for (let i = 0; i < inputTargets.length; i++) {
        targets.push(inputTargets[i]);
    }
    for (const data of input) {
        if (data === 'End') {
            break;
        }
        let tokens = data.split(' ');
        let commands = tokens[0];
        let index = tokens[1];
        switch (commands) {
            case 'Shoot':
                if (validIndex(targets, index)) {
                    continue;
                }
                let power = tokens[2];
                let powerCurrentTarget = Number(targets[index]);
                let damage = Number(powerCurrentTarget) - Number(power);
                if (damage <= 0) {
                    targets.splice(index, 1);
                } else {
                    targets[index] = damage;
                }
                break;
            case 'Add':
                let value = tokens[2];
                if (validIndex(targets, index)) {
                    console.log('Invalid placement!');
                    continue;
                }
                targets.splice(index, 0, value);
                break;
            case 'Strike':
                if (validIndex(targets, index)) {
                    continue;
                }
                let valueRadius = tokens[2];
                let radius = valueRadius * 2 + 1;
                if (index - valueRadius < 0 || targets.length - 1 < index - valueRadius) {
                    console.log('Strike missed!');
                    continue;
                }
                for (let i = 0; i < radius; i++) {
                    targets.splice(Number(index) - Number(valueRadius), 1);
                }
                break;
        }
    }
    console.log(targets.join('|'));

    function validIndex(targets, index) {
        return index < 0 || index > targets.length - 1;
    }
}

// solve((["52 74 23 44 96 110",
//     "Shoot 5 10",
//     "Shoot 1 80",
//     "Strike 2 1",
//     "Add 22 3",
//     "End"])
// )

solve((["1 2 3 4 5",
    "Strike 0 1",
    "End"])
)

