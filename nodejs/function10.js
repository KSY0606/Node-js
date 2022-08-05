//클로저를 통한 은닉화
/*function Hello(name) {
    this._name = name;
}
Hello.prototype.say = function() {
    console.log(this._name + "님 안녕하세요");
}
let hello1 = new Hello("홍길동");
let hello2 = new Hello("김철수");
let hello3 = new Hello("이영희");
hello1.say();
hello2.say();
hello3.say();
hello1._name = "도적";
hello1.say();*/


function Hello(name) {
    let _name = name;
    return function () {   //   <<익명함수가 클로저.
        console.log(_name + "님 안녕하세요");
    };
}
let hello1 = Hello("홍길동");
let hello2 = Hello("김철수");
let hello3 = Hello("이영희");
hello1();
hello2();
hello3();
hello1._name = "도적놈";
hello1();