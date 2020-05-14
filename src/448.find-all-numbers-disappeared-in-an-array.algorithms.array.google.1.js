/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 *
 * https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (57.72%)
 * Likes:    342
 * Dislikes: 0
 * Total Accepted:    36.8K
 * Total Submissions: 63.4K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给定一个范围在 1 ≤ a[i] ≤ n (n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 *
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 *
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 *
 * 示例:
 *
 *
 * 输入:
 * [4,3,2,7,8,2,3,1]
 *
 * 输出:
 * [5,6]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const result = []

  for (let i = 0, len = nums.length; i < len;) {
    if (nums[i] !== (i + 1)) {
      if (nums[i] === nums[nums[i] - 1]) {
        i++
        continue
      }

      const tmp = nums[i]
      nums[i] = nums[tmp - 1]
      nums[tmp - 1] = tmp
    } else {
      i++
    }
  }

  nums.forEach((num, index) => {
    if ((index + 1) !== num) result.push(index + 1)
  })

  return result
}
// @lc code=end
module.exports = findDisappearedNumbers
