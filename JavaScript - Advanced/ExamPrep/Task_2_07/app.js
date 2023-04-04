function solve() {

    const storyState = {
        recipient: null,
        title: null,
        message: null
    }

    const inputSelectors = {
        recipient: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message')
    }

    const otherSelectors = {
        editButton: document.getElementById('add'),
        resetButton: document.getElementById('reset'),
        listOfMailUl: document.getElementById('list'),
        sendList: document.querySelector('.sent-list'),
        deleteList: document.querySelector('.delete-list')
    }

    otherSelectors.editButton.addEventListener('click', addMessageInList);


    function addMessageInList(e) {
        e.preventDefault();
        const testFields = Object.values(inputSelectors)
            .every(input => input.value !== '');
        if(!testFields) {
            console.log('Empty Value');
            return;
        }
        const {recipient, title, message} = inputSelectors;
        const liElement = createElement('li', otherSelectors.listOfMailUl);
        createElement('h4', liElement, `Title: ${title.value}`);
        createElement('h4', liElement, `Recipient Name: ${recipient.value}`);
        createElement('span', liElement, `${message.value}`);
        const divElement = createElement('div', liElement, null, ['list-action']);
        const sendButton = createElement('button', divElement, 'Send', null, 'send', 'submit');
        const deleteButton = createElement('button', divElement, 'Delete', null, 'delete', 'submit');

        sendButton.addEventListener('click', sendMails);
        deleteButton.addEventListener('click', deleteMailFromSend)

        for (const key in inputSelectors) {
            storyState[key] = inputSelectors[key].value;
        }

        otherSelectors.resetButton.addEventListener('click', clearInputs);
        clearInputs();
    }

    function sendMails(e) {
        const {recipient, title, message} = storyState;
        const liElementSendList = createElement('li', otherSelectors.sendList);
        createElement('span', liElementSendList, `To: ${recipient}`);
        createElement('span', liElementSendList, ` Title: ${title}`);
        const divElement = createElement('div', liElementSendList, null, ['btn']);
        const deleteButton = createElement('button', divElement, 'Delete', ['delete'], null, 'submit');
        e.target.parentElement.parentElement.remove();

        deleteButton.addEventListener('click', deleteMail);
    }

    function deleteMailFromSend(e) {
        const {recipient, title, message} = storyState;
        const liElementDeleteList = createElement('li', otherSelectors.deleteList);
        createElement('span', liElementDeleteList, `To: ${recipient}`);
        createElement('span', liElementDeleteList, ` Title: ${title}`);
        e.target.parentElement.parentElement.remove();
    }

    function deleteMail(e) {
        const {recipient, title, message} = storyState;
        const liElementDeleteList = createElement('li', otherSelectors.deleteList);
        createElement('span', liElementDeleteList, `To: ${recipient}`);
        createElement('span', liElementDeleteList, ` Title: ${title}`);
        e.target.parentElement.parentElement.remove();
    }

    function clearInputs() {
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

solve()