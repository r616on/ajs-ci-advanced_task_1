import orderByProps from '../orderByProps';

test('test orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const parametr = ['name', 'level'];
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, parametr)).toEqual(result);
});

test('test orderByProps other', () => {
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
  const result = [
    { key: 'attack', value: 80 },
    { key: 'level', value: 2 },
    { key: 'defence', value: 40 },
    { key: 'deth', value: 0 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
    { key: 'other', value: 'true' },
  ];
  expect(orderByProps(obj, parametr)).toEqual(result);
});
