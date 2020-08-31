/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 *
 * https://leetcode-cn.com/problems/maximum-average-subarray-i/description/
 *
 * algorithms
 * Easy (38.28%)
 * Likes:    108
 * Dislikes: 0
 * Total Accepted:    18.8K
 * Total Submissions: 48K
 * Testcase Example:  '[1,12,-5,-6,50,3]\n4'
 *
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 *
 * 示例 1:
 *
 * 输入: [1,12,-5,-6,50,3], k = 4
 * 输出: 12.75
 * 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 *
 *
 *
 *
 * 注意:
 *
 *
 * 1 <= k <= n <= 30,000。
 * 所给数据范围 [-10,000，10,000]。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0
  for (let i = 0, len = k; i < len; i++) {
    sum += nums[i]
  }

  let max = sum
  for (let i = k, len = nums.length; i < len; i++) {
    sum -= nums[i - k]
    sum += nums[i]

    max = Math.max(max, sum)
  }

  return max / k
}
// @lc code=end
module.exports = findMaxAverage
