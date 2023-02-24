function solve(word, sentence) {
    let arrSentence = sentence.split(' ');
    let isFound = false;
    for (let currentWord of arrSentence) {
        if (currentWord.toLowerCase() === word) {
            isFound = true;
            break;
        }
    }
    if (isFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('javascript',
    'JavaScript is the best programming language'
)

solve('python',
    'JavaScript is the best programming language'
)