/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 *
 * https://leetcode-cn.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (53.02%)
 * Likes:    86
 * Dislikes: 0
 * Total Accepted:    19K
 * Total Submissions: 34.9K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔2k 个字符的前 k 个字符进行反转。
 *
 *
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 *
 *
 *
 *
 * 示例:
 *
 * 输入: s = "abcdefg", k = 2
 * 输出: "bacdfeg"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 该字符串只包含小写英文字母。
 * 给定字符串的长度和 k 在 [1, 10000] 范围内。
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const strArr = s.split('')

  for (let i = 0, len = strArr.length; i < len; i += 2 * k) {
    let left = i
    let right = i + k - 1 < len ? i + k - 1 : len - 1

    while (left < right) {
      const tmp = strArr[left]
      strArr[left++] = strArr[right]
      strArr[right--] = tmp
    }
  }

  return strArr.join('')
}
// @lc code=end
module.exports = reverseStr
