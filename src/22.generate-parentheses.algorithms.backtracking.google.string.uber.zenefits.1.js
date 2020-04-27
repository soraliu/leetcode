/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (75.26%)
 * Likes:    981
 * Dislikes: 0
 * Total Accepted:    119.7K
 * Total Submissions: 159K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = []

  const backtrack = ({left, right, str}) => {
    if (left > right) return

    if (left === 0 && right === 0) {
      result.push(str)
    }

    if (left > 0) backtrack({left: left - 1, right, str: `${str}(`})
    if (right > 0) backtrack({left, right: right - 1, str: `${str})`})
  }

  backtrack({left: n, right: n, str: ''})

  return result
};
// @lc code=end
