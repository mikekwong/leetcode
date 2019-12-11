// Find 2 unique movie lenghts that equal flight length
// time = O(1)
// Using sets
function canTwoMoviesFillFlight (flightLength, movieLengths) {
  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set()

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i]

    const matchingSecondMovieLength = flightLength - firstMovieLength
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true
    }
    movieLengthsSeen.add(firstMovieLength)
  }
  return false
}

console.log(canTwoMoviesFillFlight(320, [120, 160, 116, 90, 160]))

// Time - O(n) space O(n) / O(1)
function hasPalindromePermutation (str) {
  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set()

  for (let char of str) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char)
    } else {
      unpairedCharacters.add(char)
    }
  }
  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1
}

console.log(hasPalindromePermutation('civic'))
console.log(hasPalindromePermutation('ivicc'))
console.log(hasPalindromePermutation('civil'))

class WordCloudData {
  constructor (inputString) {
    this.wordsToCounts = new Map()
    this.populateWordsToCounts(inputString)
  }

  populateWordsToCounts (inputString) {
    // Iterates over each character in the input string, splitting
    // words and passing them to this.addWordToMap()

    let currentWordStartIndex = 0
    let currentWordLength = 0

    for (let i = 0; i < inputString.length; i++) {
      const character = inputString.charAt(i)

      // If we reached the end of the string we check if the last
      // character is a letter and add the last word to our map
      if (i === inputString.length - 1) {
        if (this.isLetter(character)) {
          currentWordLength += 1
        }
        if (currentWordLength > 0) {
          const word = inputString.slice(
            currentWordStartIndex,
            currentWordStartIndex + currentWordLength
          )
          this.addWordToMap(word)
        }

        // If we reach a space or emdash we know we're at the end of a word
        // so we add it to our map and reset our current word
      } else if (character === ' ' || character === '\u2014') {
        if (currentWordLength > 0) {
          const word = inputString.slice(
            currentWordStartIndex,
            currentWordStartIndex + currentWordLength
          )
          this.addWordToMap(word)
          currentWordLength = 0
        }

        // We want to make sure we split on ellipses so if we get two periods in
        // a row we add the current word to our map and reset our current word
      } else if (character === '.') {
        if (i < inputString.length - 1 && inputString.charAt(i + 1) === '.') {
          if (currentWordLength > 0) {
            const word = inputString.slice(
              currentWordStartIndex,
              currentWordStartIndex + currentWordLength
            )
            this.addWordToMap(word)
            currentWordLength = 0
          }
        }

        // If the character is a letter or an apostrophe, we add it to our current word
      } else if (this.isLetter(character) || character === "'") {
        if (currentWordLength === 0) {
          currentWordStartIndex = i
        }
        currentWordLength += 1

        // If the character is a hyphen, we want to check if it's surrounded by letters
        // if it is, we add it to our current word
      } else if (character === '-') {
        if (
          i > 0 &&
          this.isLetter(inputString.charAt(i - 1)) &&
          this.isLetter(inputString.charAt(i + 1))
        ) {
          if (currentWordLength === 0) {
            currentWordStartIndex = i
          }
          currentWordLength += 1
        } else {
          if (currentWordLength > 0) {
            const word = inputString.slice(
              currentWordStartIndex,
              currentWordStartIndex + currentWordLength
            )
            this.addWordToMap(word)
            currentWordLength = 0
          }
        }
      }
    }
  }

  addWordToMap (word) {
    let newCount

    // If the word is already in the map we increment its count
    if (this.wordsToCounts.has(word)) {
      newCount = this.wordsToCounts.get(word) + 1
      this.wordsToCounts.set(word, newCount)

      // If a lowercase version is in the map, we know our input word must be uppercase
      // but we only include uppercase words if they're always uppercase
      // so we just increment the lowercase version's count
    } else if (this.wordsToCounts.has(word.toLowerCase())) {
      newCount = this.wordsToCounts.get(word.toLowerCase()) + 1
      this.wordsToCounts.set(word.toLowerCase(), newCount)

      // If an uppercase version is in the map, we know our input word must be lowercase.
      // since we only include uppercase words if they're always uppercase, we add the
      // lowercase version and give it the uppercase version's count
    } else if (this.wordsToCounts.has(this.capitalize(word))) {
      newCount = this.wordsToCounts.get(this.capitalize(word)) + 1
      this.wordsToCounts.set(word, newCount)
      this.wordsToCounts.delete(this.capitalize(word))

      // Otherwise, the word is not in the map at all, lowercase or uppercase
      // so we add it to the map
    } else {
      this.wordsToCounts.set(word, 1)
    }
  }

  capitalize (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  isLetter (character) {
    return (
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(
        character
      ) >= 0
    )
  }
}

let myData = new WordCloudData(
  'After beating the eggs, Dana read the next step:'
)

console.log(myData)

// Time = O(n), space = O(n)
function sortScores (unorderedScores, highestPossibleScore) {
  // Array of 0s at indices 0..highestPossibleScore
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0)

  // Populate scoreCounts
  unorderedScores.forEach(score => {
    scoreCounts[score]++
  })

  // Populate the final sorted array
  const sortedScores = []

  // For each item in scoreCounts
  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score]

    // For the number of times the item occurs
    for (let time = 0; time < count; time++) {
      sortedScores.push(score)
    }
  }

  return sortedScores
}

console.log(sortScores([37, 89, 41, 65, 91, 53], 100))
