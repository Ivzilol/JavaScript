function solve() {
    const input = {
      name: document.getElementById('task'),
      description: document.getElementById('description'),
      data: document.getElementById('date'),
    };
    const [_, openSection, progressSection, finishedSection] =
        Array.from(document.querySelectorAll('section')).map(e => e.children[1]);

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();

        const article = document.createElement('article');
        article.appendChild(createElement('h3', input.name.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.data.value}`));
        const div = createElement('div', '', 'flex');

        const startButton = createElement('button', 'Start', 'green');
        const deleteButton = createElement('button', 'Delete', 'red');
        const finisButton = createElement('button', 'Finish', 'orange');
        div.appendChild(startButton);
        div.appendChild(deleteButton);
        article.appendChild(div);
        openSection.appendChild(article);
        Object.values(input).forEach(i => i.value = '');
        startButton.addEventListener('click', onStart);
        deleteButton.addEventListener('click', onDelete);
        finisButton.addEventListener('click', onFinish);

        function onDelete() {
            article.remove();
        }

        function onStart() {
            startButton.remove();
            div.appendChild(finisButton);
            progressSection.appendChild(article);
        }

        function onFinish() {
            div.remove();
            finishedSection.appendChild(article);
        }
    }

    function createElement(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    }
}