module.exports = function check(str, config) {
    config = config.flat(1);
    let pattern = '';
    config.forEach((x, iter) => {
      if (+x) {
        pattern += x;
      } else {
        pattern += '\\' + x;
      }
      if (iter % 2) pattern += '|';
    });
    pattern = pattern.slice(0, -1);
  
    let newStr;
    let reg = new RegExp(pattern, 'g');
    while (str.length !== 0) {
      newStr = str.replace(reg, '')
      if (newStr === str) return false;
      str = newStr;
    }
    return true;
  }
