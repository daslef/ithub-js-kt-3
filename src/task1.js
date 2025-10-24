/**
 * @param {number[]} initialArray - Исходный массив
 * @param {number} multiplier - Множитель
 *
 * @returns {number[]} Новый массив
 *
 * @description Возвращает массив с элементами, полученными
 * перемножением всех элементов исходного массива на число
 */
export function multipliedByN(initialArray, multiplier) {
  const newArray = [];
  for (let ix = 0; ix < initialArray.length; ix++) {
    newArray.push(initialArray[ix] * multiplier);
  }
  return newArray;
}
