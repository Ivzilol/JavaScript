const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
const loadButton = document.getElementById('load-board-btn');
const todoSection = document.querySelector('#todo-section > ul');
const inProgressSection = document.querySelector('#in-progress-section > ul');
const codeReviewSection = document.querySelector('#code-review-section > ul');
const doneSection = document.querySelector('#done-section > ul');
let addTask = document.getElementById('create-task-btn');

function attachEvents() {
    loadButton.addEventListener('click', loadBoard);
    addTask.addEventListener('click', createTask);
}

function loadBoard(e) {
    if (e) {
        e.preventDefault()
    }
    todoSection.innerHTML = '';
    inProgressSection.innerHTML = '';
    codeReviewSection.innerHTML = '';
    doneSection.innerHTML = '';
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {

            Object.values(data).forEach(item => {
                if (item.status === 'ToDo') {
                    const liElement = document.createElement('li');
                    liElement.setAttribute('class', 'task');
                    const titleElement = document.createElement('h3');
                    titleElement.textContent = `${item.title}`;
                    const pElement = document.createElement('p');
                    pElement.textContent = `${item.description}`;
                    const buttonElement = document.createElement('button');
                    buttonElement.setAttribute('id', item._id);
                    buttonElement.textContent = 'Move to In Progress';
                    liElement.appendChild(titleElement);
                    liElement.appendChild(pElement);
                    liElement.appendChild(buttonElement);
                    todoSection.appendChild(liElement);
                    buttonElement.addEventListener('click', moveTask);
                } else if (item.status === 'In Progress') {
                    const liElement = document.createElement('li');
                    liElement.setAttribute('class', 'task');
                    const titleElement = document.createElement('h3');
                    titleElement.textContent = `${item.title}`;
                    const pElement = document.createElement('p');
                    pElement.textContent = `${item.description}`;
                    const buttonElement = document.createElement('button');
                    buttonElement.setAttribute('id', item._id);
                    buttonElement.textContent = 'Move to Code Review';
                    liElement.appendChild(titleElement);
                    liElement.appendChild(pElement);
                    liElement.appendChild(buttonElement);
                    inProgressSection.appendChild(liElement);
                    buttonElement.addEventListener('click', moveTask);
                } else if (item.status === 'Code Review') {
                    const liElement = document.createElement('li');
                    liElement.setAttribute('class', 'task');
                    const titleElement = document.createElement('h3');
                    titleElement.textContent = `${item.title}`;
                    const pElement = document.createElement('p');
                    pElement.textContent = `${item.description}`;
                    const buttonElement = document.createElement('button');
                    buttonElement.setAttribute('id', item._id);
                    buttonElement.textContent = 'Move to Done';
                    liElement.appendChild(titleElement);
                    liElement.appendChild(pElement);
                    liElement.appendChild(buttonElement);
                    codeReviewSection.appendChild(liElement);
                    buttonElement.addEventListener('click', moveTask);
                } else {
                    const liElement = document.createElement('li');
                    liElement.setAttribute('class', 'task');
                    const titleElement = document.createElement('h3');
                    titleElement.textContent = `${item.title}`;
                    const pElement = document.createElement('p');
                    pElement.textContent = `${item.description}`;
                    const buttonElement = document.createElement('button');
                    buttonElement.setAttribute('id', item._id);
                    buttonElement.textContent = 'Close';
                    liElement.appendChild(titleElement);
                    liElement.appendChild(pElement);
                    liElement.appendChild(buttonElement);
                    doneSection.appendChild(liElement);
                    buttonElement.addEventListener('click', moveTask);
                }

            });
        });
}

function moveTask(e) {
    if (e) {
        e.preventDefault()
    }

    let currentId = e.target.id;
    if (e.target.textContent === 'Move to In Progress') {
        const headers = {
            method: "PATCH",
            body: JSON.stringify({
                status: 'In Progress'
            })
        };
        fetch(`${baseUrl}${currentId}`, headers)
            .then(() => loadBoard()
            ).catch(error => alert(error))

    } else if (e.target.textContent === 'Move to Code Review') {
        const headers = {
            method: "PATCH",
            body: JSON.stringify({
                status: 'Code Review'
            })
        };
        fetch(`${baseUrl}${currentId}`, headers)
            .then(() => loadBoard()
            ).catch(error => alert(error))
    } else if (e.target.textContent === 'Move to Done') {
        const headers = {
            method: "PATCH",
            body: JSON.stringify({
                status: 'Done'
            })
        };
        fetch(`${baseUrl}${currentId}`, headers)
            .then(() => loadBoard()
            ).catch(error => alert(error))
    } else if (e.target.textContent === 'Close') {
        fetch(`${baseUrl}${currentId}`, {
            method: "DELETE"
        })
            .then(response => {
                loadBoard()
                return response.json()
            })
            .catch(error => alert(error));
    }
}

function createTask(e) {
    if (e) {
        e.preventDefault()
    }
    let taskTitle = document.getElementById('title');
    let description = document.getElementById('description');
    if (taskTitle.value === ''
        || description.value === '') {
        return;
    }
    fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: taskTitle.value,
            description: description.value,
            status: 'ToDo'
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Error creating new record!');
        }
        return response.json();
    }).catch(error => alert(error));
    loadBoard();
    taskTitle.value = '';
    description.value = '';

}


attachEvents();