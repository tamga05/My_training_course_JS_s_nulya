// console.log("Привет, Андрей!!!");

// window.alert("Привет, Андрей!!!");

// Урок 08 document.getElementById

// let myVar1;
// myVar1 = "myDiv";

// let viewVar1;
// viewVar1 = document.getElementById(myVar1);

// window.alert(viewVar1.id);
// window.alert(viewVar1.className)
// window.alert(viewVar1.title);
// window.alert(viewVar1.style);
// window.alert(viewVar1.contentEditable);

// Урок 11 function

// function alertABC() {
//     // window.alert('1');
//     // window.alert('2');
//     // window.alert('3');
//     // window.alert('4');
//     console.log('123');
//     console.log('234');
//     console.log('345');
//     console.log('456');
// }

// alertABC();
// alertABC();
// alertABC();

// function myName() {
//     window.alert('Andrey');
// }

// myName();

// Урок 12 Параметры функции

// let myId1;
// myId1 = "myDiv1";
// let viewDiv1;
// viewDiv1 = document.getElementById(myId1);

// // console.log(viewDiv1.id);
// // console.log(viewDiv1.className);
// // console.log(viewDiv1.title);

// let myId2;
// myId2 = "myDiv2";
// let viewDiv2;
// viewDiv2 = document.getElementById(myId2);

// // console.log(viewDiv2.id);
// // console.log(viewDiv2.className);
// // console.log(viewDiv2.title);

// let myId3;
// myId3 = "myDiv3";
// let viewDiv3;
// viewDiv3 = document.getElementById(myId3);

// function viewParams(param) {
// 	console.log(param.id);
// 	console.log(param.className);
// 	console.log(param.title);
// }

// viewParams(viewDiv1);
// viewParams(viewDiv2);
// viewParams(viewDiv3);

// let const2;
// let const3;

// const2 = "myDiv2";
// const3 = "myDiv3";

// let viewConst2;
// let viewConst3;

// viewConst2 = document.getElementById(const2);
// viewConst3 = document.getElementById(const3);

// debugger;
// function showParams(viewConst1) {
//     console.log(viewConst1.id);
//     console.log(viewConst1.className);
//     console.log(viewConst1.title);
// }

// showParams(viewConst1);

// let abc = 3 ** 5;
// let def = -8 / (-4);

// alert(abc);
// alert(def);

//console.log("\\ \\ \\\\ \\\ \'\"");

// console.log(String.fromCharCode(33));

// console.log(String.fromCharCode(126));
// console.log(String.fromCharCode(94));
// console.log(String.fromCharCode(37));

// let who = "dragon's" + 'mother';
// console.log(who);

// let eurosCount = 100;

// let dollarsPerEuros = eurosCount * 1.25;
// console.log(dollarsPerEuros);

// let rublesCount = dollarsPerEuros * 60;
// console.log(rublesCount);

// Task 23 Hekslet JS

// let eurosCount = 56;

// let dollarsPerEuros = eurosCount * 1.25;
// console.log(dollarsPerEuros);

// let rublesCount = dollarsPerEuros * 60;
// console.log(rublesCount);

// Task 24 Hekslet JS

// let info = "We couldn't verify you mother's maiden name.";
// let intro = 'Here is important information about your account security.';

// let firstName = 'Joffrey';
// let greeting = 'Hello';

// // BEGIN (write your solution here)

// let title = greeting + ', ' + firstName + '!';
// console.log(title);

// // console.log(info);
// // console.log(intro);

// let text = intro + '\n' + info;
// console.log(text);

// Task 26 Hekslet JS

// let king = 'King Balon the 6th';

// let legacyCastle = 6;
// let roomsInCastle = 17;

// console.log(king + ' has ' + (legacyCastle * roomsInCastle) + ' rooms.');

// Task 28 Hekslet JS Интерполяция

// const stark = 'Andrey';
// const lf = '\n';

