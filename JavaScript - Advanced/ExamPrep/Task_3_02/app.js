function attachEvents() {
    loadProductsButton.addEventListener('click', loadAllProducts);
    addProductsButton.addEventListener('click', addProducts);
}


let baseUrl = 'http://localhost:3030/jsonstore/grocery/';
let tableBody = document.getElementById('tbody');
let loadProductsButton = document.getElementById('load-product');
let addProductsButton = document.getElementById('add-product');
let updateProductButton = document.getElementById('update-product');
updateProductButton.disabled = true;


function loadAllProducts(e) {
    if (e) {
        e.preventDefault();
    }
    tableBody.innerHTML = '';
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            Object.values(data).forEach(product => {
                let trElement = document.createElement('tr');
                let nameTdElement = document.createElement('td');
                nameTdElement.setAttribute('class', 'name-product')
                nameTdElement.textContent = `${product.product}`;
                let countTdElement = document.createElement('td');
                countTdElement.setAttribute('class', 'count-product');
                countTdElement.textContent = `${product.count}`;
                let priceTdElement = document.createElement('td');
                priceTdElement.setAttribute('class', 'price-product');
                priceTdElement.textContent = `${product.price}`;
                let buttonsTdElement = document.createElement('td');
                let buttonUpdateElement = document.createElement('button');
                buttonUpdateElement.setAttribute('class', 'update');
                buttonUpdateElement.setAttribute('id', product._id);
                buttonUpdateElement.textContent = 'Update';
                buttonUpdateElement.addEventListener('click', editProduct);
                let buttonDeleteElement = document.createElement('button');
                buttonDeleteElement.setAttribute('class', 'delete');
                buttonDeleteElement.setAttribute('id', product._id);
                buttonDeleteElement.textContent = 'Delete';
                buttonDeleteElement.addEventListener('click', deleteProduct);
                buttonsTdElement.appendChild(buttonUpdateElement);
                buttonsTdElement.appendChild(buttonDeleteElement);
                trElement.appendChild(nameTdElement);
                trElement.appendChild(countTdElement);
                trElement.appendChild(priceTdElement);
                trElement.appendChild(buttonsTdElement);
                tableBody.appendChild(trElement);
            });
        });
}

function addProducts(e) {
    if (e) {
        e.preventDefault();
    }
    let nameProduct = document.getElementById('product');
    let countProduct = document.getElementById('count');
    let priceProduct = document.getElementById('price');
    if (nameProduct.value === '' || countProduct.value === '' || priceProduct.value === '') {
        return;
    }
    fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            product: nameProduct.value.trim(),
            count: countProduct.value.trim(),
            price: priceProduct.value.trim()
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error creating new record!');
            }
            return response.json()
        }).catch(err => alert(err));
    loadAllProducts();
    nameProduct.value = '';
    countProduct.value = '';
    priceProduct.value = '';
}

function deleteProduct(e) {
    if (e) {
        e.preventDefault()
    }
    let currentId = e.target.id;
    if (e.target.textContent === 'Delete') {
        fetch(`${baseUrl}${currentId}`, {
            method: "DELETE"
        })
            .then(response => {
                loadAllProducts();
                return response.json()
            }).catch(error => alert(error));
    }
}

function editProduct(e) {
    if (e) {
        e.preventDefault();
    }
    let product = e.target.parentNode.parentNode.querySelector('.name-product').textContent;
    let count = e.target.parentNode.parentNode.querySelector('.count-product').textContent;
    let price = e.target.parentNode.parentNode.querySelector('.price-product').textContent;

    document.getElementById('product').value = product;
    document.getElementById('count').value = count;
    document.getElementById('price').value = price;

    updateProductButton.disabled = false;
    let currentId = e.target.id;
    updateProductButton.addEventListener('click', updateProduct);

    function updateProduct(e) {
        if (e) {
            e.preventDefault()
        }
        let editProductValue = document.getElementById('product').value;
        let editCountValue = document.getElementById('count').value;
        let editPriceValue = document.getElementById('price').value;
        const headers = {
            method: "PATCH",
            body: JSON.stringify({
                product: editProductValue,
                count: editCountValue,
                price: editPriceValue,
            })
        };
        console.log(headers);
        fetch(`${baseUrl}${currentId}`, headers)
            .then(() => loadAllProducts()
            ).catch(error => alert(error));
        updateProductButton.disabled = true;
    }
}

attachEvents()