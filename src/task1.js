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
  let multiplied = []

  for (let i = 0; i < initialArray.length; i += 1) {
    multiplied[i] = initialArray[i] * multiplier
  }

  return multiplied;
}