/*function hello() {
    console.log("안녕하세요");
}    를 아래 화살표함수로 나타냄  */
const hello = () => {            // 화살표 함수는 {} 안에 명령문이 1줄일 경우 {} 생략 가능   ex) const hello = () => console.log("안녕하세요");
    console.log("안녕하세요");
}

/*function sum(a, b) {
    return a + b;
}    를 아래처럼 변경 가능 ,  화살표 함수에서는 {} 와 return 생략 가능 */
const sum = (a,b) => a + b;

/*function hello2(name) {
    console.log(name + "님 안녕하세요");
}   를 아래처럼 변경,  매개변수(name)이 1개일 경우 ()도 생략 가능하다. */
const hello2 = name => console.log(name + "님 안녕하세요");
hello2("김철수");

const sumAndPrint = (num1, num2) => {
    const result = num1 + num2;
    return `두 수의 합은 ${result}입니다.`;
}
console.log(sumAndPrint(45,30));