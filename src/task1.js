export function multipliedByN(initialArray, multiplier) {
  let multiplied = []

  for (let i = 0; i < initialArray.length; i += 1) {
    multiplied[i] = initialArray[i] * multiplier
  }

  return multiplied;
}

