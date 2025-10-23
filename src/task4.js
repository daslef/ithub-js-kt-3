/**
 * @param {any[]} data - Массив данных
 * @param {Function} callback - Проверочная функция
 * 
 * @returns {boolean} - Итог проверки
 * 
 * @description Проверка на наличие в массиве хотя бы
 * одного элемента, удовлетворяющего проверке
 */
export function hasCorrectElement(data, callback) {
    for (let ix = 0; ix<data.length; ix++) {
        if (callback(data[ix]) === true) {
            return true;
        }
    }
    return false;
}