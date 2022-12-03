// #4
function solution(id) {
  const len = id.length;
  const maskingCount = len % 2 ? (len - 1) / 2 : len / 2;
  const masking = '*'.repeat(maskingCount);
  const restCount = len - maskingCount;
  const startCount = restCount % 2 ? (restCount - 1) / 2 : restCount / 2;
  const endCount = restCount - startCount;

  return id.slice(0, startCount) + masking + id.slice(-endCount);
}

// #5
function getStylesOf(element, styles) {
  const elementType = element.elementType;
  const obj = styles[elementType] || {};
  const stylesKeyArr = Object.keys(styles);

  for (const className of stylesKeyArr) {
    if (className.slice(0, 1) !== '.') continue;
    const classObj = styles[className];
    for (const key in classObj) {
      obj[key] = classObj[key];
    }
  }

  const id = '#' + element.id;
  const idObj = styles[id];

  for (const key in idObj) {
    obj[key] = idObj[key];
  }

  return obj;
}

function solution(_element, _styles) {
  const element = JSON.parse(_element);
  const styles = JSON.parse(_styles);
  const result = getStylesOf(element, styles);
  return JSON.stringify(result, Object.keys(result).sort());
}

// #6
function solution(tags) {
  if (!tags) return false;
  const stack = [];
  const tagsArr = tags.slice(1, -1).split('><');

  for (const tag of tagsArr) {
    if (tag[tag.length - 1] === '/') continue;

    if (tag[0] === '/') {
      const top = stack[stack.length - 1];
      if (top === tag.slice(1)) {
        stack.pop();
      }
    } else {
      stack.push(tag);
    }
  }

  return stack.length === 0;
}
