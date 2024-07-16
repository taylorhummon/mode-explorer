export function buildMap(keys, valueFromKey) {
  const map = new Map();
  for (let key of keys) {
    map.set(key, valueFromKey(key));
  }
  return map;
}

export function arrayFromMap(map, entryFromValueAndKey) {
  const array = [];
  map.forEach((value, key) => {
    array.push(entryFromValueAndKey(value, key))
  });
  return array;
}
