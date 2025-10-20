/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined}
 *
 * @description Разворот массива на месте с выводом в консоль
 */

export function reverseArray(initialArray) {
    let leftPointer = 0;
    let rightPointer = initialArray.length - 1;

    while (leftPointer < rightPointer) {
        [initialArray[leftPointer], initialArray[rightPointer]] = [
            initialArray[rightPointer],
            initialArray[leftPointer],
        ];

        leftPointer++;
        rightPointer--;
    }

    console.log(initialArray)

    return initialArray;
}
