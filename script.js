const inputField = document.getElementById('myField');
const myDiv = document.getElementById('myDiv');


inputField.addEventListener('focus', function () {
    myDiv.classList.remove('hidden');
});

inputField.addEventListener('blur', function () {
    myDiv.classList.add('hidden');
});