function solve(n) {
    let bar = '[..........]'

    if (n === 100) {
        console.log('100% Complete!')
    } else {
        for (let i = 0; i < n; i+=10) {
            bar = bar.replace('.', '%')
        }
        console.log(`${n}% ${bar}`);
        console.log('Still loading...');
    }
}