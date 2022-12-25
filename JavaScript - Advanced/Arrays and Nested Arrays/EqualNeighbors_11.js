function solve(matrix) {

   
    const rowSize = matrix.length;
    const colSize = matrix[0].length;
    let count = 0;
    let x = 0;

    for(row = 0; row < rowSize; row ++ ) {
        if (x === 1) {
            break;
        }
        for(col = 0; col < colSize; col++) {
            let currentElement = matrix[row][col];
            if(row === matrix.length - 1) {
                x += 1;
               break;
            }
            let element = matrix[row + 1][col];
            if (currentElement === element){
                count++;
            }
        }
    }
    console.log(count);
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);