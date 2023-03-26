function solve(input) {
    let rows = input.shift();
    let healthMap = {};
    let manaMap = {}
    for (let i = 0; i < rows; i++) {
        let [hero, health, mana] = input.shift().split(' ');
        healthMap[hero] = Number(health);
        manaMap[hero] = Number(mana);
    }
    while (input.length > 1) {
        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let heroName = tokens[1];
        switch (command) {
            case 'CastSpell':
                let neededMana = tokens[2];
                let spellName = tokens[3];
                let currentMana = manaMap[heroName];
                if (currentMana >= neededMana) {
                    let newQuantityMana = Number(currentMana) - Number(neededMana);
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${newQuantityMana} MP!`);
                    manaMap[heroName] = newQuantityMana;
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
                }
                break;
            case 'TakeDamage':
                let damage = tokens[2];
                let attacker = tokens[3];
                let currentHealth = healthMap[heroName];
                if (currentHealth > damage) {
                    let newQuantityHealth = Number(currentHealth) - Number(damage);
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${newQuantityHealth} HP left!`);
                    healthMap[heroName] = newQuantityHealth;
                } else {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete healthMap[heroName];
                    delete manaMap[heroName];
                }
                break;
            case 'Recharge':
                let amount = tokens[2];
                let currentQuantityMana = manaMap[heroName];
                let newQuantityMana = Number(currentQuantityMana) + Number(amount);
                if (newQuantityMana > 200) {
                    let rechargerMana = 200 - currentQuantityMana;
                    console.log(`${heroName} recharged for ${rechargerMana} MP!`);
                    manaMap[heroName] = 200;
                } else {
                    manaMap[heroName] = newQuantityMana;
                    console.log(`${heroName} recharged for ${amount} MP!`);
                }
                break;
            case 'Heal':
                let amountHealth = tokens[2];
                let currenQuantityHealth = healthMap[heroName];
                let newQuantityHealth = Number(currenQuantityHealth) + Number(amountHealth);
                if (newQuantityHealth > 100) {
                    let rechargedHealth = 100 - currenQuantityHealth;
                    console.log(`${heroName} healed for ${rechargedHealth} HP!`);
                    healthMap[heroName] = 100;
                } else {
                    healthMap[heroName] = newQuantityHealth;
                    console.log(`${heroName} healed for ${amountHealth} HP!`);
                }
                break;
        }
    }
    let entriesHealthMap = Object.entries(healthMap);
    let valuesManaMap = Object.values(manaMap);
    for (const [hero, health] of entriesHealthMap) {
        console.log(`${hero}`);
        console.log(`  HP: ${health}`);
        console.log(`  MP: ${valuesManaMap.shift()}`);
    }
}

solve([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])