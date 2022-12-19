function priceFruit(typeFruid, weightGm, priceForKg) {
    let weightInKg = weightGm / 1000;
    let price = weightInKg * priceForKg
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeFruid}.`)
}
priceFruit('orange', 2500, 1.80)
priceFruit('apple', 1563, 2.35)
