/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 * 
 * @description Подсчет суммы элементов массива, 
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
  let sum = 0
  let number_count = 0
  if (values.length === 0) {
    throw new Error ("Передан пустой массив");
  }
  for (let ix = 0; ix < values.length; ix++) {
    if (!isNaN(values[ix])) {
      number_count ++
    }
  }
  if (number_count === 0) {
    throw new Error ("Отсутствуют численные данные");
  }
  
  
  for (let ix = 0; ix < values.length; ix++) {
    if (!isNaN(values[ix])) {
      sum += Number(values[ix])
    }
  }
  return sum
}