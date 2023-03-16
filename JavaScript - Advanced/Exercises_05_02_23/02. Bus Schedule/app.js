function solve() {

    let infoElement = document.querySelector('div#info span.info');
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');

    let busStop = {
        next: 'depot'
    }

    function depart() {
        departButton.disabled = true;
        let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                busStop = JSON.parse(JSON.stringify(data));
                infoElement.textContent = `Next stop ${busStop.name}`
            }).catch(error => console.log(error))
        arriveButton.disabled = false;
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${busStop.name}`
        departButton.disabled = false;
        arriveButton.disabled = true;
    }
    return {
        depart,
        arrive
    };
}

let result = solve();