/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined}
 *
 * @description Разворот массива на месте с выводом в консоль
 */
export function reverseArray(initialArray) {
  let ix = 0;
  for (let i = initialArray.length - 1; i > 0; i--) {
    [initialArray[i], initialArray[ix]] = [initialArray[ix], initialArray[i]];
    ix++;
  }
  console.log(initialArray);
}
