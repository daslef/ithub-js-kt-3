/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 * 
 * @description Подсчет суммы элементов массива, 
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
  if (values.length === 0) throw new Error("Передан пустой массив");

  let sum = 0
  let invalid = 0

  for (let i = 0; i < values.length; i += 1) {
    const number = Number(values[i])
    if (Number.isFinite(number)) {
      sum += number
    } else {
      invalid += 1
    }
  }

  if (invalid === values.length) throw new Error("Отсутствуют численные данные")

  return sum
}