window.addEventListener("load", solve);

function solve() {
    const storyState = {
        firstName: null,
        lastName: null,
        age: null,
        title: null,
        genre: null,
        story: null
    };
    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        age: document.getElementById('age'),
        title: document.getElementById('story-title'),
        genre: document.getElementById('genre'),
        story: document.getElementById('story')
    };

    const otherDOMSelectors = {
        publishButton: document.getElementById('form-btn'),
        previewList: document.getElementById('preview-list'),
        mainContainer: document.getElementById('main')
    };

    otherDOMSelectors.publishButton.addEventListener('click', publishStoryHandler)

    function publishStoryHandler() {
        const fieldsTestValue = Object.values(inputDOMSelectors)
            .every(input => input.value !== '');
        if (!fieldsTestValue) {
            console.log('Wrong input');
            return;
        }

        const {firstName, lastName, age, title, genre, story} = inputDOMSelectors;
        const liElement = createElement('li', otherDOMSelectors.previewList, null,
            ['story-info']);
        const article = createElement('article', liElement);
        createElement('h4', article, `Name: ${firstName.value} ${lastName.value}`);
        createElement('p', article, `Age: ${age.value}`);
        createElement('p', article, `Title: ${title.value}`);
        createElement('p', article, `Genre: ${genre.value}`);
        createElement('p', article, `${story.value}`);
        const saveButton = createElement('button', liElement, 'Save Story', ['save-btn']);
        const editButton = createElement('button', liElement, 'Edit Story', ['edit-btn']);
        const deleteButton = createElement('button', liElement, 'Delete Story', ['delete-btn']);

        editButton.addEventListener('click', editStory);
        deleteButton.addEventListener('click', deleteStory);
        saveButton.addEventListener('click', saveStory);

        for (const key in inputDOMSelectors) {
            storyState[key] = inputDOMSelectors[key].value;
        }

        clearAllInputs();
        otherDOMSelectors.publishButton.disabled = true;

    }

    function editStory() {
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = storyState[key];
        }
        otherDOMSelectors.publishButton.disabled = false;
        otherDOMSelectors.previewList.innerHTML = '';
        createElement('h3', otherDOMSelectors.previewList, 'Preview');
    }

    function deleteStory(event) {
        const liItem = event.currentTarget.parentNode;
        liItem.remove();
        otherDOMSelectors.publishButton.disabled = false;
    }

    function saveStory() {
        otherDOMSelectors.mainContainer.innerHTML = '';
        createElement('h1', otherDOMSelectors.mainContainer, 'Your scary story is saved');
    }

    function clearAllInputs() {
        Object.values(inputDOMSelectors)
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


