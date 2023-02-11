function juiceFlavors(arr) {
    let juices = {};
    let bottles = {};

    function createBottle(flavor) {
        if (juices[flavor] >= 1000) {
            if (!bottles.hasOwnProperty(flavor)) {
                bottles[flavor] = 0;
            }
            let numberOfBottles = Math.floor(juices[flavor] / 1000);
            bottles[flavor] += numberOfBottles;
            juices[flavor] -= numberOfBottles * 1000;
        }
    }

    for (const juice of arr) {
        let [flavor, qty] = juice.split(' => ');
        if (!juices.hasOwnProperty(flavor)) {
            juices[flavor] = 0;
        }
        juices[flavor] += Number(qty);
        createBottle(flavor)
    }

    for (const flavor in bottles) {
        console.log(flavor + ' => ' + bottles[flavor])
    }
}