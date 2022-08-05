//커링 (curring) => 여러개의 파라미터(매개변수)를 갖는 함수가 있을때 그 중에 일부의 파라미터만 필요로 하는 함수를 만드는 기법
const add = x => y => x + y;
const add10 = add(10);
console.log(add10(20));  // add10에는  y function이 들어있음.
console.log(add(10)(20));


//커링 응용예제
const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`;
const americanoMachine = coffeeMachine("wate");
const latteMachine = coffeeMachine("milk");
const americano = americanoMachine("coffee bean");
const latte = latteMachine("coffee bean");
console.log(americano);
console.log(latte);