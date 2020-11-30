/*
 * @lc app=leetcode.cn id=246 lang=javascript
 *
 * [246] 中心对称数
 *
 * https://leetcode-cn.com/problems/strobogrammatic-number/description/
 *
 * algorithms
 * Easy (46.55%)
 * Likes:    22
 * Dislikes: 0
 * Total Accepted:    3.5K
 * Total Submissions: 7.6K
 * Testcase Example:  '"69"'
 *
 * 中心对称数是指一个数字在旋转了180 度之后看起来依旧相同的数字（或者上下颠倒地看）。
 *
 * 请写一个函数来判断该数字是否是中心对称数，其输入将会以一个字符串的形式来表达数字。
 *
 *
 *
 * 示例 1:
 *
 * 输入: num = "69"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: num = "88"
 * 输出: true
 *
 * 示例 3:
 *
 * 输入: num = "962"
 * 输出: false
 *
 * 示例 4：
 *
 * 输入：num = "1"
 * 输出：true
 *
 *
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  const mapping = {
    0: '0',
    1: '1',
    6: '9',
    8: '8',
    9: '6'
  }

  const nums = `${num}`
  const reversedNums = []

  for (let i = 0, len = nums.length; i < len; i++) {
    if (!mapping[nums[i]]) {
      return false
    }

    reversedNums.unshift(mapping[nums[i]])
  }

  return reversedNums.join('') === nums
}
// @lc code=end
module.exports = isStrobogrammatic
