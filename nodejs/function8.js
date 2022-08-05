// 함수의 유효범위(scope) - 지역변수, 전역변수를 알아야함
let resultSub;
function subtract(a, b) {
    resultSub = a - b;
}
subtract(50, 20);
console.log(resultSub);

function multiple(a, b) {
    const result = a * b;
    return result;
}
const r = multiple(10, 10);
console.log(r);

/*
function sum(a, b) {
    const resultSum = a + b;
}                                  이렇게 쓰면 에러남. 지역변수를 밖에서 사용하려함
sum(30, 80);
console.log(resultSum);
*/