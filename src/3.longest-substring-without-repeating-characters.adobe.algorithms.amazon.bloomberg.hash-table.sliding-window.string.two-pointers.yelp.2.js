/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (32.99%)
 * Likes:    28247
 * Dislikes: 1212
 * Total Accepted:    3.8M
 * Total Submissions: 11.2M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not
 * a substring.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0
  let j = 0
  let longestLength = 0
  const letterMap = new Map()

  while (j <= s.length - 1) {
    if (!letterMap.has(s[j])) {
      longestLength = Math.max(longestLength, j - i + 1)

      letterMap.set(s[j], j++)
      continue
    }

    letterMap.delete(s[i++])
  }
  return longestLength
}

// @lc code=end
module.exports = lengthOfLongestSubstring
