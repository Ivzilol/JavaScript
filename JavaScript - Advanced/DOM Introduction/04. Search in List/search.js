function search() {
    let listElements = document.querySelectorAll('ul#towns li');
    let resultElement = document.getElementById('result');
    let searchText = document.getElementById('searchText').value;
    let matches = 0;

    for (const text of listElements) {
        text.style.fontWeight = '';
        text.style.textDecoration = '';
    }

    for (const textElement of listElements) {
        let text = textElement.textContent;
        if (text.match(searchText)) {
            matches++;
            textElement.style.fontWeight = 'bold';
            textElement.style.textDecoration = 'underline';
        }
    }
    resultElement.textContent = `${matches} matches found`
}
