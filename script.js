//Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

function summAndPositive(arr) {
    let sumPositive = 0;
    let countPositive = 0;
    arr.forEach(num => {
        if (num > 0) {
            sumPositive += num;
            countPositive++;
        }
    });
    console.log('Сумма позитивных:', sumPositive);
    console.log('Количество позитивных:', countPositive);

}

summAndPositive(arr);

//Знайти мінімальний елемент масиву та його порядковий номер.

function minElement(arr) {
    let minElem = arr[0];
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minElem) {
            minElem = arr[i];
            minIndex = i;
        }
    }
    console.log('Минимальный элемент:', minElem);
    console.log('Индекс минимального элемента:', minIndex);
}

minElement(arr);

//Знайти максимальний елемент масиву та його порядковий номер.

function maxElement(arr) {
    let maxElem = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElem) {
            maxElem = arr[i];
            maxIndex = i;
        }
    }
    console.log('Максимальный элемент:', maxElem);
    console.log('Индекс максимального элемента:', maxIndex);
}

maxElement(arr);

//Визначити кількість негативних елементів.

function countNegativeElem(arr) {
    let countNegativeElem = 0;
    arr.forEach(num => {
        if (num < 0) {
            countNegativeElem++
        }
    });
    return countNegativeElem;
};

const numberOfNegativeElements = countNegativeElem(arr);
console.log('Количество негативных элементов:', numberOfNegativeElements);

//Знайти кількість непарних позитивних елементів.

function countNotPairedElem(arr) {
    count = 0;
    arr.forEach(num => {
        if (num > 0 && num % 2 !== 0) {
            count++;
        }
    });
    return count;
}
const numberOfNotPairedElem = countNotPairedElem(arr);
console.log('Количество непарных позитивных элементов:', numberOfNotPairedElem);

//Знайти кількість парних позитивних елементів.

function countPairedElem(arr) {
    count = 0;
    arr.forEach(num => {
        if (num > 0 && num % 2 === 0) {
            count++;
        }
    });
    return count;
}
const numberOfPairedElem = countPairedElem(arr);
console.log('Количество парных позитивных элементов:', numberOfPairedElem);

//Знайти суму парних позитивних елементів.

function countOfParePositiveElement(arr) {
    let count = 0;
    arr.forEach(num => {
        if (num > 0 && num % 2 === 0) {
            count += num;
        }
    });
    return count;
}

const sumOfParePositiveElement = countOfParePositiveElement(arr);
console.log('Сумма парных позитивных элементов:', sumOfParePositiveElement);

//Знайти суму непарних позитивних елементів.

function countOfNotParePositiveElement(arr) {
    let count = 0;
    arr.forEach(num => {
        if (num > 0 && num % 2 !== 0) {
            count += num;
        }
    });
    return count;
}

const sumOfNotParePositiveElement = countOfNotParePositiveElement(arr);
console.log('Сумма непарных позитивных элементов:', sumOfNotParePositiveElement);

//Знайти добуток позитивних елементів.

function prodcutOfPositiveElement(arr) {
    let count = 1;
    arr.forEach(num => {
        if (num > 0) {
            count *= num;
        };
    });
    return count;
}

const prodcutOfPositive = prodcutOfPositiveElement(arr);
console.log('Произведение позитвниз элементов', prodcutOfPositive);

//Знайти найбільший серед елементів масиву, ост альні обнулити.

function maxElemToZero() {
    const maxElem = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== maxElem) {
            arr[i] = 0;
        }
    }
    return arr;
}

const modifiedArrMaxEleToZero = maxElemToZero(arr);
console.log('Модифицированный массив', modifiedArrMaxEleToZero);