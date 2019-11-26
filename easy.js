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

