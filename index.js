const displayPrevious = document.getElementById('previous-value');
const displayCurrent = document.getElementById('current-value');
const buttonNumbers = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');

const display = new Display(displayPrevious, displayCurrent);

buttonNumbers.forEach(btn => {
    btn.addEventListener('click', () => display.addNumber(btn.innerHTML));
});

buttonOperator.forEach(btn => {
    btn.addEventListener('click', () => display.computation(btn.value));
});

