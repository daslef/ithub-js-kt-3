/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined} 
 * 
 * @description Разворот массива на месте с выводом в консоль
 */
export function hasCorrectElement(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (callback(data[i])) {
            return true;
        }
    }
    return false;
} 
