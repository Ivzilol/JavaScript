function solve(n) {
    let sum = 0

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    if (n === sum) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

solve(6)
solve(28)
solve(1236498)

