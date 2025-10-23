/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 * 
 * @description Подсчет суммы элементов массива, 
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
    if(values.length === 0)  {
      throw new Error("Передан пустой массив");
    }
    let nan = 0
    for(let i = 0; i < values.length; i++) {
        if(isNaN(values[i]))  {
            nan++
          }
    }
    if(nan === values.length) {
        throw new Error("Отсутствуют численные данные")
    }
    let sum = 0
    for(let i = 0; i < values.length; i++) {
        if (isFinite(Number(values[i]))) {
            sum += Number(values[i])
        }
    }
    
    return sum
  }
  