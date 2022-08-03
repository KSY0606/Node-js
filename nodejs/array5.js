const part1 = ["김철수", "이영희"];
const part2 = ["홍길동", "이동국"];
const part3 = ["박찬호", "손흥민"];
const team = part1.concat(part2);
const team2 = part1.concat(part2, part3);
console.log("출전팀 : ",team);
console.log("연합팀 : ",team2);