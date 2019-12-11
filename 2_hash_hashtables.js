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
