//задача 4

//for (let i = 1; i <= 10; i++) {
//    if (!(i % 2)) {
//        alert(i)
//    }
//}

//задача 5

//let i = 0
//
//while (i < 3) {
//    alert(`number: ${i}`)
//    i++
//}

//задача 6

//while (true) {
//    let value = +prompt('enter a number');
//    if (value >= 100 || !(value)) break;
//
//}

//задача 7

let number = 10;

restart: for (let i = 2; i <= number; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue restart;
    }
    alert(i)
}