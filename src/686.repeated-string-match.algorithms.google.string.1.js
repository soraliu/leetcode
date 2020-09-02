/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 *
 * https://leetcode-cn.com/problems/repeated-string-match/description/
 *
 * algorithms
 * Easy (33.87%)
 * Likes:    104
 * Dislikes: 0
 * Total Accepted:    12.4K
 * Total Submissions: 36.5K
 * Testcase Example:  '"abcd"\n"cdabcdab"'
 *
 * 给定两个字符串 A 和 B, 寻找重复叠加字符串A的最小次数，使得字符串B成为叠加后的字符串A的子串，如果不存在则返回 -1。
 *
 * 举个例子，A = "abcd"，B = "cdabcdab"。
 *
 * 答案为 3，因为 A 重复叠加三遍后为“abcdabcdabcd”，此时 B 是其子串；A 重复叠加两遍后为"abcdabcd"，B
 * 并不是其子串。
 *
 * 注意:
 *
 * A与B字符串的长度在1和10000区间范围内。
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  let count = 1
  let sum = a

  while (true) {
    if (sum.indexOf(b) < 0) {
      if (b.length + a.length < sum.length) {
        return -1
      }

      sum += a
      count++
    } else {
      return count
    }
  }
}
// @lc code=end
module.exports = repeatedStringMatch
