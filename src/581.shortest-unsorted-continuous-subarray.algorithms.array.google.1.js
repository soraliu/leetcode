/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 *
 * https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Easy (34.56%)
 * Likes:    378
 * Dislikes: 0
 * Total Accepted:    36K
 * Total Submissions: 103K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 *
 * 你找到的子数组应是最短的，请输出它的长度。
 *
 * 示例 1:
 *
 *
 * 输入: [2, 6, 4, 8, 10, 9, 15]
 * 输出: 5
 * 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 *
 *
 * 说明 :
 *
 *
 * 输入的数组长度范围在[1, 10,000]。
 * 输入的数组可能包含重复元素，所以升序的意思是<=。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  /**
   * 1. traverse from small to big
   * 2. if not, find the lowest one, and compare to nums[i]
   * 3. repeat 2
   */
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    if (nums[i] <= nums[i + 1]) {
      i++
      continue
    }
    if (nums[j] >= nums[j - 1]) {
      j--
      continue
    }
    break
  }

  if (j <= i) return 0

  let minInRest = Infinity
  let maxInRest = -Infinity

  for (let m = i + 1; m < nums.length; m++) {
    minInRest = Math.min(minInRest, nums[m])
  }
  for (let n = j - 1; n >= 0; n--) {
    maxInRest = Math.max(maxInRest, nums[n])
  }

  while (i >= 0) {
    if (nums[i] <= minInRest) break

    i--
  }
  while (j < nums.length) {
    if (nums[j] >= maxInRest) break

    j++
  }

  return j - i - 1
}
// @lc code=end
module.exports = findUnsortedSubarray
