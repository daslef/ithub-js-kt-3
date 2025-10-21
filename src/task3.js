/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined} 
 * 
 * @description Разворот массива на месте с выводом в консоль
 */
export function reverseArray(initialArray) {

    for (let i = 0; i < Math.floor(initialArray.length / 2); i += 1) {
        let tmp = initialArray[i]
        initialArray[i] = initialArray[initialArray.length - 1 - i]
        initialArray[initialArray.length - 1 - i] = tmp
    }

    console.log(initialArray)

    return undefined
}
