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
  let i = 0;
  callback = false;
  while (i < data.length) {
    if (data[i] > 0) callback = true;
    if(data[i] === " ") callback = true

    i++;
  }
  return callback;
}
