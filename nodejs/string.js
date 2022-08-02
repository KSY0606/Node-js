const num1 = isNaN(20); // is Not a Number  숫자가 아니냐고 묻는것  ()안이 숫자가 맞다면 false 아니라면 ture
const num2 = isNaN("30");
const num = "hello";
let result;
if(isNaN(num)) {
    result = "숫자가 아닙니다."
}else {
    result = "숫자입니다."
}
console.log(result);
const str = "computer";  // 배열로 취급함
console.log("문자열의 길이:",str.length);
console.log("문자열[0]:",str[0]);
console.log("문자열[5]:",str[5]);
console.log(`${str}라는 문자에서 마지막 글자는 ${str[str.length-1]}입니다.`);
console.log(str.indexOf("com"));
console.log(str.indexOf("put"));
console.log(str.indexOf("the"));