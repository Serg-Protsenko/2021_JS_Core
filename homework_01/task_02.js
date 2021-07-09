'use strict';


function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}


let firstValue = +prompt('Enter first number: ', 0);
if (!isNumber(firstValue)) {
    alert('Некорректный ввод!');
} else {
    let secondValue = +prompt('Enter second number: ', 0);
    if (!isNumber(secondValue)) {
        alert('Некорректный ввод!');
    } else {
        alert(`Ответ: ${firstValue + secondValue}, ${firstValue * secondValue}.`);
}
}
