window.addEventListener('load', solve);

function solve() {

    const storyState = {
        model: null,
        year: null,
        description: null,
        price: null
    }

    const inputSelectors = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price')
    };


    const otherSelectors = {
        addButton: document.getElementById('add'),
        tBodyAddList: document.getElementById('furniture-list'),
        totalPrice: document.querySelector('#information > tfoot > tr > td.total-price')
    }

    otherSelectors.addButton.addEventListener('click', addFurniture);


    function addFurniture(e) {
        e.preventDefault()
        const fieldsTest = Object.values(inputSelectors)
            .every(input => input.value !== '');
        if (!fieldsTest) {
            return;
        }
        const {model, year, description, price} = inputSelectors;
        const trElementInfo = createElement('tr', otherSelectors.tBodyAddList, null, ['info']);
        createElement('td', trElementInfo, `${model.value}`);
        let priceValue = Number(price.value);
        createElement('td', trElementInfo, `${priceValue.toFixed(2)}`);
        const tdButtonsElement = createElement('td', trElementInfo);
        const moreInfoButton = createElement('button', tdButtonsElement, 'More Info', ['moreBtn']);
        const BuyButton = createElement('button', tdButtonsElement, 'Buy it', ['buyBtn']);
        const trElementHide = createElement('tr', otherSelectors.tBodyAddList, null, ['hide']);
        createElement('td', trElementHide, `Year: ${year.value}`);
        const descriptionTdElement = document.createElement('td');
        descriptionTdElement.setAttribute('colspan', '3');
        descriptionTdElement.textContent = `Description: ${description.value}`;
        trElementHide.appendChild(descriptionTdElement);


        moreInfoButton.addEventListener('click', moreInfo);
        BuyButton.addEventListener('click', bayFurniture);




        clearInput();

        function moreInfo() {
            trElementHide.style = 'display: contents;';
            moreInfoButton.textContent = 'Less Info';
            moreInfoButton.addEventListener('click', lessInfo);

        }


        function lessInfo() {
            trElementHide.style = 'none';
            moreInfoButton.textContent = 'More Info';
        }


    }

    function bayFurniture(e) {
        otherSelectors.totalPrice.textContent = `${storyState.price.toFixed(2)}`;
        e.target.parentElement.parentElement.innerHTML = '';

    }

    function clearInput() {
        Object.values(inputSelectors)
            .forEach(input => {
                input.value = '';
            })
    }


    function createElement(type, parentNode, content, classes, id, attribute, useInnerHtml) {
        const htmlElement = document.createElement(type);
        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== 'input') {
                htmlElement.textContent = content;
            }

            if (content && type === 'input') {
                htmlElement.value = content;
            }
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes)
        }


        if (id) {
            htmlElement.id = id;
        }
        //{src, link, href, http}

        if (attribute) {
            for (const key in attribute) {
                htmlElement[key] = attribute[key];
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }
        return htmlElement;
    }
}
