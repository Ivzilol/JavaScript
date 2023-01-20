function solve() {
    const params = Array.from(arguments);
    const types = {};
    for (const arg of params) {
        const  type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (types[type] === undefined) {
            types[type] = 0;
        }
        types[type]++;
    }
    const result = Object.entries(types).sort((a, b) => b[1] - a[1]);
    for (const [type, count] of result) {
        console.log(`${type} = ${count}`)
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob'}, 3.333, 9.999);