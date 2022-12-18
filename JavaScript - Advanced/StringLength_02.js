function stringLength(a, b, c) {
    let len1 = a.length;
    let len2 = b.length;
    let len3 = c.length;

    let total = len1 + len2 + len3;
    let average = Math.floor(total / 3);
    console.log(total);
    console.log(average);
}

stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')