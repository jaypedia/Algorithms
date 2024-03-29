// Feb 24, 2022
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  const total = [...Array(count)].map((_, i) => (i + 1) * price).reduce((acc, cur) => acc + cur);
  return money >= total ? 0 : total - money;
}

// Other's solution 1
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

// Other's solution 2
const solution = (..._) => Math.max((_[0] * _[2] * ++_[2]) / 2 - _[1], 0);

// Other's solution 3
function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }

  return answer > money ? answer - money : 0;
}

// Other's solution 4
function solution(price, money, count) {
  const expectedMoney = Array.from({ length: count }).reduce(
    (acc, _, idx) => (acc += (idx + 1) * price),
    0
  );
  const gap = money - expectedMoney;

  return gap > 0 ? 0 : gap * -1;
}
