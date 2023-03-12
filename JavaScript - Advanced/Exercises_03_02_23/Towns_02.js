function solve(arr) {
    let newArr = arr.toString().split(',');
    for (let i = 0; i < newArr.length; i++) {
        let arrObj = newArr[i].split(' | ');
        const obj = {
            town:arrObj[0],
            latitude:Number(arrObj[1]).toFixed(2),
            longitude:Number(arrObj[2]).toFixed(2)
        };
        console.log(obj);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)