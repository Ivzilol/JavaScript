function solve(arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj.name = arr[i];
        obj.number = arr[i].length
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`)
    }
}

solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)