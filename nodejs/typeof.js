const num = 20;
const na = "홍길동";
console.log("num의 타입은?", typeof num);
console.log("na의 타입은?", typeof na);
console.log("[]의 타입은?", typeof []);
console.log("{}의 타입은?", typeof {});

const bool = 50>20;
console.log("50>20의 타입?", typeof bool);

const num1 = 1;
console.log("num1의 타입은?", typeof num1);

const num2 = !1;;
console.log(num2);
console.log("num2의 타입은?", typeof num2);

// 3항연산자    조건?내용1:내용2;
const num3 = 50;
const num4 = 20;
const result = (num3>num4)?num3:num4;
console.log(`${result}이 더 큽니다.`);
const list1 = [10, 20, 30];
const list2 = [];
list1.length > 0? console.log("배열값 = ",list1) : console.log("배열값이 비었습니다.");
list2.length > 0? console.log("배열값 = ",list2) : console.log("배열값이 비었습니다.");