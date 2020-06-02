/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 *
 * https://leetcode-cn.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (56.29%)
 * Likes:    96
 * Dislikes: 0
 * Total Accepted:    39.2K
 * Total Submissions: 69.3K
 * Testcase Example:  '[1,0,1,1,0,1]'
 *
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 *
 * 示例 1:
 *
 *
 * 输入: [1,1,0,1,1,1]
 * 输出: 3
 * 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
 *
 *
 * 注意：
 *
 *
 * 输入的数组只包含0 和1。
 * 输入数组的长度是正整数，且不超过 10,000。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = 0
  let tmp = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) {
      result = Math.max(result, tmp)
      tmp = 0
    } else {
      tmp += 1
    }
  }

  return Math.max(result, tmp)
}
// @lc code=end
module.exports = findMaxConsecutiveOnes
