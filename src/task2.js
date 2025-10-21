/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 * 
 * @description Подсчет суммы элементов массива, 
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
  return values.reduce((sum, current) => {
    const num = Number(current);
    return Number.isNaN(num) ? sum : sum + num;
  }, 0);
}
