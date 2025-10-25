/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined}
 *
 * @description Разворот массива на месте с выводом в консоль
 */
export function reverseArray(initialArray) {

  let ix = initialArray.length - 1;
  let i = 0;
  while (ix > 0) {
    [initialArray[i], initialArray[ix]] = [initialArray[ix], initialArray[i]];
    ix--;
    i++;
  }
  console.log(initialArray);
  
  return;
}


// x []
// [x[0], x[4]] = [x[4], x[0]]
//
//  initialArray.push(initialArray[ix])
//   initialArray.splice(0,initialArray.length/2)
//   for (let ix = initialArray.length - 1; ix >= 0; ix--) {
//     [initialArray[i], initialArray[ix]] = [initialArray[ix], initialArray[i]];
//     i++;
//   }