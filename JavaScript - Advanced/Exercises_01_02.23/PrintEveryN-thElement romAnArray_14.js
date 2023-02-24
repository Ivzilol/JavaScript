function solve(arr, step) {
    let output = [];
    for (let i = 0; i < arr.length; i+=step) {
        output.push(arr[i]);
    }
    return output
}

solve(['5',
        '20',
        '31',
        '4',
        '20'],
    2
)

solve(['dsa',
        'asd',
        'test',
        'tset'],
    2
)

solve(['1',
        '2',
        '3',
        '4',
        '5'],
    6
)