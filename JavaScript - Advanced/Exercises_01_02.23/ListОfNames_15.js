function solve(arr) {
    arr.sort((left, right) => left.localeCompare(right));
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        console.log(`${count}.${arr[i]}`)
    }
}

solve(["John", "Bob", "Christina", "Ema"]);