function solve(input) {
    let forPrint = new Map();

    let words = input.shift().split(' ');
    for (let word of words) {
        forPrint.set(word, 0);
    }
    for (let word of input) {
        if(forPrint.has(word)) {
            let oldValue = forPrint.get(word);
            forPrint.set(word, oldValue + 1);
        }
    }
    forPrint[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((left, right) => right[1] - left[1]);
    }
    for(let [key, value] of forPrint) {
        console.log(key, '-', value);
    }
}

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']

)