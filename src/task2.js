/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 * 
 * @description Подсчет суммы элементов массива, 
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
    let x = 0
    let y
    if (values.length === 0) {
        throw new Error("Передан пустой массив")
    }
    for (let i = 0; i < values.length; i++) {
        y = Number(values[i])
        if (!isNaN(y)) {
            x += y
        }
    }
    if (isNaN(y)) {
        throw new Error("Отсутствуют численные данные")
    }
    return x
}
