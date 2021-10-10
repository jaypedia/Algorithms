// 2021-10-10
// 수박수박수박수박수?

// My Solution
function solution(n) {
  return n % 2 ? '수박'.repeat(Math.floor(n / 2)) + '수' : '수박'.repeat(n / 2);
}

// Other's solution 1
function solution(n) {
  return '수박'.repeat(n).substring(0, n);
}

// Other's solution 2
const waterMelon = n => {
  return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
};

// Other's solution 3
const waterMelon = n => '수박'.repeat(n).slice(0, n);

// Other's solution 4
function waterMelon(n) {
  return '수박'.repeat(n / 2) + (n % 2 ? '수' : '');
}

// Other's solution 5
function waterMelon(n) {
  var result = '';
  for (var i = 0; i < n; i++) {
    result += i % 2 == 0 ? '수' : '박';
  }
  return result;
}
