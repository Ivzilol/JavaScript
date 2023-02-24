function solve(group, type, day) {
    let totalPrice;
    let price;
    switch (type){
        case 'Students':
            if (day === 'Friday' && group >= 30) {
                price = 8.45 * group;
                totalPrice = price - (price * 0.15);
            } else if (day === 'Friday' && group < 30) {
                price = 8.45 * group;
                totalPrice = price;
            }
            if (day === 'Saturday' && group >= 30) {
                price = 9.80 * group;
                totalPrice = price - (price * 0.15);
            } else if (day === 'Saturday' && group < 30) {
                price = 9.80 * group;
                totalPrice = price;
            }
            if (day === 'Sunday' && group >= 30) {
                price = 10.46 * group;
                totalPrice = price - (price * 0.15);
            } else if (day === 'Sunday' && group < 30) {
                price = 10.46 * group;
                totalPrice = price;
            }
            break;
        case 'Business':
            if (day === 'Friday' && group >= 100) {
               group -= 10;
               price = 10.90 * group;
               totalPrice = price;
            } else if (day === 'Friday' && group < 100) {
                price = 10.90 * group;
                totalPrice = price;
            }
            if (day === 'Saturday' && group >= 100) {
                group -= 10;
                price = 15.60 * group;
                totalPrice = price;
            } else if (day === 'Saturday' && group < 100) {
                price = 15.60 * group;
                totalPrice = price;
            }
            if (day === 'Sunday' && group >= 100) {
                group -= 10;
                price = 16 * group;
                totalPrice = price;
            } else if (day === 'Sunday' && group < 100) {
                price = 16 * group;
                totalPrice = price;
            }
            break;
        case 'Regular':
            if (day === 'Friday' && group >= 10 && group <= 20) {
                price = 15 * group;
                totalPrice = price - (price * 0.05);
            } else if (day === 'Friday') {
                price = 15 * group;
                totalPrice = price;
            }
            if (day === 'Saturday' && group >= 10 && group <= 20) {
                price = 20 * group;
                totalPrice = price - (price * 0.05);
            } else if (day === 'Saturday') {
                price = 20 * group;
                totalPrice = price;
            }
            if (day === 'Sunday' && group >= 10 && group <= 20) {
                price = 22.50 * group;
                totalPrice = price - (price * 0.05);
            } else if (day === 'Sunday') {
                price = 22.50 * group;
                totalPrice = price;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);


}

solve(30, "Students", "Sunday");
solve(40,"Regular","Saturday");

