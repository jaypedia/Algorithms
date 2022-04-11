// April 11, 2022
// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  let answer = skill_trees.length;

  skill_trees.forEach(s => {
    const arr = [];
    for (const c of s) {
      if (skill.includes(c)) arr.push(c);
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== skill[i]) {
        answer--;
        break;
      }
    }
  });

  return answer;
}

console.log(solution('ASC', ['A', 'Q'])); // 1
console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])); // 2
console.log(solution('CBD', ['C', 'D', 'CB', 'BDA'])); // 2
console.log(solution('CBD', ['CAD'])); // 0
console.log(solution('CBD', ['AEF', 'ZJW'])); // 2
console.log(solution('CBDK', ['CB', 'CXYB', 'BD', 'AECD', 'ABC', 'AEX', 'CDB', 'CBKD', 'IJCB', 'LMDK'])); // 4

// Use filter()
function solution(skill, skill_trees) {
  function isCorrect(n) {
    const skillArr = skill.split('');

    for (let i = 0; i < n.length; i++) {
      if (skillArr.length <= 0) break;
      if (!skill.includes(n[i])) continue;
      if (n[i] === skillArr.shift()) continue;
      return false;
    }

    return true;
  }

  return skill_trees.filter(isCorrect).length;
}
