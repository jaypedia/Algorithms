function solution(id) {
  const len = id.length;
  const maskingCount = len % 2 ? (len - 1) / 2 : len / 2;
  const masking = '*'.repeat(maskingCount);
  const restCount = len - maskingCount;
  const startCount = restCount % 2 ? (restCount - 1) / 2 : restCount / 2;
  const endCount = restCount - startCount;

  return id.slice(0, startCount) + masking + id.slice(-endCount);
}
