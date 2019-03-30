const format = timestamp => {
  const date = new Date(timestamp);
  const ce = num => String(num).padStart(2, '0');

  const year = date.getUTCFullYear();
  const month = ce(date.getUTCMonth() + 1);
  const day = ce(date.getUTCDate());

  const hour = ce(date.getUTCHours());
  const minute = ce(date.getUTCMinutes());
  const second = ce(date.getUTCSeconds());

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