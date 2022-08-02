// 자바스크립트 함수는 변수에 넣을 수 있다.
// 함수를 매개변수로 활용 할 수 있다.

/*function plus(num1, num2) {
    return num1 + num2;
}*/
 const plus = (num1,num2) => num1 + num2;

/*function minus(num1, num2) {
    return num1 - num2;
}*/
 const minus = (num1,num2) => num1 - num2;

let p = plus;
console.log("plus 타입은?", typeof plus);
console.log("p 타입은?", typeof p);
console.log("두 수의 합 = %d",p(20,30));

function calc(num1, num2, func) {
    return func(num1, num2);
}
console.log("두 수의 합 = ", calc(10, 20, plus));
console.log("두 수의 차 = ", calc(10, 20, minus));