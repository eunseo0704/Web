// // let heading = document.getElementById('heading');
// //         heading.onclick = function() {
// //             heading.style.color = 'green';
// //         }

// // alert("홈페이지에 오신 것을 환영합니다.");


// document.write("<h1>안녕하세요</h1>");

// // console.log("안녕하세요")

// // let width = 200;
// // let height = 50;

// // let area = width * height;
// // console.log(area);

// const PI = 3.14;
// let radius = prompt("반지름을 입력하세요.");
// let area = PI*radius*radius;
// console.log(area);

// let userNumber = parseInt(prompt('숫자를 입력하세요.'));

// if(userNumber !== null)
//     (parseInt(userNumber) % 3 == 0)? console.log('3의 배수입니다.') : console.log('3의 배수가 아닙니다.');

// else
//     console.log('입력이 취소됐습니다.')

// let session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인");

// switch(session) {
//     case "1": document.writeln("마케팅 세션은 <b>201호</b>에서 진행됩니다.")
//         break;
//     case "2": document.writeln("개발 세션은 <b>203호</b>에서 진행됩니다.")
//         break;
//     case "3": document.writeln("디자인 세션은 <b>205호</b>에서 진행됩니다.")
//         break;
//     default: alert("잘못 입력했습니다.");
// }

// let sum = 0;
//     for(let i = 1;i<6;i++){
//         sum += i;
// }
// console.log('1부터 5까지 더하면 ${sum}');

// let sum = 0;
// for(let i = 2; i<10; i++){
//     sum += i;
// }

// let stars = parseInt(prompt('몇 개의 별을 표시할까요?'));
// while (stars >0) {
//     document.writeln('*');
//     stars--;
// }

// let star = parseInt(prompt('몇 개의 별을 표시할까요?'));
// do {
//     document.write('*');
//     star--;
// }while (stars > 0);

// let sum = parseInt(prompt('몇 까지 3의 배수를 찾을까요?'));
// let i = 1;
// while (i)

// function addNumber() {
//     let num1 = 2;
//     let num2 = 3;
//     let sum = num1 + num2;
//     console.log('')
// }

// var sum = 0;
// function addNumber() {
//     // var result;
//     sum = 10 + 20;
//     result = 10 * 20;
// }
// addNumber();
// console.log(sum);
// console.log(result);

// var x = 10;
// function displayNumber() {
//     console.log(`x is ${x}`);
//     console.log(`y is ${y}`);
//     var y = 20;
// }
// displayNumber();

// var a = 3;
// var a = 5;
// console.log(a);

// let b = 4;
// let b = 5;

// function multiple(a,b=5,c=10) {
//     return a*b+c;
// }
// console.log(mutiple(5,10,20));
// console.log(mutiple(10,20));
// console.log(mutiple(30));

let sum = (a,b) => a+b;

console.log(`함수 실행 결과:${sum(10,20)}`);

