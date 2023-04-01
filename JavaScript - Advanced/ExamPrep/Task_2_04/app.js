window.addEventListener("load", solve);

function solve() {

    const storyState = {
        firstName: null,
        laseName: null,
        age: null,
        gender: null,
        description: null
    }

    const inputSelectors = {
        firstName: document.getElementById('first-name'),
        laseName: document.getElementById('last-name'),
        age: document.getElementById('age'),
        gender: document.getElementById('genderSelect'),
        description: document.getElementById('task')
    }

    const otherSelectors = {
        submitButton: document.getElementById('form-btn'),
        inProgressUl: document.getElementById('in-progress'),
        countInProgress: document.getElementById('progress-count'),
        finishedUl: document.getElementById('finished'),
        clearButton: document.getElementById('clear-btn')
    }

    otherSelectors.submitButton.addEventListener('click', dishInformation);

    function dishInformation(e) {
        e.preventDefault();
        const testInputs = Object.values(inputSelectors)
            .every(input => input.value !== '');
        if (!testInputs) {
            return;
        }
        const {firstName, laseName, age, gender, description} = inputSelectors;
        const liElement = createElement('li', otherSelectors.inProgressUl, null, ['each-line']);
        const article = createElement('article', liElement);
        createElement('h4', article, `${firstName.value} ${laseName.value}`);
        createElement('p', article, `${gender.value}, ${age.value}`);
        createElement('p', article, `Dish description: ${description.value}`);
        const editButton = createElement('button', liElement, 'Edit', ['edit-btn']);
        const completeButton = createElement('button', liElement, 'Mark as Complete', ['complete-btn']);

        editButton.addEventListener('click', editInfo);
        completeButton.addEventListener('click', completeTask);

        for (const key in inputSelectors) {
            storyState[key] = inputSelectors[key].value;
        }

        clearInputs();
        likesPlus();
    }


    function completeTask(e) {
        const liContainer = createElement('li', otherSelectors.finishedUl, null, ['each-line']);
        liContainer.innerHTML = e.target.parentElement.innerHTML;
        liContainer.children[2].remove();
        liContainer.children[1].remove();
        e.target.parentElement.remove();
        likesMinus();
    }

    function editInfo() {
        for (const key in inputSelectors) {
            inputSelectors[key].value = storyState[key];
        }
        otherSelectors.inProgressUl.innerHTML = '';
        createElement('h3', otherSelectors.inProgressUl, 'In progress');
        likesMinus();
    }

    otherSelectors.clearButton.addEventListener('click', clearInfo);

    function clearInfo() {
        otherSelectors.finishedUl.innerHTML = '';
    }

    function likesPlus(e) {
        let likes = Number(otherSelectors.countInProgress.textContent);
        otherSelectors.countInProgress.textContent = `${likes + 1}`;
    }

    function likesMinus() {
        let likes = Number(otherSelectors.countInProgress.textContent);
        otherSelectors.countInProgress.textContent = `${likes - 1}`;
    }

    function clearInputs() {
        Object.values(inputSelectors)
            .forEach(input => {
                if (input.value === 'Male' || input.value === 'Female') {
                } else {
                    input.value = '';
                }
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
