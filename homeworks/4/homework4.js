
// Задание 1
function convert(inputValue) {

    if(isNaN(inputValue) || inputValue < 0) {
        return 'Число меньше 0';
    }

    var arrayValue = inputValue.split(''); // преобразуем в массив

    // для случаев если один или два цифры
    while (arrayValue.length < 3) {
        arrayValue.unshift(0);
    }

    var objValue = {}; // создаем объект

    if (arrayValue.length > 3) {
        objValue = 'Число больше 999';
    } else {
        objValue['hundreds'] = +arrayValue[0];
        objValue['tens'] = +arrayValue[1];
        objValue['units'] = +arrayValue[2];
    }

    return objValue;

}


var inputValue = prompt('Введите число от 0 до 999');

var obj = convert(inputValue);

console.log(obj);

///


/// Задание 2

var things = {
    1 : {
        'name': 'Футболка',
        'cost': 100,
        'img': '',
        'count': 1,
        'size': {
            top: 90,
            middle: 60,
            bottom: 90
        }
    },
    2 : {
        'name': 'Лимон',
        'cost': 100,
        'img': '',
        'count': 1,
        'size': {
            top: 90,
            middle: 60,
            bottom: 90
        }
    },
    3 : {
        'name': 'Футболка',
        'cost': 100,
        'img': '',
        'count': 1,
        'size': {
            top: 90,
            middle: 60,
            bottom: 90
        }
    }
};


function countBasketPrice(things) {

    var sum = 0;

    for (var i in things){

        sum = (things[i].cost * things[i].count) + sum;
    }

    return sum;
}

console.log('Сумма товаров в корзине: ' + countBasketPrice(things));