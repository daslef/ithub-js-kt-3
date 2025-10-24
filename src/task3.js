/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined} 
 * 
 * @description Разворот массива на месте с выводом в консоль
 */
export function reverseArray(initialArray) {
    for (let i = 0; i < initialArray.length / 2; i++) {
        let reversed = initialArray[initialArray.length - 1 - i]
        initialArray[initialArray.length - 1 - i] = initialArray[i]
        initialArray[i] = reversed
    }
    console.log(initialArray)
}
