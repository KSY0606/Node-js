const studentList = [
    {name : "홍길동", age : 50, kor : 80, eng : 70},
    {name : "김철수", age : 22, kor : 70, eng : 90},
    {name : "이영희", age : 22, kor : 90, eng : 80},
    {name : "박찬호", age : 45, kor : 60, eng : 82},
    {name : "손흥민", age : 31, kor : 77, eng : 86}
];
/*
const sorted = studentList.sort((before, next) => before.age - next.age);
console.log("나이 오름차순 정렬 : ",sorted);
console.log("나이 내림차순 정렬 : ",sorted.reverse());

const names = ["이영희", "김철수", "이동국", "홍길동", "이영표"];
const sliced = names.slice(1,3);
console.log(sliced);
*/

const top = studentList.sort((before, next) => before.eng - next.eng).reverse();  // 문제) 영어 순위권3명만 출력하기
console.log(top.slice(0,3));