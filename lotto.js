const lotto = [];
for (let i = 1; i < 46; i++) {
  lotto.push(i);
}
for (let i = 0; i < 6; i++) {
  const random = Math.ceil(Math.random() * lotto.length - 1);
  console.log(lotto.splice(random, 1)[0]);
  console.log("lotto.length===", lotto.length);
}
// static 객체, 메서드 는 함수선언 필요 없음
// const random02 = Math.ceil(Math.random() * 45);
// console.log(random02);
// const random03 = Math.ceil(Math.random() * 45);
// console.log(random03);
// const random04 = Math.ceil(Math.random() * 45);
// console.log(random04);
// const random05 = Math.ceil(Math.random() * 45);
// console.log(random05);
// const random06 = Math.ceil(Math.random() * 45);
// console.log(random06);

// const now = new Date();
// const mainVisualSlider = new Swiper();
// console.log(Math.round(1.5));
// console.log(Math.floor(1.9));
// console.log(Math.ceil(1.1));

/*
코끼리;
코끼리.eat();
코끼리.walk();
코끼리.sleep();
코끼리.weight = 300;
코끼리.height = 180;

const dumbo = new 코끼리();
dumbo.eat();
dumbo.weight = 30;
dumbo.swimming(); // 코끼리에 없음
*/
