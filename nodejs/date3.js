// timestamp = 날짜와 시간을 숫자로 표현

const date = new Date();
const dateToTimestamp = date.getTime();
const timestampToDate = new Date(1659403126760); // ()안은 dateToTimestamp의 값

console.log("오늘 날짜의 타임스탬프 : ", dateToTimestamp);
console.log("오늘 : ", timestampToDate); // << 를 아래처럼 보기좋게 표현가능
console.log("오늘 : ", timestampToDate.toLocaleString());

const timestampToInit = new Date(1);
console.log("타임스탬프 초기날짜 : ", timestampToInit);

const date1 = new Date();
const timestamp = date1.getTime();
console.log("타임스탬프 : ", timestamp);
const timestampdate = new Date(timestamp);
console.log("타임스탬프 날짜로 다시 변경 : ", timestampdate.toLocaleString());