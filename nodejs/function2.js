function sum(a,b) {
    const result = a + b;
    return result;
}
const result = sum(100,200);
console.log(result);

const getyymmdd = (date) => {
    const newdate = new Date(date);
    const yyyy = newdate.getFullYear();
    const mm = newdate.getMonth() < 9 ? `0${newdate.getMonth()+1}` : (newdate.getMonth()+1);
    const dd = newdate.getDate() < 10 ? `0${newdate.getDate()}` : (newdate.getDate());
    return `${yyyy}년 ${mm}월 ${dd}일`;
}
let day = 100;
const date = new Date();
const dateTimestamp = date.getTime();
let dday = getyymmdd(dateTimestamp + (day*24*60*60*1000));
console.log("%d일 기념일 => %s", day, dday);

/*
const date = new Date();
const dateToTimestamp = date.getTime();
//console.log("오늘 날짜의 타임스탬프 : ", dateToTimestamp);
const timestampToInit = new Date(1);
console.log("타임스탬프 초기날짜 : ", timestampToInit);
*/