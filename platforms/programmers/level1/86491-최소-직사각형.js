// March 16, 2022
// https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  const [w, h] = [[], []];
  sizes.forEach((size) => {
    w.push(Math.max(...size));
    h.push(Math.min(...size));
  });
  return Math.max(...w) * Math.max(...h);
}

function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))],
    [0, 0]
  );
  return hor * ver;
}

function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}

function solution(sizes) {
  sizes.map((item) => item.sort((a, b) => b - a));
  let hMax = Math.max.apply(
    null,
    sizes.map((item) => item[0])
  );
  let vMax = Math.max.apply(
    null,
    sizes.map((item) => item[1])
  );
  return hMax * vMax;
}
