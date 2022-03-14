// March 14, 2022
// https://programmers.co.kr/learn/courses/30/lessons/92334

// My solution
function solution(id_list, report, k) {
  const reportSet = new Set(report);
  const suspendedIdSet = checkSuspended(reportSet, k);
  const mailObj = {};
  id_list.forEach(id => (mailObj[id] = 0));

  reportSet.forEach(v => {
    const reportedUser = v.split(' ')[1];
    if (suspendedIdSet.has(reportedUser)) {
      const user = v.split(' ')[0];
      mailObj[user]++;
    }
  });

  return Object.values(mailObj);
}

const checkSuspended = (reportSet, k) => {
  const obj = {};
  const suspendedIdSet = new Set();
  reportSet.forEach(v => {
    obj[v.split(' ')[1]] = (obj[v.split(' ')[1]] || 0) + 1;
  });
  for (const [key, value] of Object.entries(obj)) {
    if (value >= k) {
      suspendedIdSet.add(key);
    }
  }
  return suspendedIdSet;
};

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));
