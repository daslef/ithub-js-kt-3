/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 * 
 * @description Подсчет суммы элементов массива, 
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
  if (values.length === 0) {
    throw new Error("Передан пустой массив");
  }

  let sum = 0; 
  let validNumbers = false; // наличия допустмых чисел

  for (let ix = 0; ix < values.length; ix++) {
    const num = Number(values[ix]); // преобразование строки в число
    if (!isNaN(num)) { // проверка допустимого числа
      sum += num; // Добавление к сумме
      validNumbers = true; //установка допустимого значен ия
    }
  }

  if (!validNumbers) {
    throw new Error("Отсутствуют численные данные");
  }

  return sum; 
}