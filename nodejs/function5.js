const hap = (a,b) => a + b;
console.log("두 수의 합 = ", hap(10,20));

// 재귀호출함수
const countdown = (value) => {
    console.log("출력값 = ", value);
    if(value === 0) return value;
    return countdown(value-1);
}
const lastvalue = countdown(10);
console.log("최종값 = ",lastvalue);