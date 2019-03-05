

var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var snakeSpeed = 500;


var $gameTable;
var $gameField;



var snake = [];
var snakeCoordX;
var snakeCoordY;
var snakeInterval;

// направление куда идет
var direction = 'top';

// очки
var score = 0;


// загрузка всей страницы и запуски
function init(){

    $gameField = document.getElementById('snake-field');

    document.getElementById('snake-start').addEventListener('click', handleGameStart);
    document.getElementById('snake-renew').addEventListener('click', handleNewGame);

    window.addEventListener('keydown', handleDirectionChange);

    buildGameField();
}

// рисуем игровое поле
function buildGameField(){

    $gameTable = document.createElement('table');
    $gameTable.classList.add('game-table');


    for (var i = 0; i < FIELD_SIZE_X; i++){
        var $row = document.createElement('tr');
        $row.classList.add('game-table-row');

        for (var j = 0; j < FIELD_SIZE_Y; j++){
            var $cell = document.createElement('td');
            $cell.classList.add('game-table-cell');
            $row.appendChild($cell);
        }

        $gameTable.appendChild($row);
    }

    $gameField.appendChild($gameTable);

}


function isSnakeUnit(unit){
    return snake.includes(unit);
}

function inBounds(){
    return snakeCoordX >= 0 && snakeCoordY < FIELD_SIZE_X && snakeCoordY >=0 && snakeCoordY < FIELD_SIZE_Y;
}


// определение направления
function handleDirectionChange(event) {

    switch (event.keyCode){
        case 37: // влево
            if(direction !== 'right') direction = 'left';
            break;
        case 38: // вверх
            if(direction !== 'bottom') direction = 'top';
            break;
        case 39: // вправо
            if(direction !== 'left') direction = 'right';
            break;
        case 40: // вниз
            if(direction !== 'top') direction = 'bottom';
            break;
    }

}


function isFood(unit){

    if(unit.classList.contains('food-unit')){
        unit.classList.remove('food-unit');
        document.getElementById('score').textContent(score++);
        createFood();
        return true;
    }
    return false;

}

// генерация еды
function createFood(){
    var foodCreated = false;

    while (!foodCreated){
        var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
        var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var $foodCell = $gameTable.children[foodY].children[foodX];

        if(!$foodCell.classList.contains('snake-unit')){
            $foodCell.classList.add('food-unit');
            foodCreated = true;
        }
    }
}

// пермещение
function move() {

    var $newUnit;


    if(!inBounds()) {
        return gameOver();
    }

    switch (direction) {
    case 'top':
        snakeCoordY--;
        break;
    case 'bottom':
        snakeCoordY++;
        break;
    case 'left':
        snakeCoordX--;
        break;
    case 'right':
        snakeCoordX++;
        break;
    }

    $newUnit = $gameTable.children[snakeCoordY].children[snakeCoordX];


    if(!isSnakeUnit($newUnit) && inBounds()) {
        $newUnit.classList.add('snake-unit');
        snake.push($newUnit);


        if (!isFood($newUnit)) {
            var $snakeRemoved = snake.shift();
            $snakeRemoved.classList.remove('snake-unit');
        }
    } else {
        gameOver();
    }
}

function gameOver(){
    alert('Чувак ты прогирал');
    clearInterval(snakeInterval);

    for (var i = 0; i < snake.length; i++){
        snake[i].classList.remove('snake-unit');
    }

    var $foodUnits = document.getElementsByClassName('food-unit');
    for (var i =0; i < $foodUnits.length; i++) {
        $foodUnits[i].classList.remove('food-unit');
    }

    snake = [];
    direction = 'top';
    snakeSpeed = 500;
    document.getElementById('snake-start').removeAttribute('disabled');


}


// появление змейки на поле
function respawn(){
    snakeCoordX = Math.floor(FIELD_SIZE_X / 2);
    snakeCoordY = Math.floor(FIELD_SIZE_Y / 2);


    var $snakeHead = $gameTable.children[snakeCoordY].children[snakeCoordX];
    $snakeHead.classList.add('snake-unit');

    var $snakeTail = $gameTable.children[snakeCoordY + 1].children[snakeCoordX];
    $snakeTail.classList.add('snake-unit');

    snake.push($snakeTail);
    snake.push($snakeHead);

}


// старт игры
function handleGameStart(){
    respawn();
    snakeInterval = setInterval(move, snakeSpeed);
    createFood();
    document.getElementById('snake-start').setAttribute('disabled', true);
}

// новая игра
function handleNewGame(){

}

window.addEventListener('load', init);