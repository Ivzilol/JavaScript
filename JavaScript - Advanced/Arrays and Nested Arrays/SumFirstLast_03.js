function firstLast(numsAsString) {
    let firstElement = numsAsString.shift();
    let lastElement = numsAsString.pop();

    const result = Number(firstElement) + Number(lastElement);
    console.log(result);

}

firstLast(['20', '30', '40']);
firstLast(['5', '10']);