function sumNumbersAndSquareResult(nums) {
  validateNumericArray(nums);

  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total * total;
}

function validateNumericArray(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Input must be an array.");
  }

  for (const element of nums) {
    if (typeof element !== "number" || isNaN(element)) {
      throw new TypeError("All elements in the array must be numbers.");
    }
  }
}

/*
function sumNumbersAndSquareResultOriginal(nums) {
  let total = 0;
  for (let i = 1; i < nums; i++) {
    total += nums[i];
  }
  return total ^ 2;
}
*/

module.exports = {
  sumNumbersAndSquareResult
};
