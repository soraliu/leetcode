/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 *
 * https://leetcode-cn.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (23.43%)
 * Likes:    367
 * Dislikes: 0
 * Total Accepted:    46.4K
 * Total Submissions: 197.4K
 * Testcase Example:  '"12"'
 *
 * 一条包含字母A-Z 的消息通过以下方式进行了编码：
 *
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 *
 *
 * 给定一个只包含数字的非空字符串，请计算解码方法的总数。
 *
 * 示例 1:
 *
 * 输入: "12"
 * 输出: 2
 * 解释:它可以解码为 "AB"（1 2）或者 "L"（12）。
 *
 *
 * 示例2:
 *
 * 输入: "226"
 * 输出: 3
 * 解释:它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0

  const dp = [1]

  for (let i = 1, len = s.length; i < len; i++) {
    if (s[i] !== '0') {
      const num = +(s[i - 1] + s[i])
      if (num > 9 && num <= 26) {
        if (i > 1) {
          dp[i] = dp[i - 1] + dp[i - 2]
        } else {
          dp[i] = 2
        }
      } else {
        dp[i] = dp[i - 1]
      }
    } else {
      if (s[i - 1] !== '1' && s[i - 1] !== '2') return 0

      if (i >= 2) {
        dp[i] = dp[i - 2]
      } else {
        dp[i] = 1
      }
    }
  }

  return dp[s.length - 1]
}
// @lc code=end
module.exports = numDecodings
