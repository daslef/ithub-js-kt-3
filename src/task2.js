/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 *
 * @description Подсчет суммы элементов массива,
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
  let numberSum = 0;

  if (values.length === 0) {
    throw new Error("Передан пустой массив");
  }

  let count = 0;
  for (let i = 0; i < values.length; i++) {
    if (!isNaN(values[i])) {
      numberSum += Number(values[i]);
      count++;
    }
  }
  if (count === 0) {
    throw new Error("Отсутствуют численные данные");
  }
  return numberSum;
}
