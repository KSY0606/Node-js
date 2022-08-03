const str = "computer";
const repStr = str.replace("pu","ab");
console.log(repStr);
const str2 = "(hello)";
const repStr2 = str2.replace("(", "{").replace(")", "}");
console.log(repStr2);

const dateString = "2022-08-03T10:06:00";
const repdate = dateString.replace("T", " ");
console.log(repdate);

const names = "홍길동, 이영희, 김철수";
const name = names.split(",");  // ,가 구분자가 되어 ,를 기준으로 나뉨
console.log(name[0]);
const k = "korea";
const str3 = k.split("r");
console.log(str3);
const date = repdate.split(" ")[0];
const time = repdate.split(" ")[1];
console.log("오늘 날짜 = %s",date);
console.log("오늘 시간 = %s",time);