/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (31.75%)
 * Likes:    18187
 * Dislikes: 1077
 * Total Accepted:    1.9M
 * Total Submissions: 5.9M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var getLongestRightPalindrome = function (s) {
  for (let i = 0, len = s.length; i < len; i++) {
    let left = i
    let right = len - 1

    while (left < right) {
      if (s[left] === s[right]) {
        left++
        right--
        continue
      }

      break
    }

    if (left >= right) {
      return s.substring(i, len)
    }
  }
}

var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s
  }

  const longestRightPalindrome = getLongestRightPalindrome(s)
  const longestPrevPalindrome = longestPalindrome(s.substr(0, s.length - 1))

  return longestRightPalindrome.length >= longestPrevPalindrome.length ? longestRightPalindrome : longestPrevPalindrome
}

// @lc code=end
module.exports = longestPalindrome
