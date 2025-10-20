/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 *
 * @description Подсчет суммы элементов массива,
 * корректно переводимых из строки в численный вид.
 */

export function calculateSum(values) {
    let sum = 0;
    let correctDataCounter = 0;

    if (values.length === 0) {
        throw new Error("Передан пустой массив");
    }

    for (let i = 0; i < values.length; i++) {
        const arrayNumber = Number(values[i]);

        if (!isNaN(arrayNumber)) {
            sum += Number(arrayNumber);
            correctDataCounter++;
        }
    }

    if (correctDataCounter === 0) {
        throw new Error("Отсутствуют численные данные");
    }

    return sum;
}
