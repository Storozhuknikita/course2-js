// Унарные операторы
var x = -1;
x = -x;
// Бинарные операторы
var a = 1;
var b = 2;
var c = a + b;
// increment +1
var i = 10;
var j = i++ * 2; // 20
var j = ++i * 2; // 22
// decrement -1
i--;
--i;
// конкатенация - сложение строк (две строки склеиваются) var + var
var name = 'Nikita';
var surname = 'Storozhuk';
var fullname = name + ' ' + surname;
alert(fullname);

a > b; // true
a < b; // false
a <= b;
a >= b;

a == b; //false
a != b; //true

var lastNme1 = 'Bondarchuk';
var lastName2 = 'Ivanov';

lastName1 > lastName2; // false


var x = 10;
var y = 12;


// && оператор И
// || оператор ИЛИ
// ! отрицание
if (x < y && a > b) {
    alert('Hello 1');
} else if (x > y) {
    alert('Hello 2');
} else {
    alert('Hello 3');
}

// SWITCH CASE
switch (x) {

    case 10:
        alert('10');
        break;
    case 11:
        alert('11');
        break;
    case 12:
        alert('12');
        break;
    default:

}

//

var result;
if (x < y) {
    result = 5;
} else {
    result = 10;
}

var result = x < y ? 5 : 10;