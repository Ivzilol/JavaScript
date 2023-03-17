
function attachEvents() {

    document.querySelector('#refresh').addEventListener('click', displayComments);
    document.querySelector('#submit').addEventListener('click', addComment);

}

let baseUrl = 'http://localhost:3030/jsonstore/messenger';

function displayComments() {
    fetch(baseUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error');
            }
            return res.json();
        })
        .then(data => {
            let textArea = document.querySelector('#messages');
            let comments = [];
            Object.values(data).forEach(u => comments.push(`${u.author}: ${u.content}`));
            textArea.value = comments.join('\n')
        })
        .catch(error => alert(error.message));
}

function addComment() {
    let authorName = document.querySelector('[name="author"]');
    let content = document.querySelector('[name="content"]');

    if (!authorName.value || !content.value) {
        return;
    }

    fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            author: authorName.value.trim(),
            content: content.value.trim()
        })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Error creating new record');
            }
            return res.json();
        })
        .catch(err => alert(err));
    displayComments();
    authorName.value = '';
    content.value = '';
}



attachEvents();