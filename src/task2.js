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
  let hasNumbers = false;

  for (let i = 0; i < values.length; i++) {
    const num = Number(values[i]);
    if (!isNaN(num)) {
      sum += num;
      hasNumbers = true;
    }
  }
  if (!hasNumbers) {
    throw new Error("Отсутствуют численные данные в массиве!");
  }

  return sum;
}
