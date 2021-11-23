// console.log(num01);
// console.log(num02);
// console.log(num03);

var num01 = 10;
var num01 = 15;
let num02 = 20;
const num03 = 30;

// const : 변수선언과 동시에 값을 할당해야됨
// var, let : 변수선언만 가능 - undefined로 보임

// console.log를 변수선언보다 위에 위치한 경우 - var는 에러가 안뜸(hoisting-끌어올리다)
// var는 중복선언 가능 - 나중에 선언된 값으로 표시 / var, const - 중복선언 불가
// -> 좀더 프로그래밍 언어로 가기 위해 사용을 자제

console.log(num01);
console.log(num02);
console.log(num03);

// 명령어 → 컴파일(책) / 인터프리팅(실시간) → 2진수(컴퓨터)

let aa = 10;
if (true) {
  let aa = 20;
} else {
  let aa = 30;
}
console.log(aa);

// if에서 숫자 -  0 : 거짓, 나머지 : 참

// var : function scope를 따름
// let, const : block scope를 따름

var num = 20;
// 전역 변수 : 함수 밖의 변수
function test() {
  //function body
  var num = 10;
  var localNum = 15;
  // 지역 변수 : 함수 안의 변수
  if (true) {
    var functionNum = "나는 var로 선언된 functionNum입니다.";
    let blockNum = "나는 let으로 선언된 blockNum입니다.";
    console.log("🚀 ~ file: variables.js ~ line 39 ~ test ~ num", num);
    console.log("🚀 ~ file: variables.js ~ line 42 ~ test ~ localNum", localNum);
    // 함수 안에 할당한 변수 값도 함수 실행시 값이 나옴
  }
  console.log("🚀 ~ file: variables.js ~ line 45 ~ test ~ functionNum", functionNum);
  // console.log("🚀 ~ file: variables.js ~ line 46 ~ test ~ blockNum", blockNum);
}
test();
// 함수의 호출(실행)
console.log("🚀 ~ file: variables.js ~ line 37 ~ num", num);

// var : 함수 안에 선언한 값을 밖에서 확인 가능(let, const는 불가)

// 주석 여러줄 - /**하면 자동완성 */
/**
 *
 *
 *
 *
 *
 */

console.log(Math.round(1.6));
// 객체.함수(매개변수)

let age = 20;
let name = "장혁"; // `내용 ${변수}` : 문자 + 변수 / '내용' : / "내용" : 모든 내용이 문자
let ok = true;
let colors = ["red", "green", "blue", "orange"]; // 배열(array) - 번호매기기(시작:0) - 게시판.. 배열 - 프론트에서 가장 중요!!!!
colors.push("yellow"); // 배열에 추가 가능
console.log("나의 이름은 " + name + "이고 나의 나이는 " + age);
console.log(`나의 이름은 ${name}이고 나의 나이는 ${age}`);
console.log(colors[0]);
console.log(colors[4]);
