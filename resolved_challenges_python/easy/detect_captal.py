"""
https://leetcode.com/problems/detect-capital/

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false

"""


def detect_capital_use(word):
    first_letter, last_letter = word[0], word[-1]
    is_last_lower = last_letter.islower()
    is_last_upper = last_letter.isupper()
    is_first_upper = first_letter.isupper()
    is_first_lower = first_letter.islower()
    condition = True
    if is_first_upper and is_last_lower:
        for w in word[1:]:
            if w.isupper():
                condition = False
    elif is_first_lower and is_last_lower:
        for w in word[1:]:
            if w.isupper():
                condition = False
    elif is_first_upper and is_last_upper:
        for w in word[1:]:
            if w.islower():
                condition = False
    elif len(word) - 1 == 0:
        condition = True
    else:
        condition = False
    return condition


if __name__ == '__main__':
    print(detect_capital_use('UUUUUf'))
