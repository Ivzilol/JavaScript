function getInfo() {
    //1. get all element by ID;
    //2.fetch data from server
    //3.forEach bus create li element with text
    //4.append li tags to ul
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let inputElement = document.getElementById('stopId');
    let ulElement = document.getElementById('buses');
    let divElement = document.getElementById('stopName');

    fetch(`${baseUrl}/${inputElement.value}`)
        .then(response => response.json())
        .then(data => {
            let buses = data.buses;
            divElement.textContent = data.name;
            ulElement.innerHTML = '';
            Object.keys(buses).forEach(bus => {
                let liElement = document.createElement('li');
                liElement.textContent = `Bus ${bus} arrive in ${buses[bus]} minutes`;
                ulElement.appendChild(liElement);
            })
        }).catch(errorMessage => {
        divElement.textContent = "Error";
        ulElement.innerHTML = '';
    })
}