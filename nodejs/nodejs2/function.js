function helloPrint() {
    console.log("안녕하세요");
    setTimeout(function() {
        helloPrint();        
    },3000);
}
helloPrint();


// 재귀호출   실행하자마자 안녕하세요가 출력되고  3초마다 안녕하세요가 출력됨.