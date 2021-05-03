export default function orderByProps(obj, parametr) {
  const arr = [];
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const couple = { key: prop, value: obj[prop] };
      arr.push(couple);
    }
  }
  const sortArr = [];
  for (let k = 0; k < parametr.length; k += 1) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].key === parametr[k]) {
        sortArr.splice(k, 0, arr[i]);
        arr.splice(i, 1);
      }
    }
  }
  arr.sort((a, b) => a.key.localeCompare(b.key));
  return [...sortArr, ...arr];
}
