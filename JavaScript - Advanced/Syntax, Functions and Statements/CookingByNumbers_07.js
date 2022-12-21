function cookingNumbers(number, command1, command2, command3, command4, command5) {
    number = Number(number);

    let commandList = [command1, command2, command3, command4, command5];

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x - x * 0.20;

    for (let index = 0; index < commandList.length; index++) {
       switch (commandList[index]) {
        case "chop":
            number = chop(number);
            console.log(number)
            break;
        case "dice":
            number = dice(number);
            console.log(number)
            break;
        case "spice":
            number = spice(number);
            console.log(number)
            break;
        case "bake":
            number = bake(number);
            console.log(number)
            break;                                
        default:
            number = fillet(number);
            console.log(number)
            break;
       }
        
    }
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')