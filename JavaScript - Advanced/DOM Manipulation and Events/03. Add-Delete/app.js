function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;
    let deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    liElement.appendChild(deleteButton);
    deleteButton.addEventListener('click', onDelete);
    document.getElementById('items').appendChild(liElement);
    input.value = '';
    function onDelete(event) {
        event.target.parentElement.remove();
    }
}



