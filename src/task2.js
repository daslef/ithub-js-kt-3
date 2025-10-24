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
  let validNumbers = false;

  for (let i = 0; i < values.length; i++) {
    const number = Number(values[i]);
    
    if (!isNaN(number)) {
      sum += number;
      validNumbers = true;
    }
  }

  if (!validNumbers) {
    throw new Error("Отсутствуют численные данные");
  }

  return sum;
}
