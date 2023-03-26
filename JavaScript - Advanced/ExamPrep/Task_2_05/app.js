window.addEventListener("load", solve);

function solve() {
    let makeElement = document.getElementById('make');
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let fuelElement = document.getElementById('fuel');
    let originalCostElement = document.getElementById('original-cost');
    let sellingPriceElement = document.getElementById('selling-price');
    let publishButtonElement = document.getElementById('publish');
    let tBodyElement = document.getElementById('table-body');
    let ulSellElement = document.getElementById('cars-list');
    let profitMadeElement = document.getElementById('profit');
    publishButtonElement.addEventListener('click', publishCar);
    let allProfitMade = 0;

    function publishCar(e) {
        e.preventDefault();
        if (makeElement.value === ''
            || modelElement.value === ''
            || yearElement.value === ''
            || fuelElement.value === ''
            || originalCostElement.value === ''
            || sellingPriceElement.value === '') {
            return;
        }

        let trElement = document.createElement('tr');
        trElement.setAttribute('class', 'row');

        let carTdElement = document.createElement('td');
        carTdElement.textContent = `${makeElement.value}`;

        let modelTdElement = document.createElement('td');
        modelTdElement.textContent = `${modelElement.value}`;

        let yearTdElement = document.createElement('td');
        yearTdElement.textContent = `${yearElement.value}`;

        let fuelTdElement = document.createElement('td');
        fuelTdElement.textContent = `${fuelElement.value}`;

        let costTdElement = document.createElement('td');
        costTdElement.textContent = `${originalCostElement.value}`;

        let sellTdElement = document.createElement('td');
        sellTdElement.textContent = `${sellingPriceElement.value}`;

        let buttonsTdElement = document.createElement('td');

        let editButton = document.createElement('button');
        editButton.setAttribute('class', 'action-btn edit');
        editButton.textContent = 'Edit';

        let sellButton = document.createElement('button');
        sellButton.setAttribute('class', 'action-btn sell');
        sellButton.textContent = 'Sell';

        buttonsTdElement.appendChild(editButton);
        buttonsTdElement.appendChild(sellButton);

        trElement.appendChild(carTdElement);
        trElement.appendChild(modelTdElement);
        trElement.appendChild(yearTdElement);
        trElement.appendChild(fuelTdElement);
        trElement.appendChild(costTdElement);
        trElement.appendChild(sellTdElement);
        trElement.appendChild(buttonsTdElement);

        tBodyElement.appendChild(trElement);

        let editCar = makeElement.value;
        let editModel = modelElement.value;
        let editYear = yearElement.value;
        let editFuel = fuelElement.value;
        let editCost = originalCostElement.value;
        let editSell = sellingPriceElement.value;

        makeElement.value = '';
        modelElement.value = '';
        yearElement.value = '';
        fuelElement.value = '';
        originalCostElement.value = '';
        sellingPriceElement.value = '';

        editButton.addEventListener('click', editCurrentCar);

        function editCurrentCar() {
            makeElement.value = editCar;
            modelElement.value = editModel;
            yearElement.value = editYear;
            fuelElement.value = editFuel;
            originalCostElement.value = editCost;
            sellingPriceElement.value = editSell;

            trElement.remove();
        }

        sellButton.addEventListener('click', sellEvent);

        function sellEvent() {

            let profitLiElement = document.createElement('li');
            profitLiElement.setAttribute('class', 'each-list')

            let firstSpanElement = document.createElement('span');
            firstSpanElement.textContent = `${editCar} ${editModel}`;

            let secondSpanElement = document.createElement('span');
            secondSpanElement.textContent = `${editYear}`;

            let thirdSpanElement = document.createElement('span');
            let profitMade = Number(editSell) - Number(editCost);
            thirdSpanElement.textContent = `${profitMade}`;

            profitLiElement.appendChild(firstSpanElement);
            profitLiElement.appendChild(secondSpanElement);
            profitLiElement.appendChild(thirdSpanElement);
            ulSellElement.appendChild(profitLiElement);

            allProfitMade += profitMade;

            profitMadeElement.textContent = `${Number(allProfitMade).toFixed(2)}`;

            trElement.remove();
        }
    }
}