// console.log(`Do
// you
// want
// to
// eat,
// ${stark}?`);

// const magic = '\nyou'
// console.log(magic[1]);

// Task 29 Hekslet JS Извлечение символа из строки

// спецсимвол \n считается ЗА ОДИН самостоятельный символ, не смотря на то, что он состоит из 2-х знаков
// Нумерация символов начинается с 0

// const name = 'Na\nharis';
// console.log(name[5]);

// в данном примере в консоль выведется символ r

// Task 30 Hekslet JS Оператор typeof

// console.log(typeof 'Andrey');

// const user = { name: 'Toto', age: 33 };
// console.log(user);

// const type = typeof -0.304;
// console.log(type);

// Task 31 Hekslet JS Undefined

// console.log(undefined);

// let abc;
// console.log(abc);

// Task 32 Hekslet JS Неизменяемость примитивных типов

// const one = 'Naharis';
// const two = 'Mormont';
// const three = 'Sand';

// console.log(`${one[2]}  ${two[1]}  ${three[3]}  ${two[4]}  ${two[2]}`);

// Task 34 Hekslet JS Функции и их вызов

// console.log(Math.sign(-18));

// Task 36 Hekslet JS Сигнатура функции. Функция Округления до ближайшего Большего целого числа

const number = 923.2238;
const myCeil = Math.ceil(number);
console.log(myCeil);

const number1 = -19.00258;
//const myCeil1 = Math.ceil(number1);
console.log(Math.ceil(number1));

// Task 36 Hekslet JS Функция Округления до ближайшего целого числа

const number2 = 923.2238;
const myRound = Math.round(number2);
console.log(myRound);

// Task 38 Hekslet JS Вызов функции — выражение

const text = "Never forget what you are, for surely the world will not";

const firstLetter = text[0];
const lastLetter = text[text.length - 1];

const letters = `First: ${firstLetter}\nLast: ${lastLetter}`;

console.log(letters);

// Task 40 Hekslet JS Детерминированность

const textLength =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ";

console.log(textLength.length); // 418
console.log(textLength[135]); // m
console.log(Math.random());
console.log(Math.random());

console.log(Math.round(Math.random() * 10)); // Функция Каждый раз возвращает Случайное Округленное Целое число

const rand = 5.135;
console.log(Math.floor(rand));
console.log(Math.sqrt(rand));

const name = "Robb";
console.log(name[name.length]); // indefined

// Task 45 Hekslet JS Свойства и методы как выражения

const text3 = "Never forget what you are, for surely the world will not";
console.log(`First: ${text3[0]}\nLast: ${text3[text3.length - 1]}`);

// Task 46 Hekslet JS Цепочка вызовов

const name4 = "Tirion";
console.log(name4.toUpperCase().toLowerCase()); // tirion
console.log(name4.toUpperCase().toLowerCase().length.toString().length); // 1

const text5 = "When \t\n you play a \t\n game of thrones you win or you die.";
console.log(text5.slice(4, 15).trim().length); // 7

// Task 47 Hekslet JS Создание функций

function superSum(a, b) {
	console.log(a + b);
}

superSum(15, 4);

function run() {
	return 5;
	return 10;
}

run(); //

console.log();

function getRandomNumber() {
	//console.log(Math.round(Math.random() * 10));
	return Math.round(Math.random() * 10);
}

getRandomNumber();

console.log(console.log("Wow")); // undefined

// Task 49 Hekslet JS Параметры функций

function truncate(str, simbol) {

	const strSlice = str.slice(0, simbol);

	console.log(`${strSlice}...`);
}

truncate("Если на Отчизну нагрянет беда", 20);


// Task 50 Hekslet JS Необязательные параметры функций

function getHiddenCard(str, stars) {

	//const numberCard = str.slice(12);

	//const star = '*'.repeat(stars);

	console.log(`${'*'.repeat(stars)}${str.slice(12)}`);

	//return ();
}

getHiddenCard('1234567891012345', 4);
