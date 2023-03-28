function solve() {

    let recipientElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');
    let addButtonElement = document.getElementById('add');
    let resetButtonElement = document.getElementById('reset');
    let listElement = document.getElementById('list');
    let sendListElement = document.querySelector('.sent-list');
    let deleteListElement = document.querySelector('.delete-list');
    addButtonElement.addEventListener('click', addInList);


    function addInList(e) {
        if (e) {
            e.preventDefault()
        }

        if (recipientElement.value === ''
            || titleElement.value === ''
            || messageElement.value === '') {
            return;
        }
        resetButtonElement.addEventListener('click', resetInputs);

        let sendRecipient = recipientElement.value;
        let sendTitle = titleElement.value;
        let sendMessage = messageElement.value;

        let liAddElement = document.createElement('li');

        let addTitleElement = document.createElement('h4');
        addTitleElement.textContent = `Recipient Name: ${sendRecipient}`;

        let addNameElement = document.createElement('h4');
        addNameElement.textContent = `Title: ${sendTitle}`;

        let addMessageElement = document.createElement('span');
        addMessageElement.textContent = `${sendMessage}`;

        let buttonsDivElement = document.createElement('div');

        buttonsDivElement.setAttribute('id', 'list-action');

        let sendButtonElement = document.createElement('button');
        sendButtonElement.setAttribute('type', 'submit');
        sendButtonElement.setAttribute('id', 'send');
        sendButtonElement.textContent = 'Send'
        sendButtonElement.addEventListener('click', send);

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.setAttribute('type', 'submit');
        deleteButtonElement.setAttribute('id', 'delete');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', deleteMessage)

        buttonsDivElement.appendChild(sendButtonElement);
        buttonsDivElement.appendChild(deleteButtonElement);

        liAddElement.appendChild(addNameElement);
        liAddElement.appendChild(addTitleElement);
        liAddElement.appendChild(addMessageElement);
        liAddElement.appendChild(buttonsDivElement);

        listElement.appendChild(liAddElement);


        function resetInputs(e) {
            if (e) {
                e.preventDefault();
            }
            recipientElement.value = '';
            titleElement.value = '';
            messageElement.value = '';
        }

        function send() {

            let sendLiElement = document.createElement('li');

            let sendSpanElementTo = document.createElement('span');
            sendSpanElementTo.textContent = `To: ${sendRecipient} `

            let sendSpanElementTitle = document.createElement('span');
            sendSpanElementTitle.textContent = `Title: ${sendTitle}`;

            let sendDivElement = document.createElement('div');
            sendDivElement.setAttribute('class', 'btn');

            let sendButtonElement = document.createElement('button');
            sendButtonElement.setAttribute('type', 'submit');
            sendButtonElement.setAttribute('class', 'delete');
            sendButtonElement.textContent = 'Delete';
            sendButtonElement.addEventListener('click', deleteMessage);

            sendDivElement.appendChild(sendButtonElement);

            sendLiElement.appendChild(sendSpanElementTo);
            sendLiElement.appendChild(sendSpanElementTitle);
            sendLiElement.appendChild(sendDivElement);

            sendListElement.appendChild(sendLiElement);

            liAddElement.remove();

            function deleteMessage() {
                let deleteLiElement = document.createElement('li');

                let deleteSpanElementTo = document.createElement('span');
                deleteSpanElementTo.textContent = `To: ${sendRecipient} `;

                let deleteSpanElementTitle = document.createElement('span');
                deleteSpanElementTitle.textContent = `Title: ${sendTitle}`;

                deleteLiElement.appendChild(deleteSpanElementTo);
                deleteLiElement.appendChild(deleteSpanElementTitle);

                deleteListElement.appendChild(deleteLiElement);

                sendLiElement.remove();
            }
        }
        function deleteMessage() {
            let deleteLiElement = document.createElement('li');

            let deleteSpanElementTo = document.createElement('span');
            deleteSpanElementTo.textContent = `To: ${sendRecipient} `;

            let deleteSpanElementTitle = document.createElement('span');
            deleteSpanElementTitle.textContent = `Title: ${sendTitle}`;

            deleteLiElement.appendChild(deleteSpanElementTo);
            deleteLiElement.appendChild(deleteSpanElementTitle);

            deleteListElement.appendChild(deleteLiElement);

            liAddElement.remove();
        }
    }
}

solve()