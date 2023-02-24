function solve(text) {
    let pattern = '[A-Z][a-z]*';
    let matcher = text.matchAll(pattern);
    let arr = [];

    for (let word of matcher) {
        arr.push(word[0]);
    }
    console.log(arr.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')

