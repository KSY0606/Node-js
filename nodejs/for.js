const studentList = [
    {name : "김철수", kor : 80, eng : 70, mat : 86},
    {name : "이영희", kor : 90, eng : 60, mat : 76},
    {name : "홍길동", kor : 88, eng : 77, mat : 60}
];
let searchName = "이영희";
// 반복문
let index;
for(index = 0; index < studentList.length; index++) {
    if(studentList[index].name === searchName) {
        break;
    }
}
if(index == studentList.length) {
    console.log("시험 명단에 없습니다.");
}else {
    console.log(`${studentList[index].name}님의 성적표`);
    console.log("국어 점수 : ",studentList[index].kor);
    console.log("영어 점수 : ",studentList[index].eng);
    console.log("수학 점수 : ",studentList[index].mat);
}

/* 내가 한거, 틀림
for(var i =0; i < studentList.length; i++) {
    if(studentList[i].name == searchName) {
        console.log(studentList[i].name, "님의 성적표");
        console.log("국어 점수 : ",studentList[i].kor);
        console.log("영어 점수 : ",studentList[i].eng);
        console.log("수학 점수 : ",studentList[i].mat);
    }else {
        console.log("시험 명단에 없습니다.");
    }
}
*/