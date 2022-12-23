function greatestDivisor(a, b){
    let geratestCommonDivisor;
    if (a > b) {
        for (let index = 1; index <= b; index++) {
            if (a % index == 0 && b % index == 0) {
                geratestCommonDivisor = index;
            }
        }
    } else {
        for (let index = 0; index < a; index++) {
            if (a % index == 0 && b % index == 0) {
                geratestCommonDivisor = index
            }
        }
    }
    console.log(geratestCommonDivisor);
}

greatestDivisor(15, 5);
greatestDivisor(2154, 458);