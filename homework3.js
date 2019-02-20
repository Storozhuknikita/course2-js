
// Задание 1
function natural(num) {

    if(num < 2) return false;

    for (var i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}


for(var i = 0; i < 100; i++){
    if(natural(i)) console.log(i);
}


/// Задание 3

var things = {
    1 : {
        'name' : 'Футболка',
        'cost' : 100,
        'img' : '',
        'size': {
            top: 90,
            middle: 60,
            bottom: 90
        }
    },
    2 : {
        'name' : 'Лимон',
        'cost' : 100,
        'img' : '',
        'size': {
            top: 90,
            middle: 60,
            bottom: 90
        }
    },
    3 : {
        'name' : 'Футболка',
        'cost' : 100,
        'img' : '',
        'size': {
            top: 90,
            middle: 60,
            bottom: 90
        }
    }
};

// Задание 3
function countBasketPrice(things) {

    var sum = 0;

    for (var i in things){
        console.log(things[i].cost);

        sum = things[i].cost + sum;
    }

    return sum;
}

console.log(countBasketPrice(things));


// Задание 4
for (var c = 0; c < 10; console.log(c++)) {}


var lines = 20;
var str = ' ';
var star = '*'
for(var q = 0; q < lines; q++){
    str += star;
    console.log(str);
}