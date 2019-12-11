// O(log n) time and O(n) space
// sort function causes O(log N)
function mergeRanges (meetings) {
  // Create a deep copy of the meetings array
  const meetingsCopy = JSON.parse(JSON.stringify(meetings))
  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime
  })
  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]]

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i]
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]
    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      )
    } else {
      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting)
    }
  }
  return mergedMeetings
}

console.log(
  mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }])
)
console.log(
  mergeRanges([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
  ])
)

// reverse array of characters in place by mutation (O(n) time O(1) space)
function reverse (arr) {
  // es6 utility function
  function swap (array, left, right) {
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
  }
  // Using pointers.
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    // // Or use es5
    // const temp = arrOfChars[left]
    // arrOfChars[left] = arrOfChars[right]
    // arrOFChars[right] = temp
    swap(arr, left, right)
    left++
    right--
  }
  return arr
}
console.log(reverse(['a', 'b', 'c', 'd']))

function reverseWords (message) {
  function swap (arr, left, right) {
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
  }
  message = message.join('').split(' ')
  let leftIdx = 0
  let rightIdx = message.length - 1
  while (leftIdx < rightIdx) {
    swap(message, leftIdx, rightIdx)
    leftIdx++
    rightIdx--
  }
  return message.join(' ')
}

const message = [
  'c',
  'a',
  'k',
  'e',
  ' ',
  'p',
  'o',
  'u',
  'n',
  'd',
  ' ',
  's',
  't',
  'e',
  'a',
  'l'
]

console.log(reverseWords(message))

// This solution is O(n log n) time
function mergeArrays (myArray, alicesArray) {
  return [...myArray, ...alicesArray].sort((a, b) => a - b)
}

// function mergeArrays2 (myArray, alicesArray) {
//   let combinedArr = []
//   let firstLeft = 0
//   let secondLeft = 0
//   while (firstLeft + secondLeft < myArray.length + alicesArray.length) {
//     if (myArray[firstLeft] < alicesArray[secondLeft]) {
//       combinedArr.push(myArray[firstLeft])
//       firstLeft++
//     } else {
//       combinedArr.push(alicesArray[secondLeft])
//       secondLeft++
//     }
//   }
//   return combinedArr
// }
//
// This solution is O(n) time using pointers (only works if each array is sorted)
// Here are some edge cases:
// One or both of our input arrays is 0 elements or 1 element
// One of our input arrays is longer than the other.
// One of our arrays runs out of elements before we're done merging.
//
// Complexity = O(n) time and O(n) space
function mergeArrays2 (myArray, alicesArray) {
  const mergedArray = []

  let currentIndexAlices = 0
  let currentIndexMine = 0
  let currentIndexMerged = 0

  while (currentIndexMerged < myArray.length + alicesArray.length) {
    const isMyArrayExhausted = currentIndexMine >= myArray.length
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array
    if (
      !isMyArrayExhausted &&
      (isAlicesArrayExhausted ||
        myArray[currentIndexMine] < alicesArray[currentIndexAlices])
    ) {
      mergedArray[currentIndexMerged] = myArray[currentIndexMine]
      currentIndexMine++

      // Case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices]
      currentIndexAlices++
    }

    currentIndexMerged++
  }
  return mergedArray
}

const myArray = [3, 4, 6, 10, 11, 15]
const alicesArray = [1, 5, 8, 12, 14, 19]

console.log(mergeArrays(myArray, alicesArray))
console.log(mergeArrays2(myArray, alicesArray))

// O(n) time and O(1) space
function isFirstComeFirstServed (takeOutOrders, dineInOrders, servedOrders) {
  let takeOutPointer = 0
  let dineInPointer = 0
  for (let i = 0; i < servedOrders.length; i++) {
    if (servedOrders[i] === takeOutOrders[takeOutPointer]) {
      takeOutPointer++
    } else if (servedOrders[i] === dineInOrders[dineInPointer]) {
      dineInPointer++
    } else {
      return false
    }
  }
  // Edge case: check for any extra orders at the end of takeOutOrders or dineInOrders that aren't served
  if (
    takeOutOrders.length !== takeOutPointer ||
    dineInOrders.length !== dineInPointer
  ) {
    return false
  }
  return true
}

console.log(
  isFirstComeFirstServed([1, 3, 5, 7], [2, 4, 6], [1, 2, 3, 5, 4, 6, 7])
)
