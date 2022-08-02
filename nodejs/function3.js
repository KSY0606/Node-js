const students = [
    {name : "김철수", score : 90},
    {name : "이영희", score : 70},
    {name : "홍길동", score : 80}
];  // 배열 객체

//등급 구하는 함수
function getDegree(score) {
    if(score >= 90) {
        return "A";
    }else if(score >= 80) {
        return "B";
    }else if(score >= 70) {
        return "C";
    }else if(score >= 60) {
        return "D";
    }else {
        return "F";
    }
}
students.forEach((student) => {
    const result = `이름 : ${student.name}  등급 : ${getDegree(student.score)}`;
    console.log(result);
});
