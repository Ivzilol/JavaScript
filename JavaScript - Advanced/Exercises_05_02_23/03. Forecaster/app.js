function attachEvents() {
    let inputElement = document.getElementById('location');
    let getButton = document.getElementById('submit');
    let divDisplay = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    let baseUrl = 'http://localhost:3030/jsonstore/forecaster';
    let sunny = '&#x2600';
    let partlySunny = '&#x26C5';
    let overcast = '&#x2601';
    let rain = '&#x2614';
    let degrees = '&#176';
    let code = '';
    let divElementUpcoming = document.createElement('div');
    let divElementCurrent = document.createElement('div');

    getButton.addEventListener('click', (e) => {
        divElementUpcoming.innerHTML = '';
        divElementCurrent.innerHTML = '';

        divElementUpcoming.setAttribute('class', 'forecast-info');
        divElementCurrent.setAttribute('class', 'forecasts');
        divDisplay.style.display = 'inline';

        fetch(`${baseUrl}/locations`)
            .then(response => response.json())
            .then(data => {
                data.forEach(locationInfoObject => {
                    if (locationInfoObject.name === inputElement.value) {
                        return code = locationInfoObject.code;
                    }
                });

                fetch(`${baseUrl}/today/${code}`)
                    .then(response => response.json())
                    .then(data => {
                        let spanGroup = document.createElement('span');
                        let conditionsSpan = document.createElement('span');
                        let temperatureSpan = document.createElement('span');
                        let locationSpan = document.createElement('span');
                        let spanWithIcon = document.createElement('span');

                        spanWithIcon.setAttribute('class', 'condition symbol');
                        spanGroup.setAttribute('class', 'condition');
                        locationSpan.setAttribute('class', 'forecast-data');
                        temperatureSpan.setAttribute('class', 'forecast-data');
                        conditionsSpan.setAttribute('class', 'forecast-data');

                        locationSpan.textContent = data.name;
                        temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
                        conditionsSpan.textContent = data.forecast.condition;
                        let condition = data.forecast.condition;
                        if (condition === 'Sunny') {
                            spanWithIcon.innerHTML = sunny;
                        } else if (condition === 'Partly sunny') {
                            spanWithIcon.innerHTML = partlySunny;
                        } else if (condition === 'Overcast') {
                            spanWithIcon.innerHTML = overcast;
                        } else if (condition === 'Rain') {
                            spanWithIcon.innerHTML = rain;
                        }

                        spanGroup.appendChild(locationSpan);
                        spanGroup.appendChild(temperatureSpan);
                        spanGroup.appendChild(conditionsSpan);
                        divElementCurrent.appendChild(spanWithIcon);
                        divElementCurrent.appendChild(spanGroup);

                        currentDiv.appendChild(divElementCurrent);
                    }).catch(error => {

                });
                fetch(`${baseUrl}/upcoming/${code}`)
                    .then(response => response.json())
                    .then(data => {
                        let nextDays = data.forecast;
                        nextDays.forEach(data => {
                            let spanGroup = document.createElement('span');
                            let conditionsSpan = document.createElement('span');
                            let temperatureSpan = document.createElement('span');
                            let locationSpan = document.createElement('span');
                            let spanWithIcon = document.createElement('span');

                            spanWithIcon.setAttribute('class', 'symbol');
                            spanGroup.setAttribute('class', 'upcoming');
                            temperatureSpan.setAttribute('class', 'forecast-data');
                            conditionsSpan.setAttribute('class', 'forecast-data');

                            temperatureSpan.innerHTML = `${data.low}${degrees}/${data.high}${degrees}`;
                            conditionsSpan.textContent = data.condition;
                            let condition = data.condition;

                            if (condition === 'Sunny') {
                                spanWithIcon.innerHTML = sunny;
                            } else if (condition === 'Partly sunny') {
                                spanWithIcon.innerHTML = partlySunny;
                            } else if (condition === 'Overcast') {
                                spanWithIcon.innerHTML = overcast;
                            } else if (condition === 'Rain') {
                                spanWithIcon.innerHTML = rain;
                            }

                            spanGroup.appendChild(spanWithIcon);
                            spanGroup.appendChild(temperatureSpan);
                            spanGroup.appendChild(conditionsSpan);
                            divElementUpcoming.appendChild(spanGroup);
                            upcomingDiv.appendChild(divElementUpcoming);
                        });
                    })
            });
    });

}

attachEvents();