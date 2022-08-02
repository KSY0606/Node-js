let na = "김상윤";   // `${변수}`  벡틱
let age = 25;
let str = `${na}의 나이는 ${age}세입니다.`;
console.log(str);
//console.log(`${na}님 안녕하세요`);
var num = 20;
var num = 50;  //  이미 선언된 변수 num을 2번 선언하게된것, num = 50;과는 다름
console.log(num);
/*
let num = 20;
let num = 50;  var말고 let을 사용한 경우 에러발생. 같은이름의 변수를 2번 선언해서
*/
const pi = 3.14; // const 상수 
// pi = 3.19;  값을 변경 할 수 없음
console.log(pi);
const str1 = "10";
const str2 = "20";
const num1 = 10;
const num2 = 20;
console.log("두 문자 더하기 = %s",str1 + str2);
console.log("두 숫자 더하기 = %d",num1 + num2);
console.log("혼합 더하기 = %s",str1 + num2);