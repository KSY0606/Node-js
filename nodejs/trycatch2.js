function hello() {
    console.log("안녕하세요");
}

try {
    hello();
}catch (e) {
    console.error(e);
}finally {
    console.log("난 무조건 실행");
}


try {
    bye();   // bye라는 함수는 없기때문에 오류발생, catch실행됨
}catch (e) {
    console.error(e);
}finally {
    console.log("난 무조건 실행2");
}