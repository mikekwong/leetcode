// Find average of all contiguous subarrays of size 5:
// Brute force
function findAverageOfSubarray (size, arr) {
  const result = []
  for (let i = 0; i < arr.length - size + 1; i++) {
    // Find sum of next 'size' elements
    let sum = 0
    for (j = i; j < i + size; j++) {
      sum += arr[j]
    }
    result.push(sum / size)
  }
  return result
}

console.log(findAverageOfSubarray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]))

// Sliding window (O(n)) time
function findAverageOfSubarray2 (size, arr) {
  const result = []
  let sum = 0
  let start = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] // add the next element
    console.log(sum)
    // slide the window, we don't need to slide if we've not hit the required window size
    if (i >= size - 1) {
      result.push(sum / size) // calc average
      sum -= arr[start] // subtract element going out
      start += 1 // slide window ahead
    }
  }
  return result
}

const result = findAverageOfSubarray2(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
console.log(result)

// Brute force
// Maximum Sum Subarray of Size K
const maxSubArrayOfSizeK = function (k, arr) {
  let total = 0
  let maxSum = 0

  for (let i = 0; i < arr.length - k + 1; i++) {
    total = 0
    for (let j = i; j < i + k; j++) {
      total += arr[j]
    }
    maxSum = Math.max(maxSum, total)
  }
  return maxSum
}

console.log(maxSubArrayOfSizeK(3, [2, 1, 5, 1, 3, 2]))
console.log(maxSubArrayOfSizeK(2, [2, 3, 4, 1, 5]))

// Time (O(n))
// Space (O(1))
const maxSubArrayOfSizeK2 = (k, arr) => {
  let start = 0
  let sum = 0
  let maxSum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, sum)
      sum -= arr[start]
      start++
    }
  }
  return maxSum
}

console.log(maxSubArrayOfSizeK2(3, [2, 1, 5, 1, 3, 2]))
console.log(maxSubArrayOfSizeK2(2, [2, 3, 4, 1, 5]))

// Smallest subArray with a given sum
function smallestSubArrayWithGivenSum (s, arr) {
  let start = 0
  let end = 0
  let sum = 0
  let minLength = Infinity

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] // add the next element
    // shrink the window as small as possible until the 'sum' is smaller than 's'
    while (sum >= s) {
      minLength = Math.min(minLength, i - start + 1)
      sum -= arr[start]
      start++
    }
  }
  return minLength === Infinity ? 0 : minLength
}

console.log(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 3, 2]))
// console.log(smallestSubArrayWithGivenSum(8, [3, 4, 1, 1, 6]))
