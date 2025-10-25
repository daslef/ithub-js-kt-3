/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 * 
 * @description Подсчет суммы элементов массива, 
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
 if (!Array.isArray(values)) {
    throw new TypeError("Не является массивом") 
  } 
  if (values.length === 0) { 
    throw new TypeError("Массив пустой") 
  } 
  let mew = 0
  let none = false
   for (let i = 0; i < values.length; i++){  
  const hi = values[i] 
   if(typeof hi !== "string") continue  
   let nill = hi.trim() 
   if (nill === "" ) continue
   let by = Number(nill) 


  }
  return 0
}
