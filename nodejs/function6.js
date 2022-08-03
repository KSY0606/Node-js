function helloPrint() {
    console.log("안녕하세요");
    setTimeout(function() {
        helloPrint();        
    },3000);
}
helloPrint();


// 재귀호출   실행하자마자 안녕하세요가 출력되고  3초마다 안녕하세요가 출력됨.

//실행하자마자 7라인 호출 - 1라인 실행 - 2라인 안녕하세요 출력 - 3,5라인 타임아웃 3초뒤 - 4라인 helloPrint()함수 실행 - 2라인 안녕하세요 출력  -----반복