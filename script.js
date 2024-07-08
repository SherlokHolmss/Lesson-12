// let userNumber = 0;
// let n = 3;
// for(let i = 0; i <= n; i++){
//     userNumber = Number(prompt("Введіть число"))
//     if(userNumber > 100){
//         alert("Ви ввели число більше 100")
//         break;
//     }
//     else if(userNumber == 100){
//         alert("Ви ввели 100");
//     }
//     else{
//         alert("Ви ввели число менше 100")
//         continue;
//     }
// }

// Напиши скрипт який порахує суму всіх парних чисел, які входять в діапазон чисел в змінних від min до max. Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому 2 парних числа - 2 та 4, їх сума 6. Можна зробити отримання значень мінімального і максимального числа через інпут.

let minNumber = document.getElementById('min-num');
let maxNumber = document.getElementById('max-num');

let minBtn = document.getElementById('min-btn');
let maxBtn = document.getElementById('max-btn');

let minValue;
let maxValue;

let sum = 0;

function getMinNumber() {
    minValue = Number(minNumber.value);
    console.log(minValue);
}

function getMaxNumber() {
    maxValue = Number(maxNumber.value);
    console.log(maxValue);
    checkEvenNumbers();
}
function checkEvenNumbers(){
    for (let i = minValue; i < maxValue; i++) {
        if( i % 2 == 0){
            sum += i;
        }
    }
    alert(`Сума парних чисел на цьому проміжку дорівнює - ${sum}`);
    sum = 0;
}
minBtn.addEventListener('click', getMinNumber);
maxBtn.addEventListener('click', getMaxNumber);

