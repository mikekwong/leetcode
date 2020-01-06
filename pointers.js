// time - O(n + m)
function mergeArrays (arr1, arr2) {
  let merged = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i])
      i++
    } else {
      merged.push(arr2[j])
      j++
    }
  }
  // If an array is completely traversed, while other one is left then just copy all the remaining elements into result array
  if (i <= arr1.length - 1) {
    arr1.splice(0, i)
    merged = merged.concat(arr1)
  } else if (j <= arr2.length - 1) {
    arr2.splice(0, j)
    merged = merged.concat(arr2)
  }

  return merged
}

function removeDuplicates (arr) {
  // index of next non-duplicate item
  let left = 1

  let right = 1

  while (right < arr.length) {
    if (arr[left - 1] !== arr[right]) {
      arr[left] = arr[right]
      left++
    }
    right++
  }
  return left
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]))
