const today = new Date();
const date1 = new Date(2022, 6-1, 6);   // 0이 1월이므로 12-1을 해줘야 12월이 출력됨
const date2 = new Date(2022, 6-1, 6, 12, 34, 56);



console.log(today.toLocaleString());
console.log("내 생일 => ", date1.toLocaleString());
console.log("내 생일시간 =>",date2.toLocaleString());

console.log("오늘 날짜 : %s",today.toLocaleDateString());
console.log("현재시간 : %s",today.toLocaleTimeString());
console.log("현재 년도 : %s", today.getFullYear());
console.log("현재 월 : %s", today.getMonth()+1);
console.log("현재 일 : %s", today.getDate());