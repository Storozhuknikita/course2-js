

// Функция генрации случайного числа

function getRandomNumber() {
    return Math.round(Math.random() * 10);
}


var randomNumber = getRandomNumber();
var score = 0;

function getUserNumber() {
    var num = parseInt(prompt('Введите число'));
    score++;

    if (isNaN(num)) {
        return -1;
    }

    if (num === randomNumber) {
        return 1;
    } else {
        return getUserNumber();
    }

}

var result = getUserNumber();

if (result === 1){
    alert('Вы победили. Количество попыток: ' + score);
} else {
    alert('Вы проиграли');
}