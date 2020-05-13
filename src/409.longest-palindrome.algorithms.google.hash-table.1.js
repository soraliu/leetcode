/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 *
 * https://leetcode-cn.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (54.93%)
 * Likes:    179
 * Dislikes: 0
 * Total Accepted:    47.9K
 * Total Submissions: 87.1K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 *
 * 在构造过程中，请注意区分大小写。比如"Aa"不能当做一个回文字符串。
 *
 * 注意:
 * 假设字符串的长度不会超过 1010。
 *
 * 示例 1:
 *
 *
 * 输入:
 * "abccccdd"
 *
 * 输出:
 * 7
 *
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const alphabetsHash = {}

  for (let i = 0, len = s.length; i < len; i++) {
    alphabetsHash[s[i]] = alphabetsHash[s[i]] === undefined ? 1 : alphabetsHash[s[i]] + 1
  }

  const pairs = Object.values(alphabetsHash).reduce((sum, num) => sum + Math.floor(num / 2) * 2, 0)

  return pairs === s.length ? pairs : pairs + 1
}
// @lc code=end
export default longestPalindrome
