function solve(input) {
    let words = new Map;
    let arr = input.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (words.has(arr[i])) {
            let oldValue = words.get(arr[i]);
            words.set(arr[i], oldValue + 1);
        } else {
            words.set(arr[i], 1);
        }
    }
    let forPrint = [];
    for (let [key, value] of words) {
        if (value % 2 !== 0) {
            forPrint.push(key);
        }
    }
    console.log(forPrint.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
solve('Cake IS SWEET is Soft CAKE sweet Food')

