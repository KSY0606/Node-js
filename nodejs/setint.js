/*setTimeout(() => {            //  setTimeout(() => console.log("안녕하세요"), 3000); 로 작성가능
    console.log("안녕하세요")
}, 3000);

setInterval(() => {            //  setInterval(() => console.log("안녕하세요"), 3000); 로 작성가능
    console.log("안녕하세요")
}, 3000);

const my = setInterval(() => console.log("안녕하세요"), 3000);
setTimeout(() => clearInterval(my), 10000);
*/

const hello = () => console.log("안녕하세요");
setInterval(hello,2000);