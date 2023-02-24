function solve(string) {
    let wordsArr = string.split(' ');
    let startWith = [];
    for (let word of wordsArr) {
        if (word.charAt(0) === '#' && word.length > 1) {
            let flag = true;
            let wordLower = word.toLowerCase();
            for (let i = 1; i < wordLower.length; i++) {
                if (wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log(word.split("#")[1])
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')