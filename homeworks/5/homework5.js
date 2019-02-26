

var x = 8;
var y = 8;

function chessBoard (x,y) {

    var chessBoard = document.getElementById('chessBoard');

    for (var i = 0; i < y; i++){

        var $row = chessBoard.appendChild(document.createElement('div'));
        console.log('i: ' + i);

        $row.textContent = y-i; // выводим цифры


        for (var j = 0; j < x; j++){

            $row.appendChild(document.createElement("span"));
            console.log('j: ' + j);

            //$row.textContent = x-j; // выводим буквы

            // если первый столбец
            if (j === 0){

            }

        }

    }

}


chessBoard(x,y);


