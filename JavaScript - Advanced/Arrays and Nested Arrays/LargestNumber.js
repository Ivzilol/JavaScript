const findLargestNumber = array => {
    if (array === null) {
        return null;
    }
    if (array.length === 0) {
        return null;
    }

    let largestNumber = Number.NEGATIVE_INFINITY;

    array.forEach(number => {
        if (number > largestNumber) {
            largestNumber = number;
        }
    });

    return largestNumber;
};

console.log(findLargestNumber([12, 45, 7, 99, 24]));
console.log(findLargestNumber([]));
console.log(findLargestNumber(null));