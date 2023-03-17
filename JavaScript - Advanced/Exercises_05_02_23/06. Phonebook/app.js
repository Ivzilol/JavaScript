function attachEvents() {
    document.querySelector('#btnLoad').addEventListener('click', load);
    document.querySelector("#btnCreate").addEventListener('click', create);
}

let phoneBook = document.querySelector('#phonebook');
let baseUrl = 'http://localhost:3030/jsonstore/phonebook';

function load() {
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            phoneBook.replaceChildren();
            Object.values(data).forEach(p => {
                let liElement = document.createElement('li');
                liElement.textContent = `${p.person}: ${p.phone}`;
                let buttonDelete = document.createElement('button');
                buttonDelete.textContent = 'Delete';
                buttonDelete.setAttribute('id', p._id);
                buttonDelete.addEventListener('click', remove);
                liElement.appendChild(buttonDelete);
                phoneBook.appendChild(liElement);
            })
        })
}

function create() {
    let name = document.querySelector('#person');
    let phone = document.querySelector('#phone');

    if (!name.value || !phone.value) {
        return;
    }
    fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            person: name.value.trim(),
            phone: phone.value.trim()
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error("Error creating new record!")
        }
        return response.json();
    })
        .catch(err => alert(err));
    load();
    name.value = '';
    phone.value = '';

}

function remove(e) {
    let currentId = e.target.id
    if (e.target.textContent === 'Delete') {
        fetch(`${baseUrl}/${currentId}`, {
            method: 'DELETE',
        })
            .then(response => {
                load();
                return response.json();
            })
            .catch(err => alert(err.message));
    }

}

attachEvents();