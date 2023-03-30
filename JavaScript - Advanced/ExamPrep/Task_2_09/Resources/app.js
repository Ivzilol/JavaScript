window.addEventListener('load', solve);

function solve() {
    let typeProductElement = document.getElementById('type-product');
    let descriptionElement = document.getElementById('description');
    let nameElement = document.getElementById('client-name');
    let phoneElement = document.getElementById('client-phone');
    let sendButtonElement = document.querySelector('#right > form > button');
    let sectionElement = document.getElementById('received-orders');
    let divFinishElement = document.createElement('div');
    divFinishElement.setAttribute('class', 'container');
    let completedOrderElement = document.getElementById('completed-orders');
    let clearButtonElement = document.querySelector('.clear-btn');
    clearButtonElement.addEventListener('click', clearFinished);


    sendButtonElement.addEventListener('click', (ev) => {
        if (typeProductElement.value !== '' && descriptionElement.value !== '' && nameElement.value !== '' && phoneElement.value !== '') {
            addMessage(ev, typeProductElement.value, descriptionElement.value, nameElement.value, phoneElement.value);
            clearInputs();
        }
    });

    function addMessage(ev, typeProductElement, descriptionElement, nameElement, phoneElement) {
        ev.preventDefault();

        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'container');

        let productAddElement = document.createElement('h2');
        productAddElement.textContent = `Product type for repair: ${typeProductElement}`;

        let nameAndPhoneAddElement = document.createElement('h3');
        nameAndPhoneAddElement.textContent = `Client information: ${nameElement}, ${phoneElement}`;

        let descriptionAddElement = document.createElement('h4');
        descriptionAddElement.textContent = `Description of the problem: ${descriptionElement}`;

        let startButtonElement = document.createElement('button');
        startButtonElement.setAttribute('class', 'start-btn');
        startButtonElement.textContent = 'Start repair';

        let finishButtonElement = document.createElement('button');
        finishButtonElement.setAttribute('class', 'finish-btn');
        finishButtonElement.textContent = 'Finish repair';

        divElement.appendChild(productAddElement);
        divElement.appendChild(nameAndPhoneAddElement);
        divElement.appendChild(descriptionAddElement);
        divElement.appendChild(startButtonElement);
        divElement.appendChild(finishButtonElement);

        sectionElement.appendChild(divElement);

        finishButtonElement.disabled = true;

        startButtonElement.addEventListener('click', (ev) => (ev, startButtonElement.disabled = true, finishButtonElement.disabled = false));

        finishButtonElement.addEventListener('click', (ev) => completedOrders(ev, typeProductElement, descriptionElement, nameElement, phoneElement));
    }

    function completedOrders(ev, _typeProductElement, _descriptionElement, _nameElement, _phoneElement) {

        ev.preventDefault();
        ev.target.parentNode.remove();

        let finishTypeProduct = _typeProductElement;
        let finishName = _nameElement;
        let finishPhone = _phoneElement;
        let finishDescription = _descriptionElement;

        let productFinishElement = document.createElement('h2');
        productFinishElement.textContent = `Product type for repair: ${finishTypeProduct}`;

        let clientFinishElement = document.createElement('h3');
        clientFinishElement.textContent = `Client information: ${finishName}, ${finishPhone}`;

        let descriptionFinishElement = document.createElement('h4');
        descriptionFinishElement.textContent = `Description of the problem: ${finishDescription}`;

        divFinishElement.appendChild(productFinishElement);
        divFinishElement.appendChild(clientFinishElement);
        divFinishElement.appendChild(descriptionFinishElement);

        completedOrderElement.appendChild(divFinishElement);
    }

    function clearFinished(e) {
        e.preventDefault();
        divFinishElement.innerHTML = '';
        divFinishElement.remove();
    }

    function clearInputs() {
        descriptionElement.value = '';
        nameElement.value = '';
        phoneElement.value = ''
    }
}