// 2021-11-03
// N개의 최소공배수 (N Least Common Multiples)

function gcd(a, b) {
  if (b === 0) return a;
  return getGcd(a, a % b);
}

function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

// Other solution 1
function nlcm(num) {
  var answer = 0;

  function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  answer = num.reduce(function (a, b) {
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    return lcm(min, max);
  });
  return answer;
}

// Other solution 2
function solution(arr) {
  return arr.reduce((acc, cur) => {
    const recursive = (min, max) => {
      return min % max === 0 ? max : recursive(max, min % max);
    };

    let max = 0;
    return (acc * cur) / recursive(acc, cur);
  });
}
