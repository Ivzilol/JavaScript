function solve(nums) {
    const result = [];

    for(let num of nums) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}


solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);