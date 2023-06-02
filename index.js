// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];
function result(input) {
  // Your Code Here

  // Find middle index of the array;
  const middleIndex = Math.floor(input.length / 2);

  // Sort array from lowest to highest
  const sortedInput = input.sort((a, b) => a - b);

  // If array length is even
  if (sortedInput.length % 2 === 0) {
    return (sortedInput[middleIndex - 1] + sortedInput[middleIndex]) / 2;
  }

  return sortedInput[middleIndex];
}
console.log(result(input));
