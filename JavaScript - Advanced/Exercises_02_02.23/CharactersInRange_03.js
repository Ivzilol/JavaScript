function solve(first, second) {
    let firstChar = (first).charCodeAt(first);
    let secondChar = (second).charCodeAt(second);
    let forPrint = '';
    if (firstChar < secondChar) {
        for (let i = firstChar + 1; i < secondChar ; i++) {
            let symbol = String.fromCharCode(i);
            forPrint += symbol + ' ';
        }
    } else if (secondChar < firstChar) {
        for (let i = secondChar + 1; i < firstChar ; i++) {
            let symbol = String.fromCharCode(i);
            forPrint += symbol + ' ';
        }
    }
    console.log(forPrint)
}

solve('a',
    'd'
)
solve('#',
    ':'
)

solve('C',
    '#'
)