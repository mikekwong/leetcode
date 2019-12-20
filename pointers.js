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
