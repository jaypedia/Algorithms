// April 12, 2022
// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const isAlphabet = (letter) => {
    if (!letter) return false;
    if (letter.charCodeAt() > 96 && letter.charCodeAt() < 123) return true;
    return false;
  };

  const getSlicedWords = (str) => {
    const strArr = str.toLowerCase().split('');
    return strArr.reduce((acc, cur, idx) => {
      const first = cur;
      const next = strArr[idx + 1];

      if (isAlphabet(first) && isAlphabet(next)) {
        acc.push(first + next);
      }
      return acc;
    }, []);
  };

  const getIntersectionLength = (arr1, arr2) => {
    let length = 0;
    const [long, short] = arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1];
    short.forEach((v) => {
      if (long.includes(v)) {
        length++;
        long.splice(long.indexOf(v), 1);
      }
    });
    return length;
  };

  const getUnionLength = (arr1Length, arr2Length, interSectionLength) => {
    return arr1Length + arr2Length - interSectionLength;
  };

  const [wordArr1, wordArr2] = [getSlicedWords(str1), getSlicedWords(str2)];
  const [wordArrLength1, wordArrLength2] = [wordArr1.length, wordArr2.length];
  const interSectionLength = getIntersectionLength(wordArr1, wordArr2);
  const unionLength = getUnionLength(wordArrLength1, wordArrLength2, interSectionLength);

  if (interSectionLength === 0 && unionLength === 0) return 65536;
  return Math.floor((interSectionLength / unionLength) * 65536);
}
