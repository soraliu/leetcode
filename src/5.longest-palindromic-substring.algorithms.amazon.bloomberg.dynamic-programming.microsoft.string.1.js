/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (32.43%)
 * Likes:    2955
 * Dislikes: 0
 * Total Accepted:    428.2K
 * Total Submissions: 1.3M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // f(n) = Len(f(n-1)) > Len(I(n)) ? f(n-1) : I(n)
  if (!s) {
    return ''
  }

  const dp = [s[0]]

  const getMaxPalindrome = (str, end) => {
    for (let i = 0, len = end; i <= len; i++) {
      if (str[i] !== str[end]) {
        continue
      } else {
        let l = i
        let r = end
        let isPalindrome = true
        while (l <= r) {
          if (str[l++] === str[r--]) {
            continue
          } else {
            isPalindrome = false
            break
          }
        }

        if (isPalindrome) {
          return str.slice(i, end + 1)
        }
      }
    }
  }

  for (let i = 1, len = s.length; i < len; i++) {
    const curr = getMaxPalindrome(s, i)
    dp[i] = dp[i - 1].length > curr.length ? dp[i - 1] : curr
  }

  return dp[s.length - 1]
}
// @lc code=end
module.exports = longestPalindrome
