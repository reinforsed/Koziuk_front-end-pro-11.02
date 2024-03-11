//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let num = '';

for (let i = 20; i <= 30; i += 0.5) {
    num += i + ' ';
}
console.log(num);

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let oneDolar = 27;

for (let i = 10; i <= 100; i += 10) {
    let dolarMultyply = i * oneDolar;
    console.log(i + ' доларов стоят ' + dolarMultyply + ' гривен');
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let userNum = +prompt('Введите число');

for (let i = 1; i <= 100; i++) {
    let square = i * i;
    if (square <= userNum) {
        console.log(i + ' - квадрат не превишает ' + square);
    }
};

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let userSimpleNumber = +prompt('Введите число для проверки');
let checkTheNUmber = true;

if (userSimpleNumber <= 1) {
    checkTheNUmber = false;
} else {
    let numberHalf = userSimpleNumber / 2
    for (let i = 2; i <= numberHalf; i++) {
        if (userSimpleNumber % i === 0) {
            checkTheNUmber = false;
            break;
        }
    }
}

if (checkTheNUmber) {
    console.log(userSimpleNumber + " - это простое число");
} else {
    console.log(userSimpleNumber + " - это не простое число");
}

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let someNumber = +prompt('Введите какое-то число для возведения');

let numberDeg = 1;
let degreeResult = 3;

while (degreeResult < someNumber) {
    degreeResult *= 3;
    numberDeg++;
}

if (degreeResult === someNumber) {
    console.log(someNumber + " можно возвести в степень 3");
} else {
    console.log(someNumber + " нельзя возвести в степень 3");
}