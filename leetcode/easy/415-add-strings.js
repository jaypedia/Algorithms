// June 25, 2022
// https://leetcode.com/problems/add-strings/

// Constraints
// 1) Without using any built-in library for handling large intergers
// 2) Not convert the inputs to integers directly

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let answer = '';
  let carry = 0;

  // num1과 num2중 길이가 더 짧은 것을 기준으로 for loop 돌기
  const [long, short] = num1.length >= num2.length ? [num1, num2] : [num2, num1];
  // long을 slice 해주기 (short 길이만큼) (123 + 1)  /45  20
  const [longFront, longBack] = [long.slice(0, -short.length), long.slice(-short.length)];

  // for loop - answer에 각 자리수의 합을 누적시켜준다.
  for (let i = short.length - 1; i >= 0; i--) {
    let sum = +longBack[i] + +short[i] + carry;

    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    answer = sum + '' + answer;
  }

  // carry가 0일 때 : 바로 longFront를 앞에 붙인다.
  if (!carry) return longFront + answer;

  // carry가 1이면서 longFront가 없을 때 - answer에 1을 붙이고 리턴한다.
  if (!longFront) return '1' + answer;

  // longFront가 MAX_SAFE_INTEGER - 1보다 작거나 같아서 1을 더할 수 있을 때
  if (+longFront <= Number.MAX_SAFE_INTEGER - 1) {
    return (+longFront + 1).toString() + answer;
  }

  // carry가 1이면서 longFront가 MAX_SAFE_INTEGER와 같거나 클 때
  let right = longFront.length - 1;
  let left = right - 1;
  let front = '';

  // 123 -> 124
  // 189 -> 190
  // 199 -> 200
  while (left >= 0) {
    const cur = +longFront[right];
    const next = +longFront[left];

    if (cur < 9) {
      front = (cur + 1).toString() + front;
      return longFront.slice(0, left) + front;
    }

    if (cur >= 9 && next < 9) {
      front = (next + 1).toString() + '0' + front;
      return longFront.slice(0, left - 1) + front;
    }

    front = '0' + front;
    right--;
    left--;
  }
};

console.log(addStrings('965851889636410748708524976419405193491', '76217403373357744506668')); // "965851889636410824925928349777149700159"
