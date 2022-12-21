
function change(text) {
    let result = text.toUpperCase()
    .split(/[\W]+/)
    .filter(w => w.length > 0)
    .join(", ")

    console.log(result);
}

change('Hi, how are you?');
change('hello')

