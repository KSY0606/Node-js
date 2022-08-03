const str = "<h1>안녕하세요</h1>";   
//  const result = str.replace("<h1>", "").replace("</h1>", ""); 를 정규표현식 사용해서 ↓
// const result = str.replace(/정규표현식/g,"");    g는 문자열 전체에서 해당 문자를 찾는의미로 사용.
const result = str.replace(/<h1>/g, "").replace(/<\/h1>/g, "");
console.log("결과 = ", result);

const str1 = "<h1>특별가 - </h1><h2>55,000</h2>"
const result1 = str1.replace(/<..>/g, "").replace(/<...>/g, "");  // .은 1개의 글자 , ..은 2개의 글자
console.log("결과2 = %s", result1);

const str2 = "<div>특별가 - <h2>55,000</h2></div>";
// const result2=str2.replace(/<.{0,1}h2>/g, "");   // .{0,1} = 1개의 문자가 0개이거나 1개이다. 
const result2=str2.replace(/<.{0,4}>/g, "");  // < > 안에 문자가 0~4개일 경우
console.log(result2);

const str3 = "/정상가/ - 3000원(특별,할인가 - 2300원)";
const result3 = str3.replace(/[()\-,\/]/g, "");  // [] 안에 작성한 것들을 제거해줌,  () - , /를 제거,  - / 는 이스케이프(\)를 사용해줘야함.
console.log(result3);

const text = "hello my name is gildong";
const metched = text.match(/[a-i]{1,2}/g);  // a~i 사이의 영어를 1,2개로 묶어 배열처리
console.log(metched);