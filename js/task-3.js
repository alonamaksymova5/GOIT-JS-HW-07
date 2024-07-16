const forInn = document.querySelector('#name-input');
const forOut = document.querySelector('#name-output');

forInn.addEventListener('input', handleInput);

function handleInput(event) {
    const inputCurrent = event.currentTarget.value.trim();

    if (inputCurrent === '') {
        forOut.textContent = 'Anonymous';
    }
    else {
        forOut.textContent = inputCurrent;
    }
}