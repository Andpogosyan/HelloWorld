//Задание 2

//function checkAge(age) {
//    return (age > 18) ? true : confirm('Родители разрешили?');
//}

//function checkAge(age) {
//    return !(age < 18) || confirm('Родители разрешили?');
//}

//Задание 3

//function getSmaller(a, b) {
//    if (a < b) {
//        return a
//    } else if (a > b) {
//        return b
//    }
//}

//Задание 4

let firstNumber = +prompt('enter a number')

let secondNumber = +prompt('enter a number')

function pow(x, n) {
    if (n > 1) return x ** n;
}

alert(pow(firstNumber, secondNumber))