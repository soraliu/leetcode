/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 *
 * https://leetcode-cn.com/problems/non-decreasing-array/description/
 *
 * algorithms
 * Easy (22.16%)
 * Likes:    333
 * Dislikes: 0
 * Total Accepted:    25.2K
 * Total Submissions: 111.3K
 * Testcase Example:  '[4,2,3]'
 *
 * 给你一个长度为n的整数数组，请你判断在 最多 改变1 个元素的情况下，该数组能否变成一个非递减数列。
 *
 * 我们是这样定义一个非递减数列的：对于数组中所有的i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
 *
 *
 *
 * 示例 1:
 *
 * 输入: nums = [4,2,3]
 * 输出: true
 * 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
 *
 *
 * 示例 2:
 *
 * 输入: nums = [4,2,1]
 * 输出: false
 * 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
 *
 *
 *
 *
 * 说明：
 *
 *
 * 1 <= n <= 10 ^ 4
 * - 10 ^ 5<= nums[i] <= 10 ^ 5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  if (!nums) return false
  if (nums.length === 1) return true

  let met = false
  for (let i = 0, len = nums.length - 1; i < len; i++) {
    if (nums[i] > nums[i + 1]) {
      if (
        !met &&
        (
          (i === 0 || nums[i - 1] < nums[i + 1]) ||
          (i === len - 1 || nums[i] < nums[i + 2])
        )
      ) {
        i++
        met = true
      } else {
        return false
      }
    }
  }

  return true
}
// @lc code=end
module.exports = checkPossibility
