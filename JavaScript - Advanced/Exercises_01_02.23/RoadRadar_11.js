function solve(speed, area) {
    let speeding = 'speeding';
    let excessiveSpeeding = 'excessive speeding';
    let recklessDriving = 'reckless driving';
    switch (area) {
        case 'residential':
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a 20 zone`)
            } else {
                if (speed <= 40) {
                    let overSpeed = speed - 20;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 20 - ${speeding}`);
                } else if (speed <= 60) {
                    let overSpeed = speed - 20;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 20 - ${excessiveSpeeding}`);
                } else {
                    let overSpeed = speed - 20;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 20 - ${recklessDriving}`);
                }
            }
            break;
        case 'city':
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`)
            } else {
                if (speed <= 70) {
                    let overSpeed = speed - 50;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 50 - ${speeding}`);
                } else if (speed <= 90) {
                    let overSpeed = speed - 50;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 50 - ${excessiveSpeeding}`);
                } else {
                    let overSpeed = speed - 50;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 50 - ${recklessDriving}`);
                }
            }
            break;
        case 'interstate':
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`)
            } else {
                if (speed <= 110) {
                    let overSpeed = speed - 90;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 90 - ${speeding}`);
                } else if (speed <= 130) {
                    let overSpeed = speed - 90;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 90 - ${excessiveSpeeding}`);
                } else {
                    let overSpeed = speed - 90;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 90 - ${recklessDriving}`);
                }
            }
            break;
        case 'motorway':
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`)
            } else {
                if (speed <= 150) {
                    let overSpeed = speed - 130;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 130 - ${speeding}`);
                } else if (speed <= 170) {
                    let overSpeed = speed - 130;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 130 - ${excessiveSpeeding}`);
                } else {
                    let overSpeed = speed - 130;
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 130 - ${recklessDriving}`);
                }
            }
            break;
    }
}

solve(21, 'residential')
solve(40, 'city')
solve(120, 'interstate')