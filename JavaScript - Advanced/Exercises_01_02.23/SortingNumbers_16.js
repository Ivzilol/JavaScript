function solve(input) {
    let arr = [...input].sort((a,b) => a-b);
    let sortedArr = [];

    while (arr.length !== 0){
        sortedArr.push(arr.shift());
        sortedArr.push(arr.pop());
    }

    return sortedArr.filter(elem => typeof elem !== "undefined");
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
solve([ 1, 2, 3 ])