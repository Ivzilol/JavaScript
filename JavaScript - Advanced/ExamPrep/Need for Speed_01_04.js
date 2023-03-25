function solve(input) {
    let rows = input.shift()
    let distanceMap = {};
    let fuelMap = {};
    for (let i = 0; i < rows; i++) {
        let [car, distance, fuel] = input.shift().split('|');
        distanceMap[car] = Number(distance);
        fuelMap[car] = Number(fuel);
    }
    while (input.length > 1) {
        let tokens = input.shift().split(' : ');
        let command = tokens[0];
        let car = tokens[1];
        switch (command) {
            case "Drive":
                let distance = tokens[2];
                let fuelToDrive = tokens[3];
                let fuelInCar = fuelMap[car];
                if (fuelToDrive <= fuelInCar) {
                    fuelMap[car] = fuelInCar - fuelToDrive;
                    let oldDistance = distanceMap[car];
                    let newKm = Number(oldDistance) + Number(distance);
                    distanceMap[car] = newKm;
                    console.log(`${car} driven for ${distance} kilometers. ${fuelToDrive} liters of fuel consumed.`)
                    if (newKm > 100000) {
                        delete fuelMap[car];
                        delete distanceMap[car];
                        console.log(`Time to sell the ${car}!`);
                    }
                } else {
                    console.log('Not enough fuel to make that ride')
                }
                break;
            case "Refuel" :
                let quantityRefuel = tokens[2];
                let newQuantityFuel = Number(fuelMap[car] + Number(quantityRefuel));
                if (newQuantityFuel < 75) {
                    fuelMap[car] = newQuantityFuel;
                    console.log(`${car} refueled with ${quantityRefuel} liters`);
                } else {
                    let fuelInTank = 75 - fuelMap[car];
                    console.log(`${car} refueled with ${fuelInTank} liters`);
                    fuelMap[car] = 75;
                }
                break;
            case "Revert":
                let decreaseKm = tokens[2];
                let newKm = Number(distanceMap[car] - Number(decreaseKm));
                if (newKm < 10000) {
                    distanceMap[car] = 10000;
                } else {
                    distanceMap[car] = newKm;
                    console.log(`${car} mileage decreased by ${decreaseKm} kilometers`);
                }
                break;

        }
    }
    let entriesDistanceMap = Object.entries(distanceMap);
    let valuesFuelMap = Object.values(fuelMap);
    for (const[car, info] of entriesDistanceMap) {
        console.log(`${car} -> Mileage: ${info} kms, Fuel in the tank: ${valuesFuelMap.shift()} lt.`);
    }
}

solve([
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]
)

solve([
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
    ]
)