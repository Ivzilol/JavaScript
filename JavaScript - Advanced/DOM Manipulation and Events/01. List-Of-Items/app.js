function addItem() {
    let content = document.getElementById('newItemText').value;
    let liElement = document.createElement('li');
    liElement.textContent = content;
    document.getElementById('items').appendChild(liElement);
    document.getElementById('newItemText').value = '';
}