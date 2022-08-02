// es5 스타일
function hello5() {
    console.log("안녕하세요 es5");
}

//es6 스타일
const hello6 = () => {
    console.log("안녕하세요 es6")
}
hello5();
hello6();
console.log("안녕하세요", "잘가세요");
let na = "홍길동";
let age = 25;
console.log("내이름은" + na + "입니다.");
console.log("내이름은 %s입니다.",na);
console.log("내 나이는 %d세 입니다", age);
let h = 170;
let w = 70;
console.log("내 몸무게는 %dkg이고 키는 %dcm입니다",w,h);
console.log("이름: %s, 키: %dcm, 몸무게: %dkg",na,h,w);