const sumNumber = (start, end, accu) => {
    if(start > end) return accu;
    return sumNumber(start+1, end, accu+start);
}

console.log("결과 = ",sumNumber(1, 10, 0));

const factorial = (num) => {
    let result = 1;
    for(let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log("팩토리얼 결과 = ", factorial(5));