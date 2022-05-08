// May 7, 2022
// https://programmers.co.kr/learn/courses/30/lessons/67257

// Use eval()
function solution(expression) {
  const operatorsTable = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];

  const resultArr = [];

  for (const operatorArr of operatorsTable) {
    const cur = expression.split(/(\D)/);

    for (const operator of operatorArr) {
      while (cur.includes(operator)) {
        const operatorIdx = cur.indexOf(operator);
        const curOperationStr = cur.slice(operatorIdx - 1, operatorIdx + 2).join('');
        const calcResult = eval(curOperationStr);
        cur.splice(operatorIdx - 1, 3, calcResult);
      }
    }

    resultArr.push(Math.abs(cur));
  }

  return Math.max(...resultArr);
}
