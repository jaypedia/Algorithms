// April 11, 2022
// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  let answer = skill_trees.length;

  skill_trees.forEach((s) => {
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

// Use set
function solution(skill, skill_trees) {
  let answer = 0;

  const set = new Set(skill);

  for (const skillTree of skill_trees) {
    const arr = skill.split('');
    for (let i = 0; i < skillTree.length; i++) {
      if (!set.has(skillTree[i])) continue;
      if (!arr.length) break;
      if (arr.shift() !== skillTree[i]) break;
      if (!arr.length || i === skillTree.length - 1) {
        console.log(skillTree);
        answer++;
        break;
      }
    }
  }

  return answer;
}
