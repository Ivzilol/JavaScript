function solve(input) {
    let shoppingList = [];
    let productsList = input.shift().split('!');
    for (let i = 0; i < productsList.length; i++) {
        shoppingList.push(productsList[i]);
    }
    let count = 0;
    for (const data of input){
        let line = input[count];
        if (line === 'Go Shopping!') {
            break
        }
        let tokens = line.split(' ');
        let command = tokens[0];
        switch (command){
            case 'Urgent':
                let itemUrgent = tokens[1];
                if (!shoppingList.includes(itemUrgent)) {
                     shoppingList.unshift(itemUrgent);
                }
                break;
            case 'Unnecessary':
                let unnecessaryItem = tokens[1];
                if (shoppingList.includes(unnecessaryItem)) {
                    let indexItem = shoppingList.indexOf(unnecessaryItem);
                    shoppingList.splice(indexItem, 1);
                }
                break;
            case 'Correct':
                let oldItem = tokens[1];
                let newItem = tokens[2];
                if (shoppingList.includes(oldItem)) {
                    let indexOldItem = shoppingList.indexOf(oldItem);
                    shoppingList.splice(indexOldItem, 1, newItem);

                }
                break;
            case 'Rearrange':
                let rearrangeItem = tokens[1];
                if (shoppingList.includes(rearrangeItem)) {
                    let indexItem = shoppingList.indexOf(rearrangeItem);
                    shoppingList.splice(indexItem, 1);
                    shoppingList.push(rearrangeItem);
                }
                break;
        }
        count++;
    }
    console.log(shoppingList.join(', '));
}

solve((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
)

solve((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)