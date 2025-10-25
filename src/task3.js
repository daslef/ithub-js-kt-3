/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined} 
 * 
 * @description Разворот массива на месте с выводом в консоль
 */
export function reverseArray(initialArray) {

    for (let ix = 0; ix < Math.floor(initialArray.length / 2); ix++) {
        let ixx = initialArray.length - 1 - ix;
        let temp = initialArray[ix];
        initialArray[ix] = initialArray[ixx];
        initialArray[ixx] = temp;
    }
    
    
    console.log(initialArray);
}