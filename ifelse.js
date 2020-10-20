//вторая задача

let result = prompt("Какое официальное название 'JavaScript'");

if (result == 'ECMAScript') {
    alert('Верно!')
} else {
    alert('Не знаете? ECMAScript!')
}


//третья задача

let number = +prompt('введите число')

if (number > 0) {
    alert(1)
} else if (number < 0) {
    alert(-1)
} else {
    alert(0)
}

//четвертая задача

let value;

(a + b < 4) ? value = 'мало': value = 'много';

//пятая задача

let message;

(login == 'Сотрудник') ? message = 'Привет':
    (login == 'Директор') ? message = 'Здравствуйте' :
    (login == '') ? message = 'Нет логина' :
    message = '';