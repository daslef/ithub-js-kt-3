/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined} 
 * 
 * @description Разворот массива на месте с выводом в консоль
 */



export function reverseArray(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    console.log(arr);
    return arr;
  }
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  console.log(arr);
  return arr;
}
