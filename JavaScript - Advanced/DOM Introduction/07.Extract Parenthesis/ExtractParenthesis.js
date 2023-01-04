function extract(content) {
    const text = document.getElementById('content').textContent;
    let result = '';
    
    const patter = /\((.+?)\)/g;
    let match = patter.exec(text);
    while(match != null) {
        result += match[1] + '; ';
        
        match = patter.exec(text);
    }
    return result;
}