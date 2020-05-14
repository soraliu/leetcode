/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 计算各个位数不同的数字个数
 *
 * https://leetcode-cn.com/problems/count-numbers-with-unique-digits/description/
 *
 * algorithms
 * Medium (50.68%)
 * Likes:    60
 * Dislikes: 0
 * Total Accepted:    9.1K
 * Total Submissions: 18K
 * Testcase Example:  '2'
 *
 * 给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10^n。
 *
 * 示例:
 *
 * 输入: 2
 * 输出: 91
 * 解释: 答案应为除去 11,22,33,44,55,66,77,88,99 外，在 [0,100) 区间内的所有数字。
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  let count = 0
  const backtrack = (str, mapping) => {
    if (str.length === n) count++

    if (str.length < n) {
      if (`${+str}`.indexOf('0') === -1 || +str === 0) {
        backtrack(`${str}0`, { ...mapping, 0: true })
      }

      for (let i = 1, len = 10; i < len; i++) {
        if (!mapping[i]) {
          backtrack(`${str}${i}`, { ...mapping, [i]: true })
        }
      }
    }
  }

  backtrack('', {})

  return count
}
// @lc code=end
module.exports = countNumbersWithUniqueDigits
