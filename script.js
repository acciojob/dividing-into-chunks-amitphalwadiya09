const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Initialize the result array to store subarrays
  const result = [];
  
  // Initialize variables to track the current subarray and its sum
  let currentSubarray = [];
  let currentSum = 0;

  // Iterate through the input array
  for (const num of arr) {
    // Check if adding the current number exceeds the maximum sum
    if (currentSum + num > n) {
      // If yes, push the current subarray to the result array
      result.push(currentSubarray);

      // Reset the current subarray and sum
      currentSubarray = [num];
      currentSum = num;
    } else {
      // If not, add the current number to the current subarray and update the sum
      currentSubarray.push(num);
      currentSum += num;
    }
  }

  // Push the last subarray to the result array
  result.push(currentSubarray);

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
