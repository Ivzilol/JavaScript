function attachGradientEvents() {
    let gradient =
        document.getElementById('gradient');
        gradient.addEventListener('mousemove', onMouseOver);
        let result = document.getElementById('result');

    function onMouseOver(ev) {
        result.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%';
    }
}