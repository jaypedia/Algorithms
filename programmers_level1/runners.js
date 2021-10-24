// 2021-10-24~25
// 완주하지 못한 선수(해시)

// Solution
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"

// Other's solution 1
var solution = (_, $) =>
  _.find(
    _ => !$[_]--,
    $.map(_ => ($[_] = ($[_] | 0) + 1))
  );

function solution(participant, completion) {
  var dic = completion.reduce(
    (obj, t) => ((obj[t] = obj[t] ? obj[t] + 1 : 1), obj),
    {}
  );
  return participant.find(t => {
    if (dic[t]) dic[t] = dic[t] - 1;
    else return true;
  });
}

const solution = (p, c) => {
  p.sort();
  c.sort();
  while (p.length) {
    let pp = p.pop();
    if (pp !== c.pop()) return pp;
  }
};

var solution = (p, c) => {
  p.sort();
  c.sort();
  for (i = 0; i < p.length; i++) {
    if (p[i] != c[i]) {
      return p[i];
    }
  }
};

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return 'nothing';
}

function solution(participant, completion) {
  const hash = {};

  for (let val of participant) {
    if (!hash[val]) hash[val] = 0;
    hash[val]++;
  }

  const result = completion.forEach(val => hash[val]--);

  for (let key in hash) if (hash[key]) return key;
}

function solution(participant, completion) {
  let ret = [];
  let hashed = [];
  participant.forEach(entry => {
    hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1;
  });
  completion.forEach(entry => {
    hashed[entry] = hashed[entry] - 1;
  });

  for (var key in hashed) {
    if (hashed[key] >= 1) return key;
  }
}
