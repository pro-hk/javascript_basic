console.log("Hello Js");

/*조건문 : 
while : 길이를 모를 때
do~while
for : 정확한 길이를 알 때
*/
let i = 0;
i = i + 1; // ( i = i + x  ==  i += x; ----- )
// x = 1일때, i ++ ;
/* let num 
num = ++i  -- num = 1  /  i = 1
num = i++  -- num = 0  /  i = 1
*/
// i += 2;
// console.log(i);

// statement : 문
let sum = 0;
for (let i = 2; i <= 100; i += 2) {
  sum = sum + i;
  // sum += i;
}
console.log(sum);
