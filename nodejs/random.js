const dice = () => Math.floor(Math.random()*6)+1; // return 생략
/*
function dice() {
    return Math.floor(Math.random()*6)+1;
} */
console.log("주사위 값 ", dice());


const makeRandom = (start, end) => Math.floor(Math.random()*(end-start)+1)+start;
console.log(`구간 난수 구하기 => ${makeRandom(10, 20)}`);

const num = 23.7;
console.log("반올림 값 : ", Math.round(num));
console.log("내림 값 : ", Math.floor(num));
console.log("올림 값 : ", Math.ceil(num));
console.log("버림 값 : ", Math.trunc(num)); // 값이 음수일 경우 내림값과는 좀 다름

console.log(Math.pow(7,2)); // 7에 2제곱
console.log(Math.sqrt(2)); // 제곱근 (루트2)
console.log(Math.cbrt(-8)); // 세제곱근
console.log(Math.sign(254)); // ()안이 양수면 1 출력
console.log(Math.sign(-35)); // ()안이 음수면 -1 출력
