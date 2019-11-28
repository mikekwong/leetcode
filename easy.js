var removeVowels = function (S) {
  let vowels = 'aeiouAEIOU'
  let newStr = ''
  for (let i = 0; i < S.length; i++) {
    if ([...vowels].indexOf(S[i]) === -1) {
      newStr += S[i]
    }
  }
  return newStr
}
console.log(removeVowels('leetcodeisacommunityforcoders'))

var defangIPaddr = function (address) {
  let block = '[.]'
  address = address.split('.').join('[.]')
  return address
}

console.log(defangIPaddr('255.100.50.0'))

// Map indices where A indices are located in B
function anagramMappings (A, B) {
  let newArr = []
  for (let i = 0; i < A.length; i++) {
    newArr.push(B.indexOf(A[i]))
  }
  return newArr
}
console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]))

// find difference in randomized strings
function findTheDifference (s, t) {
  s = [...s].sort()
  t = [...t].sort()
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) return t[i]
  }
}
console.log(findTheDifference('adfghicbe', 'adfgeicbhz'))

// return the sum results of each digit until final total is 1 digit
function addDigits (num) {
  let total = 0
  num = num.toString().split('')
  if (num.toString().length === 1) {
    return num[0]
  } else {
    for (let i = 0; i < num.length; i++) {
      total += Number(num[i])
    }
    return addDigits(total)
  }
}
console.log(addDigits(38))

function isHappy (n) {
  var repeatArr = []
  while (n > 0) {
    n = n
      .toString()
      .split('')
      .map(Number)
    n = n.map(digit => digit ** 2).reduce((total, el) => (total += el))
    if (n === 1) {
      return true
    } else if (repeatArr.includes(n)) {
      return false
    } else {
      repeatArr.push(n)
    }
  }
}
console.log(isHappy(19))

// Get average scores of id #s top 5 scores
// function highFive (items) {
//   let freq = {}
//   let count = {}
//   let newArr = []
//   for (let i = 0; i < items.length; i++) {
//     let pairs = items[i]
//     if (freq[pairs[0]]) {
//       freq[pairs[0]] += pairs[1]
//     } else {
//       freq[pairs[0]] = pairs[1]
//     }
//     count[pairs[0]] ? count[pairs[0]]++ : (count[pairs[0]] = 1)
//   }
//   // console.log('count', count, 'freq', freq)
//   for (let key in count) {
//     newArr.push([
//       Number(key),
//       Math.floor(Number([freq[key]]) / Number(count[key]))
//     ])
//   }
//   return newArr
// }

// console.log(
//   highFive([
//     [1, 91],
//     [1, 92],
//     [2, 93],
//     [2, 97],
//     [1, 60],
//     [2, 77],
//     [1, 65],
//     [1, 87],
//     [1, 100],
//     [2, 100],
//     [2, 76]
//   ])
// )
