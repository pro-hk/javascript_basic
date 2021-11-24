const fruits = ["apple", "banana", "orange", "kiwi"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
// 배열의 마지막 출력

fruits.push("plum");
console.log(fruits);

// primitive : 기본값 / num = 10, isOK = true, myname="장혁"
let num = 10;
let newNum = num;
console.log(newNum);
num = 20;
console.log(num, "===", newNum);
// reference : 참조값 / array, object
let colors = ["red", "green", "blue"];
// let newColors = colors; // 얕은 복사, 깊은 복사
// colors.unshift("yellow"); // unshift : 맨 앞에 추가
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors, "===", newColors);
// // colors = ["aaa","bbb"] -- 새로운 값을 할당하는 것은 안됨
// const lastItem = colors.pop(); // 맨 뒤 값 빼오기
// const firstItem = colors.shift(); // 맨 앞 값 빼오기
// console.log(lastItem, "===", firstItem);
const selectItem = colors.splice(1, 1); // (번호,갯수) 배열로 가져옴
console.log(selectItem);
console.log(colors);
