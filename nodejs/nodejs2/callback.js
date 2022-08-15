//콜백함수(callback)

// 합 구하는 함수
const sum = (num1, num2) => num1 + num2;

// 결과 출력하는 함수
const Result = result => console.log(`결과는 ${result}입니다.`);

// 합 구하고 결과 출력하는 함수
const sumAndPrint = (calcResult,callback) => {
    callback(calcResult);
}


sumAndPrint(sum(30, 30),Result);