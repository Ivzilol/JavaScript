function solve(numbers) {
    numbers.sort((a, b) => a - b);

    const result = [];

    for (let index = Math.floor(numbers.length / 2); index < numbers.length; index++) {
        result.push(numbers[index]);
    }
   return result;
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));