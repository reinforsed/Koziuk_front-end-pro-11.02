//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

removeElement(array, 5);

console.log(array);

