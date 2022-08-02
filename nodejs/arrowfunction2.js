const students = [
    {name : "김철수", kor : 80, eng : 75, mat : 96},
    {name : "이영희", kor : 90, eng : 85, mat : 90},
    {name : "홍길동", kor : 70, eng : 60, mat : 82}
];

//총점 구하는 함수
const sum = (num1, num2, num3) => num1 + num2 + num3;

//forEach 이용해서 각 성적 출력
students.forEach(student => {
    console.log(`${student.name}님의 총점 : ${sum(student.kor, student.eng, student.mat)}`);
});
