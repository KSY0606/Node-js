const nums = [10, 20, 30];
nums.reverse();
console.log(nums);

const scores = [85, 96, 70, 88, 60];
const sortScores = scores.sort();
console.log("오름차순 정렬 : ",sortScores); // 오름차순 정렬
console.log("내림차순 정렬 : ",sortScores.reverse());  //  내림차순은 sort하고 reverse

const names = ["이영희", "김철수", "홍길동"];
console.log(names.sort());