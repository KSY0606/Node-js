const studentList = [
    {name : "김철수", kor : 80, eng : 70, mat : 86},
    {name : "이영희", kor : 90, eng : 60, mat : 76},
    {name : "홍길동", kor : 88, eng : 77, mat : 60}
];

let searchName = "이영희";
let sw = false;
let stu = {};
for(const student of studentList) {
    if(student.name == searchName) {
        stu = student;
        sw = true;
        break;
    }
}
if(sw == false) {
        console.log("시험명단에 없습니다.");
}else {
    console.log(stu.name,"님의 성적표");
    console.log("국어 점수 : ",stu.kor);
    console.log("영어 점수 : ",stu.eng);
    console.log("수학 점수 : ",stu.mat);
}


/*
for(var i =0; i < studentList.length; i++) {
    console.log(studentList[i]);
};   를 아래 처럼사용가능 값은 동일함



for(const student of studentList) {
    console.log(student);
}


studentList.forEach(function(student) {
    console.log(student);
});
*/

// 배열 객체에 사용가능한 for문 3가지 방법!

/* studentList.forEach(student => console.log(student));    화살표 함수를 사용함, 값은 동일함*/


const scores = [58, 96, 74, 80, 77];
let sum = 0;
scores.forEach(function(score) {
    sum += score 
});console.log(sum);