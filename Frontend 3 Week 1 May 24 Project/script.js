let count = 0;
const countDisplay = document.getElementById('count');
const errorDisplay = document.getElementById('error');
const clearButton = document.getElementById('clear');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        errorDisplay.style.display = 'none';
    } else {
        errorDisplay.style.display = 'block';
    }
    updateDisplay();
});

clearButton.addEventListener('click', () => {
    count = 0;
    clearButton.classList.add('hidden');
    updateDisplay();
});

function updateDisplay() {
    countDisplay.innerText = count;
    if (count > 1) {
        clearButton.classList.remove('hidden');
    } else {
        clearButton.classList.add('hidden');
    }
}
