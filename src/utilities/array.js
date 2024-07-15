export function buildIndicesArray(count) {
  if (count < 0) throw Error("buildIndicesArray() needs a non-negative argument");
  const array = [];
  for (let index = 0; index < count; index++) {
    array.push(index);
  }
  return array;
}
