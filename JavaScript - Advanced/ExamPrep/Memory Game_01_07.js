function solve(input) {
    let list = [];
    let inputList = input.shift().split(' ');
    for (let i = 0; i < inputList.length; i++) {
        list.push(inputList[i]);
    }
    let countMoves = 0;
    for (const data of input) {
        if (list.length === 0) {
            break;
        }
        if (data === 'end') {
            break;
        }
        countMoves++;
        let indexes = data.split(' ');
        let firsIndex = indexes[0];
        let secondIndex = indexes[1];
        if (firsIndex < 0 || firsIndex > list.length - 1 || secondIndex < 0 || secondIndex > list.length - 1 || firsIndex === secondIndex){
            let elementForAdd = `-${countMoves}a`;
            let indexForAdd = Number(list.length) / 2;
            list.splice(indexForAdd, 0, elementForAdd);
            list.splice(indexForAdd + 1, 0, elementForAdd);
            console.log('Invalid input! Adding additional elements to the board');
        } else if (list[firsIndex] === list[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${list[firsIndex]}!`);
            list.splice(firsIndex, 1);
            if (secondIndex < 1) {
                list.splice(0, 1);
            } else {
                list.splice(secondIndex - 1, 1);
            }
        } else {
            console.log("Try again!");
        }
    }
    if (list.length === 0) {
        console.log(`You have won in ${countMoves} turns!`);
    } else {
        console.log("Sorry you lose :(");
        console.log(list.join(' '));
    }
}

solve([
        "1 1 2 2 3 3 4 4 5 5",
        "1 0",
        "-1 0",
        "1 0",
        "1 0",
        "1 0",
        "end"
    ]
)

solve([
        "a 2 4 a 2 4",
        "0 3",
        "0 2",
        "0 1",
        "0 1",
        "end"
    ]
)

solve([
        "a 2 4 a 2 4",
        "4 0",
        "0 2",
        "0 1",
        "0 1",
        "end"
    ]
)