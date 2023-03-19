function solve(input) {
    let rows = input.shift();
    let pieceMap = {};
    for (let i = 0; i < rows; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pieceMap[piece] = {composer, key}
    }
    let count = 0;
    for (const data of input) {
        let line = input[count];
        if (line === 'Stop') {
            break;
        }
        let tokens = line.split('|');
        let commands = tokens[0];
        switch (commands) {
            case 'Add':
                let piece = tokens[1];
                let composer = tokens[2];
                let key = tokens[3];
                if (!pieceMap.hasOwnProperty(piece)) {
                    pieceMap[piece] = {composer, key};
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case 'Remove':
                let pieceForRemove = tokens[1];
                if (pieceMap.hasOwnProperty(pieceForRemove)) {
                    delete pieceMap[pieceForRemove];
                    console.log(`Successfully removed ${pieceForRemove}!`);
                } else {
                    console.log(`Invalid operation! ${pieceForRemove} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                let pieceChangeKey = tokens[1];
                let newKey = tokens[2];
                if (pieceMap.hasOwnProperty(pieceChangeKey)) {
                    pieceMap[pieceChangeKey].key = newKey;
                    console.log(`Changed the key of ${pieceChangeKey} to ${newKey}!`)
                } else {
                    console.log(`Invalid operation! ${pieceChangeKey} does not exist in the collection.`)
                }
                break;
        }
        count++;
    }
    let entries = Object.entries(pieceMap);
    for (const [piece, info] of entries) {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }

}

solve([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
)

solve([
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
    ]
)