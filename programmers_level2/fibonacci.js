// 2021-11-10
// Fibonacci numbers
// 첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열
// 처음 여섯 항은 1, 1, 2, 3, 5, 8

// 정확성 42.9 - 런타임 에러, 시간 초과
// 44번째 피보나치 수는 2971215073으로, int의 범위를 넘는다.
function solution(n) {
  return f(n) % 1234567;
}

function f(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  return f(n - 1) + f(n - 2);
}

// 모듈러 연산의 성질 이용
// (A + B) % C === ((A % C) + (B % C)) % C

// 리턴 값에서 나누는 게 안 된다는 것
