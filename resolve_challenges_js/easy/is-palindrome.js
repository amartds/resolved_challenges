/***
 * Verify simple palindrome
 */
const isPalindrome = word => {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord === word;
};

console.log(isPalindrome('amor a roma'));
