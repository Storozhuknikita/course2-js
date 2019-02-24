

// Объекты
var human = {
    firstName: 'Nikita',
    lastName: 'Storozhuk',
    access: ['admin','moder'],

    address: {
        city: 'St-Pete',
        country: 'Russia'
    },

    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

//human.firstName = '';
//human.address.city = '';

// вывод всех ключей объекта
for (var prop in human) {
    console.log(human[prop]);
}


var unknownPerson = {
    age: 40
};

// создает объект и кладет age в proto
var luke = Object.create(unknownPerson);

//luke.age();

// получить массив всех ключей
Object.keys(human);

// получить массив всех значений
Object.values(human);


// Задача


function builtQuestion() {
    var text = '[' +  this.prize + '] ' + this.text;
    for(var i = 0; i < this.options.length; i++) {
        text = text + '\n' + (i + 1) + ') ' + this.options[i];
    }

    if(this.fixed) {
        text = text + '\n' + 'РќР•РЎР“РћР РђР•РњРђРЇ РЎРЈРњРњРђ';
    }

    return text;
}

var questions = [
    {
        text: 'Р’РёСЃРёС‚ РіСЂСѓС€Р° - РЅРµР»СЊР·СЏ СЃРєСѓС€Р°С‚СЊ!',
        options: ['Р›Р°РјРїРѕС‡РєР°', 'РљР°РєС‚СѓСЃ', 'Р›РѕРїР°С‚Р°', 'РђРІС‚РѕРјРѕР±РёР»СЊ'],
        correct: 0,
        prize: 100,
        fixed: false,
        getText: builtQuestion,
    },
    {
        text: 'Р’РёСЃРёС‚ РіСЂСѓС€Р° - РЅРµР»СЊР·СЏ СЃРєСѓС€Р°С‚СЊ!',
        options: ['Р›Р°РјРїРѕС‡РєР°', 'РљР°РєС‚СѓСЃ', 'Р›РѕРїР°С‚Р°', 'РђРІС‚РѕРјРѕР±РёР»СЊ'],
        correct: 1,
        prize: 500,
        fixed: false,
        getText: builtQuestion,
    },
    {
        text: 'Р’РёСЃРёС‚ РіСЂСѓС€Р° - РЅРµР»СЊР·СЏ СЃРєСѓС€Р°С‚СЊ!',
        options: ['Р›Р°РјРїРѕС‡РєР°', 'РљР°РєС‚СѓСЃ', 'Р›РѕРїР°С‚Р°', 'РђРІС‚РѕРјРѕР±РёР»СЊ'],
        correct: 2,
        prize: 1000,
        fixed: false,
        getText: builtQuestion,
    },
    {
        text: 'Р’РёСЃРёС‚ РіСЂСѓС€Р° - РЅРµР»СЊР·СЏ СЃРєСѓС€Р°С‚СЊ!',
        options: ['Р›Р°РјРїРѕС‡РєР°', 'РљР°РєС‚СѓСЃ', 'Р›РѕРїР°С‚Р°', 'РђРІС‚РѕРјРѕР±РёР»СЊ'],
        correct: 3,
        prize: 5000,
        fixed: true,
        getText: builtQuestion,
    },
    {
        text: 'Р’РёСЃРёС‚ РіСЂСѓС€Р° - РЅРµР»СЊР·СЏ СЃРєСѓС€Р°С‚СЊ!',
        options: ['Р›Р°РјРїРѕС‡РєР°', 'РљР°РєС‚СѓСЃ', 'Р›РѕРїР°С‚Р°', 'РђРІС‚РѕРјРѕР±РёР»СЊ'],
        correct: 0,
        prize: 50000,
        fixed: false,
        getText: builtQuestion,
    },
    {
        text: 'Р’РёСЃРёС‚ РіСЂСѓС€Р° - РЅРµР»СЊР·СЏ СЃРєСѓС€Р°С‚СЊ!',
        options: ['Р›Р°РјРїРѕС‡РєР°', 'РљР°РєС‚СѓСЃ', 'Р›РѕРїР°С‚Р°', 'РђРІС‚РѕРјРѕР±РёР»СЊ'],
        correct: 1,
        prize: 100000,
        fixed: true,
        getText: builtQuestion,
    },
    {
        text: 'Р’РёСЃРёС‚ РіСЂСѓС€Р° - РЅРµР»СЊР·СЏ СЃРєСѓС€Р°С‚СЊ!',
        options: ['Р›Р°РјРїРѕС‡РєР°', 'РљР°РєС‚СѓСЃ', 'Р›РѕРїР°С‚Р°', 'РђРІС‚РѕРјРѕР±РёР»СЊ'],
        correct: 2,
        prize: 500000,
        fixed: false,
        getText: builtQuestion,
    },
    {
        text: 'Р’РёСЃРёС‚ РіСЂСѓС€Р° - РЅРµР»СЊР·СЏ СЃРєСѓС€Р°С‚СЊ!',
        options: ['Р›Р°РјРїРѕС‡РєР°', 'РљР°РєС‚СѓСЃ', 'Р›РѕРїР°С‚Р°', 'РђРІС‚РѕРјРѕР±РёР»СЊ'],
        correct: 3,
        prize: 1000000,
        fixed: false,
        getText: builtQuestion,
    }
];

var prize = 0;
for(var i = 0; i < questions.length; i++) {
    var questionText = 'Р’РѕРїСЂРѕСЃ в„–' + (i + 1) + ' ' + questions[i].getText();

    if(+prompt(questionText) === (questions[i].correct + 1)) {
        alert('РўРµРєСѓС‰РёР№ РІС‹РёРіСЂС‹С€: ' + questions[i].prize);
        prize = questions[i].prize;
    } else {
        prize = 0;
        alert('Р’С‹ РїСЂРѕРёРіСЂР°Р»Рё!');
        for(var j = i; j >= 0; j--) {
            if(questions[j].fixed) {
                prize = questions[j].prize;
                break;
            }
        }
        break;
    }
}

alert('Ваш выигрыш: ' + prize);