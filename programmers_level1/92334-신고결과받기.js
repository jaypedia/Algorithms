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

// Aug 6, 2022
function solution(id_list, report, k) {
  const reportList = [...new Set(report)];
  const reportObj = {};
  const reportCountMap = new Map();
  const suspendedUser = new Set();

  reportList.forEach(v => {
    const [a, b] = v.split(' ');
    reportCountMap.set(b, (reportCountMap.get(b) || 0) + 1);
    if (reportCountMap.get(b) + 1 > k) suspendedUser.add(b);
    if (reportObj[a]) reportObj[a].push(b);
    else reportObj[a] = [b];
  });

  const answer = [];
  id_list.forEach(id => {
    let count = 0;
    const reported = reportObj[id];
    if (reported) {
      reported.forEach(r => {
        if (suspendedUser.has(r)) count++;
      });
    }
    answer.push(count);
  });
  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));
