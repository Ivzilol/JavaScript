const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

let tableBody = document.getElementById('tbody');
const loadBtn = document.getElementById('load-product');
loadBtn.addEventListener('click', loadAllProducts);
const addBtn = document.getElementById('add-product');
addBtn.addEventListener('click', addProduct);
const updateBtn = document.getElementById('update-product');

let productIdObjs = {};

async function loadAllProducts(event) {
    if (event) {
        event.preventDefault();
    }
    tableBody.innerHTML = '';

    let response = await fetch(BASE_URL);
    let data = await response.json();

    for (const currentObject of Object.values(data)) {
        productIdObjs[currentObject.product] = currentObject._id;

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.className = 'name';
        let td2 = document.createElement('td');
        td2.className = 'count-product';
        let td3 = document.createElement('td');
        td3.className = 'product-price';
        let td4 = document.createElement('td');
        td4.className = 'btn';
        let button1 = document.createElement('button');
        button1.className = 'update';
        button1.addEventListener('click', editProduct);
        let button2 = document.createElement('button');
        button2.className = 'delete';
        button2.addEventListener('click', deleteProduct);

        td1.textContent = currentObject.product;
        td2.textContent = currentObject.count;
        td3.textContent = currentObject.price;
        button1.textContent = 'Update';
        button2.textContent = 'Delete';

        td4.appendChild(button1);
        td4.appendChild(button2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tableBody.appendChild(tr);
    }
}

async function addProduct(event) {
    event.preventDefault();

    let name = document.getElementById('product').value;
    let count = document.getElementById('count').value;
    let price = document.getElementById('price').value;
    let data = {product: name, count: count, price: price}
    cleanInputs();

    await fetch(BASE_URL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    loadAllProducts();
}

async function deleteProduct(event) {
    let product = event.target.parentNode.parentNode.firstChild.textContent;
    let id = getId(product);
    await fetch(BASE_URL + id, {
        method: 'delete'
    });

    loadAllProducts();
}

function editProduct(event) {
    let product = event.target.parentNode.parentNode.querySelector('.name').textContent;
    let count = event.target.parentNode.parentNode.querySelector('.count-product').textContent;
    let price = event.target.parentNode.parentNode.querySelector('.product-price').textContent;

    document.getElementById('product').value = product;
    document.getElementById('count').value = count;
    document.getElementById('price').value = price;

    updateBtn.disabled = false;
    updateBtn.addEventListener('click', onUpdate);

    id = getId(product);

    async function onUpdate() {

        let editedProduct = document.getElementById('product').value;
        let editedCount =  document.getElementById('count').value;
        let editedPrice =  document.getElementById('price').value;
        let data = {product: editedProduct, count: editedCount, price: editedPrice}

        await fetch(BASE_URL + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        loadAllProducts();
        cleanInputs();
    }
}

function getId(product) {
    return productIdObjs[product];
}

function cleanInputs() {
    document.getElementById('product').value = '';
    document.getElementById('count').value = '';
    document.getElementById('price').value = '';
}