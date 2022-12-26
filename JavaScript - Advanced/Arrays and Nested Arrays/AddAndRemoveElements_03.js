function solve(array) {
    let newArr = [];
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        count++;
        let command = array[index];
        if(command == "add") {
            newArr.push(count);
        } else {
            newArr.pop(count);
        }
    }
    if(newArr.length == 0) {
        console.log('Empty')
    } else {
        console.log(newArr.join('\n'))
    }
}  

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);