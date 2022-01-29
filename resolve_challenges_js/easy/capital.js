/***************************
 *https://leetcode.com/problems/detect-capital/
 *
 *We define the usage of capitals in a word to be right when one of the following cases holds:
 *
 *All letters in this word are capitals, like "USA".
 *All letters in this word are not capitals, like "leetcode".
 *Only the first letter in this word is capital, like "Google".
 *Given a string word, return true if the usage of capitals in it is right.
 *
 *Example 1:
 *
 *Input: word = "USA"
 *Output: true
 *Example 2:
 *
 *Input: word = "FlaG"
 *Output: false
 ***************************/
function detectCapitalUse(word) {
  let firstLetter = word[0];
  let lastLetter = word[word.length - 1];

  let condition = true;
  if (/[A-Z]/.test(firstLetter) && /[a-z]/.test(lastLetter)) {
    for (let i = 1; i < word.length - 1; i++) {
      if (/[A-Z]/.test(word[i])) {
        condition = false;
      }
    }
  } else if (/[a-z]/.test(firstLetter) && /['a-z']/.test(lastLetter)) {
    for (let i = 1; i < word.length - 1; i++) {
      if (/[A-Z]/.test(word[i])) {
        condition = false;
      }
    }
  } else if (/[A-Z]/.test(firstLetter) && /['A-Z']/.test(lastLetter)) {
    for (let i = 1; i < word.length - 1; i++) {
      if (/[a-z]/.test(word[i])) {
        condition = false;
      }
    }
  } else if (word.length == 0) {
    condition = true;
  } else {
    condition = false;
  }

  return condition;
}

console.log(detectCapitalUse("BsssB"));
