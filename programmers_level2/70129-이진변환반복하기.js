// May 7, 2022
//https://programmers.co.kr/learn/courses/30/lessons/70129

// My solution
function solution(s) {
  let binCnt = 0;
  let zeroCnt = 0;

  while (s !== '1') {
    const rmZero = s.replace(/0/g, '');
    zeroCnt += s.length - rmZero.length;
    s = rmZero.length.toString(2);
    binCnt++;
  }

  return [binCnt, zeroCnt];
}

// Other's solution
function solution(s) {
  const reg = /0/g;
  let cnt = 0,
    delCnt = 0;

  while (s !== '1') {
    const length = s.match(reg) ? s.match(reg).length : 0;
    cnt += 1;
    delCnt += length;
    s = (s.length - length).toString(2);
  }

  return [cnt, delCnt];
}
