function solve(n1, n2) {
    let result1 = factorial(n1);
    let result2 = factorial(n2);

    function factorial(num) {
        if (num === 1) {
            return 1;
        }

        return num * factorial(num - 1);
    }

    console.log(`${(result1 / result2).toFixed(2)}`);
}