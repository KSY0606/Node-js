//JSON(javaScript Object Notation : 자바스크립트 객체 표기법) 

const user = {}; //  json 데이터 표기법
user.name = "김철수";
user.age = 26;
console.log(user.name);
console.log(user);
const person = {
    name : "홍길동",
    age : 40,
    job : "도적"
};
console.log("이름 : ",person.name);
console.log(person["age"]);