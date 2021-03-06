/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (41.42%)
 * Likes:    1535
 * Dislikes: 0
 * Total Accepted:    259.8K
 * Total Submissions: 627.2K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (typeof s !== 'string') return false

  const mapping = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (!mapping[s[i]]) {
      stack.push(s[i])
    } else if (stack.pop() !== mapping[s[i]]) {
      return false
    }
  }

  return stack.length === 0
}
// @lc code=end
module.exports = isValid
