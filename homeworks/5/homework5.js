
// функция генерирующая доску

function draw() {

    var table = document.createElement('table'); // создаем таблицу
    var flag = true;

    var trr = document.createElement('tr'); // создаем строку
    var arr = [' ','A','B','C','D','E','F','G','H']; // массив с буквами

    // генерим ячейки
    for(var i = 0; i < 8; i++){
        var tr = document.createElement('tr'); // создаем строку

        // создаем ячейку для цифр
        var tdd = document.createElement('td');
        tdd.style.width = '50px';
        tdd.style.height = '50px';
        tdd.innerHTML = 8 - i;
        tdd.style.textAlign = 'center';
        tr.appendChild(tdd); // добавляем ячейку

        //console.log('i: ' + i);

        // генерим доску
        for(var j = 0; j < 8; j++){

            if(j === 0) { flag = !flag; }

            var td = document.createElement('td'); // создаем яейку
            //console.log('j: ' + j);

            td.style.width = '50px';
            td.style.height = '50px';

            if(flag){
                td.style.background = 'black';
            }else {
                td.style.background = 'white';
            }

            td.style.textAlign = 'center';

            // Черные сверху
            // восьмая строка
            if (i === 0) {
                td.style.color = 'black';
                if ((j === 0) || (j === 7)) {
                    td.innerHTML = 'Ладья';
                } else if ((j === 1) || (j === 6)){
                    td.innerHTML = 'Конь';
                } else if ((j === 2) || (j === 5)){
                    td.innerHTML = 'Офицер';
                } else if (j === 3){
                    td.innerHTML = 'Ферзь';
                } else if (j === 4) {
                    td.innerHTML = 'Король';
                }
            }else if(i === 1){
                td.style.color = 'black';
                td.innerHTML = 'Пешка';
            }


            // Белые снизу
            // первая строка
            if (i === 7) {
                td.style.color = 'white';
                if ((j === 0) || (j === 7)) {
                    td.innerHTML = 'Ладья';
                } else if ((j === 1) || (j === 6)){
                    td.innerHTML = 'Конь';
                } else if ((j === 2) || (j === 5)){
                    td.innerHTML = 'Офицер';
                } else if (j === 3){
                    td.innerHTML = 'Ферзь';
                } else if (j === 4) {
                    td.innerHTML = 'Король';
                }
            } else if (i === 6){
                td.style.color = 'white';
                td.innerHTML = 'Пешка';
            }

            tr.appendChild(td); // добавляем ячейку
            flag = !flag; // меняем цвет
        }
        table.appendChild(tr);
    }


    // этот блок генерит буквы после основной генерации доски
    for(var k = 0; k < 9; k++){

        var td = document.createElement('td');

        td.style.width = '50px';
        td.style.height = '50px';
        td.style.background = 'white';
        td.style.textAlign = 'center';
        td.innerHTML = arr[k];

        trr.appendChild(td);

    }
    table.appendChild(trr);

    document.body.appendChild(table);
}

draw();


