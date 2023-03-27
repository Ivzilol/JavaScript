function attachEvents() {
    loadButton.addEventListener('click', loadAll);
    addButton.addEventListener('click', addTodo);
}

let baseUrl = 'http://localhost:3030/jsonstore/tasks/';
let todoListElement = document.getElementById('todo-list');
let loadButton = document.getElementById('load-button');
let addButton = document.getElementById('add-button');

function loadAll(e) {
    if (e) {
        e.preventDefault()
    }
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            todoListElement.replaceChildren();
            Object.values(data).forEach(todo => {
                let liElement = document.createElement('li');
                let spanElement = document.createElement('span');
                spanElement.textContent = `${todo.name}`;
                let removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.setAttribute('id', todo._id);
                removeButton.addEventListener('click', removeTodo);
                let editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.setAttribute('id', todo._id);
                editButton.addEventListener('click', editTodo);
                liElement.appendChild(spanElement);
                liElement.appendChild(removeButton);
                liElement.appendChild(editButton);
                todoListElement.appendChild(liElement);
            });
        });
}

function addTodo(e) {
    if (e) {
        e.preventDefault();
    }
    let todo = document.getElementById('title');
    if (todo.value.trim() === '' || todo.value == null) {
        return;
    }
    fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: todo.value.trim()
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error("Error creating new record!")
        }
        return response.json();
    }).catch(err => alert(err));
    loadAll();
    todo.value = '';
}

function removeTodo(e) {
    let currentId = e.target.id
    if (e.target.textContent === 'Remove') {
        fetch(`${baseUrl}${currentId}`, {
            method: "DELETE"
        })
            .then(response => {
                loadAll()
                return response.json()
            })
            .catch(err => alert(err));
    }
}

function editTodo(e) {
    if (e) {
        e.preventDefault();
    }
    const parentElement = e.target.parentElement;
    e.target.parentElement.innerHTML = `
  <input value='${
        e.target.parentElement.querySelector("span").textContent
    }'/>
    <button id=${e.target.id} class="remove-button">Remove</button>
    <button id=${e.target.id} class="submit-button">Submit</button>`;
    parentElement.querySelector('.remove-button')
        .addEventListener('click', removeTodo);
    parentElement.querySelector('.submit-button')
        .addEventListener('click', saveEditTodo);
}

function saveEditTodo(e) {
    if (e) {
        e.preventDefault();
    }
    let currentId = e.target.id;
    let inputValue = e.target.parentElement.querySelector('input').value;
    const headers = {
        method: "PATCH",
        body: JSON.stringify({name: inputValue})
    };
    fetch(`${baseUrl}${currentId}`, headers)
        .then(() => loadAll()
        ).catch(err => alert(err));
}

attachEvents();
