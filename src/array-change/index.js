import ArrayChange from "./array-change.js";

export function ArrayChange() {
  const originalArray = [2, 4, 6, 8, 10];
  const updatedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = ArrayChange(originalArray, updatedArray);
  console.log("Original Array: ", originalArray);
  console.log("Change Array: ", updatedArray);
  console.log("\n Result: ", result);
}
