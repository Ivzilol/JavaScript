function solve(input) {
    let arr = input.split(' ');
    let sum = 0 / Number(arr.length);
    let arrLength = 0;
    for (let i = 0; i < arr.length; i++) {
        arrLength++
        sum += Number(arr[i]);
    }
    let average = sum / arrLength;
    let forPrint = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            forPrint.push(arr[i]);
        }
    }
    forPrint.sort((left, right) => right - left);
    let count = 0;
    let finalArr = [];
    for (let i = 0; i < forPrint.length; i++) {
        finalArr.push(forPrint[i]);
        count++;
        if (count === 5) {
            break;
        }
    }
    if (finalArr.length === 0) {
        console.log('No');
    } else {
        console.log(finalArr.join(' '));
    }
}

solve('10 20 30 40 50');
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1');
solve('-1 -2 -3 -4 -5 -6');
