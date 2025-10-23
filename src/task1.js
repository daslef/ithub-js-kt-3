/**
 * @param {number[]} initialArray - Исходный массив
 * @param {number} multiplier - Множитель
 * 
 * @returns {number[]} Новый массив
 * 
 * @description Возвращает массив с элементами, полученными 
 * перемножением всех элементов исходного массива на число
 */
export function multipliedByN(initialArray, multiplier) {
    let initialArrayMultiplier = []//Создаем свой массив
  
    for(let i = 0; initialArray.length > i; i++) {//for для того чтоб перемножить эл массива
      initialArrayMultiplier.push(initialArray[i] * multiplier)
    }
    return initialArrayMultiplier;
  }
  