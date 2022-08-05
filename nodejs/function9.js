//클로저(closer)  내부함수가 참조하는 외부함수의 지역변수가  외부함수가 리턴된 이후에도 유효성이 유지될 때, 이 내부함수를 클로저라고 함.

function grandParent (g1, g2) {
    const g3 = 3;
    return function parent(p1, p2) {
        const p3 = 33;
        return function child(c1, c2) {     // child 가 클로저임.
            const c3 = 333;
            return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        };
    };
}
const parentFunc = grandParent(1, 2);
const childFunc = parentFunc(11, 22);
console.log(childFunc(111,222));