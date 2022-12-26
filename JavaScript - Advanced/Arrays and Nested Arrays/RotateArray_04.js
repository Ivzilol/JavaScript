function solve (array, rotation) {
    for (let index = 0; index < rotation; index++) {
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2
);
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);