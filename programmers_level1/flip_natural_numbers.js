// 2021-10-08
// 자연수 뒤집기

// My Solution
function solution(n) {
    return (n + '')
      .split('')
      .map(v => +v)
      .reverse();
  }

// Other's solution
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}

// 2
function solution(n) {
    // var arr = [];
    // for (var i=0; i<n.length; i++) {
    //     arr.push(n[i]);
    //     console.log(n[i]);
    // }
    // console.log(arr);
    // console.log('---------')
    // return n.toString().split('').sort((a, b) => b > a).map(o => o = parseInt(o));
    return n.toString().split('').reverse().map(o => o = parseInt(o));
}

// 3
function solution(n) {
    var answer = [];
    n = n + "";
    for (var i = n.length - 1; i >= 0; i--) {
        answer.push(Number(n[i]));
    }
    return answer;
}
