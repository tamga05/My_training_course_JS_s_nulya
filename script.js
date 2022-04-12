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

let king = 'King Balon the 6th';

let legacyCastle = 6;
let roomsInCastle = 17;

console.log(king + ' has ' + (legacyCastle * roomsInCastle) + ' rooms.');