import orderByProps from './orderByProps';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  deth: 0,
  other: 'true',
  attack: 80,
  defence: 40,
};
const parametr = ['attack', 'level'];
console.log(orderByProps(obj, parametr));
