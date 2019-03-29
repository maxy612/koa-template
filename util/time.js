const format = timestamp => {
  const date = new Date(timestamp);
  const ce = num => String(num).padStart(2, '0');

  const year = date.getFullYear();
  const month = ce(date.getMonth() + 1);
  const day = ce(date.getDate());

  const hour = ce(date.getHours());
  const minute = ce(date.getMinutes());
  const second = ce(date.getSeconds());

  return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':');
}

const add = (...num) => {
  const len = num.length;
  let res = 0;

  for (let i = 0; i < len; i++) {
    res = res + num[i];
  }

  return res;
}

module.exports = {
  format,
  add
}