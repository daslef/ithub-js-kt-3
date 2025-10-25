export function hasCorrectElement(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== "function") return false;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true; 
    }
  }
  return false;
}
 