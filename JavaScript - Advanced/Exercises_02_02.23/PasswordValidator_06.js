function solve(string) {
    let countDigit = 0;
    let isTrue = true;
    for (let i = 0; i < string.length; i++) {
        let currentLetter = string[i];
        if (/[a-zA-Z]/.test(currentLetter)){

        } else if (/[0-9]/.test(currentLetter)) {
            countDigit++;
        } else {
            isTrue = false
            break;
        }
    }
    if (string.length >= 6 && string.length <= 10 && countDigit >= 2 && isTrue) {
        console.log('Password is valid')
    } else if ((string.length < 6 || string.length > 10) && countDigit < 2 && !isTrue) {
        console.log('Password must be between 6 and 10 characters');
        console.log('Password must consist only of letters and digits');
        console.log('Password must have at least 2 digits')
    } else if ((string.length < 6 || string.length > 10) && countDigit < 2) {
        console.log('Password must be between 6 and 10 characters');
        console.log('Password must have at least 2 digits')
    } else if (!isTrue && countDigit < 2) {
        console.log('Password must consist only of letters and digits');
        console.log('Password must have at least 2 digits');
    }
}

solve('logIn')
solve('MyPass123')
solve('Pa$s$s')