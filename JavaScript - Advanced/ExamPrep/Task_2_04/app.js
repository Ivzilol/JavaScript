window.addEventListener("load", solve);

function solve() {
    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let ageElement = document.getElementById('age');
    let genderElement = document.getElementById('genderSelect');
    let descriptionElement = document.getElementById('task');
    let buttonSubmitElement = document.getElementById('form-btn');
    let inProgressElement = document.getElementById('in-progress');
    let progressCountElement = document.getElementById('progress-count');
    let finishedElement = document.getElementById('finished');
    let clearButton = document.getElementById('clear-btn');
    buttonSubmitElement.addEventListener('click', addCookingInformation);

    function addCookingInformation(e) {
        e.preventDefault();
        if (firstNameElement.value === ''
            || lastNameElement.value === ''
            || ageElement.value === ''
            || descriptionElement.value === '') {
            return;
        }
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'each-line');

        let sectionElement = document.createElement('article');


        let fullNameElement = document.createElement('h4');
        fullNameElement.textContent = `${firstNameElement.value} ${lastNameElement.value}`;


        let genderAndAge = document.createElement('p');
        genderAndAge.textContent = `${genderElement.value}, ${ageElement.value}`


        let description = document.createElement('p');
        description.textContent = `Dish description: ${descriptionElement.value}`;


        let buttonEdit = document.createElement('button');
        buttonEdit.setAttribute('class', 'edit-btn');
        buttonEdit.textContent = 'Edit';


        let completeButton = document.createElement('button');
        completeButton.setAttribute('class', 'complete-btn');
        completeButton.textContent = 'Mark as complete';

        sectionElement.appendChild(fullNameElement);
        sectionElement.appendChild(genderAndAge);
        sectionElement.appendChild(description);

        liElement.appendChild(sectionElement);
        liElement.appendChild(buttonEdit);
        liElement.appendChild(completeButton);

        inProgressElement.appendChild(liElement);
        progressCountElement.textContent = '1';

        let editFirstName = firstNameElement.value;
        let editLastName = lastNameElement.value;
        let editAge = ageElement.value;
        let editGender = genderElement.value;
        let editDescription = descriptionElement.value;

        firstNameElement.value = '';
        lastNameElement.value = '';
        ageElement.value = '';
        genderElement.value = '';
        descriptionElement.value = '';

        buttonEdit.addEventListener('click', editInfo);

        function editInfo() {
            firstNameElement.value = editFirstName;
            lastNameElement.value = editLastName
            ageElement.value = editAge;
            genderElement.value = editGender;
            descriptionElement.value = editDescription;

            liElement.remove();
            progressCountElement.textContent = '0';
        }

        completeButton.addEventListener('click', continueEvent);

        function continueEvent() {
            let finishedLiElement = document.createElement('li');
            finishedLiElement.setAttribute('class', 'each-line');

            let finishedArticleElement;
            finishedArticleElement = sectionElement;

            finishedLiElement.appendChild(finishedArticleElement);

            finishedElement.appendChild(finishedLiElement);

            progressCountElement.textContent = '0';
        }

        clearButton.addEventListener('click', clearAll);

        function clearAll() {
            finishedElement.remove();
        }
    }
}
