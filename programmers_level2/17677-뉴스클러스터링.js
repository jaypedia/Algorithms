// April 12, 2022
// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const isAlphabet = letter => {
    if (!letter) return false;
    if (letter.charCodeAt() > 96 && letter.charCodeAt() < 123) return true;
    return false;
  };

  const getSlicedWords = word => {
    const arr = [];
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
      const letter1 = word[i];
      const letter2 = word[i + 1];

      if (isAlphabet(letter1) && isAlphabet(letter2)) {
        arr.push(letter1 + letter2);
      }
    }
    return arr;
  };

  const getIntersectionLength = (arr1, arr2) => {
    let length = 0;
    const [long, short] = arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1];
    short.forEach(v => {
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

console.log(solution('FRANCE', 'french'));
console.log(solution('E=M*C^2', 'e=m*c^2'));
console.log(solution('aaa', 'aaaa'));
console.log(solution('aa1+aa2', 'AAAA12'));
