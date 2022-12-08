function isPalindrome(word) {
  // Write your algorithm here

  // converting received word argument to its reversed version
  const reversedWord = word.split("").reverse().join("").toLowerCase()

  // comparing if received word and its reversed vesion are alike, then returning "true" or "false" accordingly
  return word.toLowerCase() === reversedWord

}

/* 
  Add your pseudocode here
 check if word is equal to its reversed version
    if word is the same as its reversed version:
        return true
    if word is not the same as its reversed version
        return false
*/

/*
  Add written explanation of your solution here

  first: convert the received word into its reversed version
  second: make sure they are both of the same case
  third: check if the received word and the reversed version are the same
  lastly: return true or false accordingly

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  isPalindrome("racecar") === true;

  isPalindrome("robot") === false;

}

module.exports = isPalindrome;
