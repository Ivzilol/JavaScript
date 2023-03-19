window.addEventListener('load', solve);

function solve() {
    let genreElement = document.getElementById("genre");
    let nameOfTheSongElement = document.getElementById('name');
    let authorOfTheSongElement = document.getElementById('author');
    let dateElement = document.getElementById('date');
    let addButtonElement = document.getElementById('add-btn');
    let allHitsContainer = document.querySelector('.all-hits-container');
    addButtonElement.addEventListener('click', onPublish);

    function onPublish(e) {
        e.preventDefault();
        if (genreElement.value === ''
            || nameOfTheSongElement.value === ''
            || authorOfTheSongElement.value === ''
            || dateElement.value === '') {
            return;
        }
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'hits-info');

        let imgElement = document.createElement('img');
        imgElement.src = "./static/img/img.png"
        divElement.appendChild(imgElement);

        let genreElementCreate = document.createElement('h2');
        genreElementCreate.textContent = `Genre: ${genreElement.value}`;
        divElement.appendChild(genreElementCreate);

        let nameElement = document.createElement('h2');
        nameElement.textContent = `Name: ${nameOfTheSongElement.value}`;
        divElement.appendChild(nameElement);

        let authorElement = document.createElement('h2');
        authorElement.textContent = `Author: ${authorOfTheSongElement.value}`;
        divElement.appendChild(authorElement);

        let dateElementCreate = document.createElement('h3');
        dateElementCreate.textContent = `Date: ${dateElement.value}`;
        divElement.appendChild(dateElementCreate);

        let saveButtonElement = document.createElement('button');
        saveButtonElement.setAttribute('class', 'save-btn');
        saveButtonElement.textContent = 'Save song';
        saveButtonElement.addEventListener('click', save);
        divElement.appendChild(saveButtonElement);

        let likeButtonElement = document.createElement('button');
        likeButtonElement.setAttribute('class', 'like-btn');
        likeButtonElement.textContent = 'Like song';
        likeButtonElement.addEventListener('click', like);
        divElement.appendChild(likeButtonElement);

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.setAttribute('class', 'delete-btn');
        deleteButtonElement.textContent = 'Delete';
        divElement.appendChild(deleteButtonElement);

        allHitsContainer.appendChild(divElement);

        genreElement.value = '';
        nameOfTheSongElement = '';
        authorOfTheSongElement.value = '';
        dateElement.value = '';

        addButtonElement.disable = true;


    }

    function like(ev) {
        ev.preventDefault();
        let allLikes = document.querySelector('#total-likes p');
        let likes = Number(allLikes.textContent.split(': ')[1]);
        allLikes.textContent = `Total Likes: ${likes + 1}`;
        ev.target.disabled = true;
    }

    function save(e) {
        e.preventDefault()
        let saveContainer = document.getElementsByClassName('saved-container')[0];
        let newElement = document.createElement('div');
        newElement.setAttribute('class', 'hits-info');
        newElement.innerHTML = e.target.parentElement.innerHTML;
        newElement.children[7].addEventListener('click', deleteElement);
        newElement.children[6].remove();
        newElement.children[5].remove();
        saveContainer.appendChild(newElement);
        e.target.parentElement.remove();
    }

    function deleteElement(event) {
        event.preventDefault();
        event.target.parentElement.remove();
    }
}