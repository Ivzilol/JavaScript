function solve(number, c1, c2, c3, c4, c5) {
    let arr = [];
    arr.push(c1, c2, c3, c4, c5);
    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i];
        switch (currentCommand) {
            case 'chop':
                number /= 2;
                console.log(number)
                break;
            case 'dice':
                number = Math. sqrt(number);
                console.log(number)
                break;
            case 'spice':
                number += 1;
                console.log(number)
                break;
            case 'bake':
                number *= 3;
                console.log(number)
                break;
            case 'fillet':
                number = number - (number * 0.20);
                console.log(number)
                break;
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');


