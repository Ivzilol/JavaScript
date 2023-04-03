function solve(input) {
    let items = [];
    let inputTargets = input.shift().split(', ');
    for (let i = 0; i < inputTargets.length; i++) {
        items.push(inputTargets[i]);
    }
    for (const data of input) {
        if (data === 'Craft!'){
            break;
        }
        let tokens = data.split(' - ');
        let commands = tokens[0];
        switch (commands) {
            case 'Collect':
                let collectItem = tokens[1];
                if (!items.includes(collectItem)) {
                    items.push(collectItem);
                }
                break;
            case 'Drop':
                let dropItem = tokens[1];
                if (items.includes(dropItem)) {
                    let index = items.indexOf(dropItem);
                    items.splice(index, 1);
                }
                break;
            case 'Combine Items':
                let tokensCombineItem = tokens[1].split(':');
                let oldItem = tokensCombineItem[0];
                let newItem = tokensCombineItem[1];
                if (items.includes(oldItem)) {
                    let indexOldItem = items.indexOf(oldItem);
                    items.splice(indexOldItem + 1, 0, newItem);
                }
                break;
            case 'Renew':
                let renewItem = tokens[1];
                if (items.includes(renewItem)) {
                    let indexRenewItem = items[renewItem];
                    items.splice(indexRenewItem, 1);
                    items.push(renewItem);
                }
                break;
        }
    }
    console.log(items.join(', '));

}

solve([
        'Iron, Wood, Sword',
        'Collect - Gold',
        'Drop - Wood',
        'Craft!'
    ]
)

solve([
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'
    ]
)