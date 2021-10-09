// 2021-10-09
// The Number of p and y in String

const solution = s =>
  (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length;
