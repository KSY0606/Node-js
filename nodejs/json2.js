const fs = require("fs");
const userList = [
    {name: " 홍길동", age : 27, address : "서울시 종로구"},
    {name: " 김철수", age : 23, address : "서울시 중구"},
    {name: " 이영희", age : 20, address : "서울시 영등포구"}
];                                                      // 콜백함수
fs.writeFile("./list.json", JSON.stringify(userList), function(error) {
    console.log("write end!");
}); 
// list.json파일이 생성됨