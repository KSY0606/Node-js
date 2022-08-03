const price1 = "3000";
const price2 = "2000";
console.log("가격의 총합 = ", Number(price1) + Number(price2));  // parseInt(price1) + parseInt(price2); 도 같음

const num1 = "23.4";
const num2 = "12.8";
console.log("가격의 총합 = ", Number(num1) + Number(num2));     // parseInt(num1) + parseInt(num2); 와는 값이 다름
console.log("가격의 총합 = ", parseInt(num1) + parseInt(num2));

const price3 = "3000원";
const price4 = "2000원";
console.log("가격의 총합 = ", Number(price3) + Number(price4));
console.log("가격의 총합 = ", parseInt(price3) + parseInt(price4));  // 숫자가 나오다 문자가 나오면 문자 무시

const price5 = "원가 3000";
const price6 = "원가 2000";
console.log("가격의 총합 = ", Number(price5) + Number(price6));
console.log("가격의 총합 = ", parseInt(price5) + parseInt(price6)); // 처음부터 문자가 나와서 NaN