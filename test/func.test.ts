import { hasValidSubset } from "../src";

describe("findNumberWithConditions", () => {
  it("should return false for an empty array", () => {
    const numbers: number[] = [];
    const targetSum = 5;

    const result = hasValidSubset(numbers, targetSum);
    expect(result).toBe(false);
  });

  it("should return true when a valid subset exists", () => {
    const numbers = [2, 8, 4, 1, 5];
    const targetSum = 10;

    const result = hasValidSubset(numbers, targetSum);
    expect(result).toBe(true);
  });

  it("should return false when no valid subset exists", () => {
    const numbers = [3, 6, 1, 9];
    const targetSum = 20;

    const result = hasValidSubset(numbers, targetSum);
    expect(result).toBe(false);
  });

  it("should return true", () => {
    const numbers = [1, 9, 2];
    const targetSum = 11;

    const result = hasValidSubset(numbers, targetSum);
    expect(result).toBe(true);
  });


  it("should exit the inner loop early if the current sum exceeds the target", () => {
    const numbers = [11, 12, 13];
    const targetSum = 8;

    const result = hasValidSubset(numbers, targetSum);
    expect(result).toBe(false);
  });

});
