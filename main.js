/*- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
 кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
 Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
*/
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3){
    console.log('This is a big array which contains 3 or more elements.');
}else{
    console.log('This is a small array which contains fewer than 3 elements.');
}

/*  - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
 Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
*/
let x = +prompt('Please enter any number.');
let y = +prompt('Please enter the other number.');
let t = +prompt('Please enter one more number.');
if(x > y && x < t || x > t && x < y){
    console.log('The medium number is', x);
}else if (y > x && y < t || y > t && y < x){
    console.log('The medium number is', y);
}else if (t > x && t < y || t > y && t < x){
    console.log('The medium number is', t);
}else{
    console.log('Please enter different numbers.');
}
/* - Перепишіть конструкцію if з використанням умовного оператора '?':
 let result;
 if (a + b < 4) {
    result = 'Мало';
 } else {
    result = 'Багато';
 }
*/
let a = +prompt('Please enter any number');
let b = +prompt('Please enter another number');

 let result = (a + b) < 4 ? 'Мало':'Багато';
 console.log(result);

 /*- Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
напишіть це тернарним оператором
*/
let number = +prompt('Please enter any number in the range -100 - +100');
let resultNum = (number >= -100 && number < 0) ? 'The number is negative'
    : (number === 0) ? 'The number is 0'
        : ' The number is positive';
console.log(resultNum);

/*- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
*/
let test1 = prompt('Please enter my favorite programming language');
 resultString = (test1 ==='JavaScript') ? 'Correct' : 'Incorrect';
 console.log(resultString);

 let test2 = +prompt('Please enter my favorite number');
 resultNumFav = (test2 === 17)? 'Correct': 'Incorrect';
 console.log(resultNumFav);
 /*
 - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
 */

let nameOfficial = prompt('Яка «офіційна» назва JavaScript?');
if (nameOfficial === 'ECMAScript'){
    console.log('Правильно!');
}else{
    console.log('Не знаєте? ECMAScript!');
}
/*- У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.*/

let flatNumber = +prompt('Please enter your flat number');
flatBlok = (flatNumber >= 1 && flatNumber <= 20)? 'The flat is in the first block'
    : (flatNumber > 20 && flatNumber <= 48)? 'The flat is in the second block'
        : (flatNumber > 48 && flatNumber <= 90)? 'The flat is in the third block'
            : 'You entered the incorrect number of the flat. Please try again'
 console.log(flatBlok);

/*- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО*/

let usersNumber = +prompt('Please enter the number which typifies the decade');
usersNumberResult = (usersNumber === 10) ? 'Correct' : 'Incorrect';
console.log(usersNumberResult);

/*- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
*/
let temperature = +prompt('Please enter the current air temperature');
goOrNot = (temperature >= 10 && temperature <=20) ? 'Lets go to school!': 'Lets stay at home';
console.log(goOrNot);

/*- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
*/

let lottery = +prompt('Please enter the number 1 - 5');
switch(lottery){
    case 1 :
        console.log('You have won a mobile phone!');
        break;
    case 2 :
        console.log('You have won a ball!');
        break;
    case 3 :
        console.log('You have won a car!');
        break;
    case 4 :
        console.log('You have won a laptop!');
        break;
    case 5 :
        console.log('You have won a flat!');
        break;
    default :
        console.log('The number is incorrect. Please try again later.');
}
