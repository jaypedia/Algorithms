// April 4, 2022
// https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
  return w * h - (w + h - gcd(w, h));
}

const gcd = (a, b) => {
  if (b === 0) return a;
  return a > b ? gcd(b, a % b) : gcd(a, b % a);
};

// https://noogoonaa.tistory.com/74
function gcd2(w, h) {
  const mod = w % h;
  if (mod === 0) return h;
  return gcd(h, mod);
}
