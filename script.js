//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let str = '';
for (let i = 10; i <= 20; i++) {
    str += i;
    if (i < 20) {
        str += ',';
    }

};
console.log(str);

//Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    let square = i * i;
    console.log('квадрат числа', i, ':', square);
};

//Вивести таблицю множення на 7.
for (let i = 1; i <= 10; i++) {
    let multuplySeven = 7 * i;
    console.table('7 *', i, '=', multuplySeven);

};

//Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log("Сума всех целых чисел от 1 до 15:", sum);

// Знайти добуток усіх цілих чисел від 15 до 35.
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log("Произведение всех целых чисел от 15 до 35:", product);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let scndSum = 0;
for (let i = 1; i <= 500; i++) {
    scndSum += i;
}
let average = scndSum / 500;
console.log("Среднее арифметическое от 1 до 500:", average);

//Вивести суму лише парних чисел в діапазоні від 30 до 80.
let pareSum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        pareSum += i;
    }
}
console.log('Сумма парных чисел в диапазоне от 30 до 80:', pareSum);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let thirdSum = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        if (thirdSum !== '') {
            thirdSum += ', '
        }
        thirdSum += i;
    }
}
console.log('Все числа кратные 3:', thirdSum);
//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//Визначити кількість його парних дільників.
//Знайти суму його парних дільників.
let naturalNumber = +prompt('Введите число натуральное число');
let naturalNumberDiv = '';
let naturalNumberDivPare = '';
let sumNaturalNumberDivPare = 0;


for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {
        naturalNumberDiv += i + ', ';
        if (naturalNumber % 2 === 0) {
            naturalNumberDivPare++;
            sumNaturalNumberDivPare += i;

        } else {
            naturalNumberDivPare = 'таких нет';
            sumNaturalNumberDivPare = 'такого тоже нет';

        }
    }
}

console.log("Делители числа :", naturalNumber, ":", naturalNumberDiv.slice(0, - 2));
console.log("Количество парних делителей числа:", naturalNumber, ":", naturalNumberDivPare);
console.log("Cумма парних делителей числа:", naturalNumber, ":", sumNaturalNumberDivPare);

//Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let result = i * j;
        console.table(i + " * " + j + " = " + result);
    }
    console.table();
}
