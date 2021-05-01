import orderByProps from './orderByProps';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const parametr = ['name', 'level'];
console.log(orderByProps(obj, parametr));
