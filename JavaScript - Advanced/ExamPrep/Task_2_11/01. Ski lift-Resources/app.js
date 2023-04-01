window.addEventListener('load', solve);

function solve() {

    const storyState = {
        firstName: null,
        lastName: null,
        numberOfPeople: null,
        formDate: null,
        daysCount: null
    }

    const inputSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        numberOfPeople: document.getElementById('people-count'),
        formDate: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count')
    };

    const otherSelectors = {
        nextStepButton: document.getElementById('next-btn'),
        ticketInfoList: document.querySelector('.ticket-info-list'),
        ticketConfirmList: document.querySelector('.confirm-ticket'),
        mainContainer: document.getElementById('main'),
        bodyContainer: document.getElementById('body')
    }

    otherSelectors.nextStepButton.addEventListener('click', ticketPreview);

    function ticketPreview(e) {
        e.preventDefault();
        const fieldsTest = Object.values(inputSelectors)
            .every(input => input.value !== '');
        if (!fieldsTest) {
            console.log('Empty Value');
            return;
        }
        const {firstName, lastName, numberOfPeople, formDate, daysCount} = inputSelectors;
        const liElement = createElement('li', otherSelectors.ticketInfoList, null, ['ticket']);
        const article = createElement('article', liElement);
        createElement('h3', article, `Name: ${firstName.value} ${lastName.value}`);
        createElement('p', article, `From date: ${formDate.value}`);
        createElement('p', article, `For ${daysCount.value} days`);
        createElement('p', article, `For ${numberOfPeople.value} people`);
        const editButton = createElement('button', liElement, 'Edit', ['edit-btn']);
        const continueButton = createElement('button', liElement, 'Continue', ['continue-btn']);

        editButton.addEventListener('click', editTicket);
        continueButton.addEventListener('click', continueTicket);

        for (const key in inputSelectors) {
            storyState[key] = inputSelectors[key].value;
        }

        clearInputs();
        otherSelectors.nextStepButton.disabled = true;
    }

    function continueTicket(e) {
        const liContainer = createElement('li', otherSelectors.ticketConfirmList, null, ['ticket-content']);
        liContainer.innerHTML = e.target.parentElement.innerHTML;
        liContainer.children[2].remove();
        liContainer.children[1].remove();
        const confirmButton = createElement('button', liContainer, 'Confirm', ['confirm-btn']);
        const cancelButton = createElement('button', liContainer, 'Cancel', ['cancel-btn']);
        liContainer.appendChild(confirmButton);
        liContainer.appendChild(cancelButton);
        e.target.parentElement.remove();

        cancelButton.addEventListener('click', removeTicket);
        confirmButton.addEventListener('click', confirmTicket);
    }

    function confirmTicket() {
        otherSelectors.mainContainer.innerHTML = '';
        const titleElement = createElement('h1', otherSelectors.bodyContainer, 'Thank you have a nice day!', null, "thank-you");
        const buttonBackElement = createElement('button', otherSelectors.bodyContainer, 'Back', null, 'back-btn');
        buttonBackElement.addEventListener('click', reloadPage);
    }

    function reloadPage() {
        window.location.reload();
    }

    function removeTicket(e) {
        const liItem = e.currentTarget.parentNode;
        liItem.remove();
        otherSelectors.nextStepButton.disabled = false;
    }

    function editTicket() {
        for (const key in inputSelectors) {
            inputSelectors[key].value = storyState[key];
        }
        otherSelectors.nextStepButton.disabled = false;
        otherSelectors.ticketInfoList.innerHTML = '';
    }

    function clearInputs(e) {
        Object.values(inputSelectors)
            .forEach(input => {
                input.value = '';
            });
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


    
    
