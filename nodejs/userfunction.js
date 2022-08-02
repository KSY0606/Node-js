// 선언적 함수
function message(data) {
    console.log(data, "코로나 조심합시다.")
}

// 표현식 함수
const corona = function() {
    console.log("오늘의 코로나 발생 현황 111245명");
}

// 화살표 함수
const message2 = (data) => {
    console.log("금요일은 %s평가일입니다.", data)
}


//선언적 함수
// message("우리모두");
const msg = message;
msg("우리모두");

//표현식 함수
corona();

// 화살표 함수
message2("React와 nodejs");