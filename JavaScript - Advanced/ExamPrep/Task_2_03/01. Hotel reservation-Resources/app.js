window.addEventListener('load', solve);

function solve() {
    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let dateInElement = document.getElementById('date-in');
    let dateOutElement = document.getElementById('date-out');
    let numberGuestsElement = document.getElementById('people-count');
    let buttonNextElement = document.getElementById('next-btn');
    let reservationElement = document.querySelector('.info-list');
    let confirmElement = document.querySelector('.confirm-list');
    let verification = document.getElementById('verification');
    buttonNextElement.addEventListener('click', addReservationInfo);

    function addReservationInfo(e) {
        e.preventDefault();
        if (firstNameElement.value === ''
            || lastNameElement.value === ''
            || dateInElement.value === ''
            || dateOutElement.value === ''
            || numberGuestsElement.value === '') {
            return;
        }
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'reservation-element');

        let articleElement = document.createElement('article');

        let fullName = document.createElement("h3");
        fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

        let dateIn = document.createElement('p');
        dateIn.textContent = `From date: ${dateInElement.value}`;

        let dateOut = document.createElement('p');
        dateOut.textContent = `To date: ${dateOutElement.value}`;

        let numberPeople = document.createElement('p');
        numberPeople.textContent = `For ${numberGuestsElement.value} people`;

        let editButton = document.createElement('button');
        editButton.setAttribute('class', 'edit-btn');
        editButton.textContent = 'Edit';

        let continueButton = document.createElement('button');
        continueButton.setAttribute('class', 'continue-btn');
        continueButton.textContent = 'Continue';

        articleElement.appendChild(fullName);
        articleElement.appendChild(dateIn);
        articleElement.appendChild(dateOut);
        articleElement.appendChild(numberPeople);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButton);
        liElement.appendChild(continueButton);

        reservationElement.appendChild(liElement);

        let editFirstName = firstNameElement.value;
        let edinLastName = lastNameElement.value;
        let editDateIn = dateInElement.value;
        let editDateOut = dateOutElement.value;
        let editNumberPeople = numberGuestsElement.value;

        firstNameElement.value = '';
        lastNameElement.value = '';
        dateInElement.value = '';
        dateOutElement.value = '';
        numberGuestsElement.value = '';

        buttonNextElement.disable = true;

        editButton.addEventListener('click', editInfo);

        function editInfo() {
            firstNameElement.value = editFirstName;
            lastNameElement.value = edinLastName;
            dateInElement.value = editDateIn;
            dateOutElement.value = editDateOut;
            numberGuestsElement.value = editNumberPeople;

            liElement.remove();
            buttonNextElement.disable = false;
        }

        continueButton.addEventListener('click', continueEvent);

        function continueEvent() {
            let liConfirmElement = document.createElement('li');
            liConfirmElement.setAttribute('class', 'reservation-content');

            let articleElementContinue;
            articleElementContinue = articleElement;

            let confirmButton = document.createElement('button');
            confirmButton.setAttribute('class', 'confirm-btn');
            confirmButton.textContent = 'Confirm';

            let cancelButton = document.createElement('button');
            cancelButton.setAttribute('class', 'cancel-btn');
            cancelButton.textContent = 'Cansel';

            liConfirmElement.appendChild(articleElementContinue);
            liConfirmElement.appendChild(confirmButton);
            liConfirmElement.appendChild(cancelButton);
            liElement.remove();
            confirmElement.appendChild(liConfirmElement);

            confirmButton.addEventListener('click', onConfirm);

            function onConfirm() {
                liConfirmElement.remove();
                buttonNextElement.disable = false;
                verification.setAttribute('class', 'reservation-confirmed');
                verification.textContent = 'Confirmed';
            }

            cancelButton.addEventListener('click', cancelReservation);

            function cancelReservation() {
                liConfirmElement.remove();
                buttonNextElement.disable = false;

                verification.setAttribute('class', 'reservation-cancelled');
                verification.textContent = 'Cancelled';
            }
        }
    }
}



    
    
