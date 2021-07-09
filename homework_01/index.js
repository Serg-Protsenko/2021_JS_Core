const number = +prompt('Enter first number: ', 0);
const base = +prompt('Enter second number: ', 0);
const errorMessage = 'Некорректный ввод!'

function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}


if (isNumber(number) && isNumber(base)) {
    alert(number.toString(base));
} else {
    alert(errorMessage);
};


const firstValue = +prompt('Enter first number: ', 0);
if (!isNumber(firstValue)) {
    alert(errorMessage);
    die();
}

const secondValue = +prompt('Enter second number: ', 0);
if (!isNumber(secondValue)) {
    alert(errorMessage);
    die();
}

alert(`Ответ: ${firstValue + secondValue}, ${firstValue / secondValue}.`);
