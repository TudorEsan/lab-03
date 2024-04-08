export function hasValidSubset(numbers: number[], targetSum: number): boolean {
  if (numbers.length === 0) {
    return false;
  }

  for (let i = 0; i < numbers.length; i++) {
    let currentSum = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      currentSum += numbers[j];

      if (currentSum === targetSum) {
        return true;
      } else if (currentSum > targetSum) {
        break; 
      }
    }
  }

  return false; // No subset found
}
