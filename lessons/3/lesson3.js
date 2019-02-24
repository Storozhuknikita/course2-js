
// Генерация случайного числа

function getRandomNumberGame(fromNumber, toNumber) {
    return Math.round(fromNumber + Math.random() * (toNumber - fromNumber));
}


function buildHint(question, answer) {

    var qArray = question.split(''); // преобразование в массив

    var aArray = answer.split(''); // преобразование в массив

    var result = [0, 0];

    for (var i = 0; i < qArray.length; i++){

        if(qArray[i] === aArray[i]){
            result[0]++;
        } else if (qArray.includes(aArray[i])) {
            result[1]++;
        }


    }

}

var random = getRandomNumberGame(1000, 9999 ) + '';

while(true) {
    var guess = prompt('Введи 4-х значное число ' + random);

    if(isNaN(+guess) || guess.length !== 4) {
        alert('Ты че гусь');
        continue;
    }

    if(random === guess){
        alert('We win');
        break;
    } else {
        var result = buildHint(+random, +guess);
        alert('Быков ' + result[0] + ' . Коров ' + result[1]);
    }




}