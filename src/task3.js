/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined}
 *
 * @description Разворот массива на месте с выводом в консоль
 */
export function reverseArray(initialArray) {
    let leftPoint = 0;
    let rightPoint = initialArray.length - 1;

    while (leftPoint < rightPoint) {
        [initialArray[leftPoint], initialArray[rightPoint]] = [
            initialArray[rightPoint],
            initialArray[leftPoint],
        ];
        leftPoint++;
        rightPoint--;
    }

    console.log(initialArray);
}
