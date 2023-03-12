function solve(n) {
    for (let i = 0; i < n; i++) {
        let print = '';
        for (let j = 0; j < n; j++) {
            print += n + ' ';
        }
        console.log(print);
    }
}

solve(3)
solve(7)
solve(2)