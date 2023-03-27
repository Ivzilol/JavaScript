window.addEventListener("load", solve);

function solve() {
    let titleElement = document.getElementById('post-title');
    let categoryElement = document.getElementById('post-category');
    let contentElement = document.getElementById('post-content');
    let publishButtonElement = document.getElementById('publish-btn');
    let reviewElement = document.getElementById('review-list');
    let publishedElement = document.getElementById('published-list');
    let clearButton = document.getElementById('clear-btn');
    publishButtonElement.addEventListener('click', publish);

    function publish(e) {
        e.preventDefault();
        if (titleElement.value.trim() === ''
            || categoryElement.value.trim() === ''
            || contentElement.value.trim() === '') {
            return;
        }

        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'rpost');

        let articleElement = document.createElement('article');

        let titleElementView = document.createElement('h4');
        titleElementView.textContent = `${titleElement.value}`;

        let categoryElementView = document.createElement('p');
        categoryElementView.textContent = `Category: ${categoryElement.value}`;

        let contentElementView = document.createElement('p');
        contentElementView.textContent = `Content: ${contentElement.value}`;

        let editButton = document.createElement('button');
        editButton.setAttribute('class', 'action-btn edit');
        editButton.textContent = 'Edit';

        let approveButton = document.createElement('button');
        approveButton.setAttribute('class', 'action-btn approve');
        approveButton.textContent = 'Approve';

        articleElement.appendChild(titleElementView);
        articleElement.appendChild(categoryElementView);
        articleElement.appendChild(contentElementView);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButton);
        liElement.appendChild(approveButton);

        reviewElement.appendChild(liElement);

        let editTitle = titleElement.value;
        let editCategory = categoryElement.value;
        let editContent = contentElement.value;

        titleElement.value = '';
        categoryElement.value = '';
        contentElement.value = '';

        editButton.addEventListener('click', editPublish);

        function editPublish() {
            titleElement.value = editTitle;
            categoryElement.value = editCategory;
            contentElement.value = editContent;

            liElement.remove();
        }

        approveButton.addEventListener('click', approve);

        function approve() {
            let publishedLiElement = document.createElement('li');
            publishedLiElement.setAttribute('class', 'rpost');

            let publishedArticleElement = document.createElement('article');

            let publishedTitleElement = document.createElement('h4');
            publishedTitleElement.textContent = `${editTitle}`;

            let publishedCategoryElement = document.createElement('p');
            publishedCategoryElement.textContent = `Category: ${editCategory}`;

            let publishedContentElement = document.createElement('p');
            publishedContentElement.textContent = `Content: ${editContent}`;

            publishedArticleElement.appendChild(publishedTitleElement);
            publishedArticleElement.appendChild(publishedCategoryElement);
            publishedArticleElement.appendChild(publishedContentElement);

            publishedLiElement.appendChild(publishedArticleElement);

            publishedElement.appendChild(publishedLiElement);

            liElement.remove();
        }

        clearButton.addEventListener('click', clearAll);

        function clearAll() {
            publishedElement.remove();
        }
    }
}
