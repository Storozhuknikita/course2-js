// Задание 3
var a = 1;
var b = 2;

if (a >= 0 || b >= 0) {
    alert('Результат задания 3: ' + (a - b));
} else if (a < 0 || b < 0) {
    alert(a * b);
} else {
    alert(a + b);
}

// Задание 4

var c = 16;

if (c <= 15) {
    var count = 15 - c;
}

switch (c) {

    case c < count ? c : ++c:
        alert('Результат задания 4: ' + c);
        ++c;
        break;
    default:

}

// Задание 5
// Функция calc: передаем тип операции, и два параметрка
function calc(type, x, y) {

    if (type == '+') {
        return x + y;
    } else if (type == '-') {
        return x - y;
    } else if (type == '/') {
        return x / y;
    } else if (type == '*') {
        return x * y;
    }
}

alert('Результат задания 5: ' + calc('+', 10, 2));


// Задание 6
// Когда дошел до 6 задания, понял что я примерно его выполнил в пятом, в шестом сделаю на свиче
function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case '+':
            return arg1 + arg2;
            break;
        case '-':
            return arg1 - arg2;
            break;
        case '*':
            return arg1 * arg2;
            break;
        case '/':
            return arg1 / arg2;
            break;
        default:

    }
}

alert('Результат задания 6: ' + mathOperation(15, 15, '+'));

// Задание 7
// - [ ] 7. *Сравнить null и 0. Попробуйте объяснить результат. ###

alert(null>0); // false
alert(null==0); // false
alert(null>=0); // true

// Попробовал разные вариант, и ни один не сравнивает, null
// null и undefined равны друг другу и не равны ничему больше - это правило

// Задание 8
// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
// Это вариант через Math.pow
function power() {

    var val = parseInt(prompt('Введите число'));
    var pow = parseInt(prompt('Введите степень'));


    if (isNaN(val) || isNaN(pow)) {
        return false;
    }

    return Math.pow(val, pow);

}

alert('Результат выполнения задания 8: ' + power());


// Это вариант через рекурсию
function powerRec(val, pow) {
    if (pow != 1) {
        return val * powerRec(val, pow - 1);
    } else {
        return val;
    }
}
var val = parseInt(prompt('Введите число'));
var pow = parseInt(prompt('Введите степень'));

alert('Результат выполнения через рекурсию: ' + powerRec(val, pow) );
