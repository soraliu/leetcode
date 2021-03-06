/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (33.18%)
 * Likes:    677
 * Dislikes: 0
 * Total Accepted:    91.3K
 * Total Submissions: 264.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 *
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 *
 * 必须原地修改，只允许使用额外常数空间。
 *
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // from right to left
  // to get the first number which have smaller one
  const swap = (i, j) => {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }

  const swapAndGetStart = () => {
    for (let i = nums.length - 2; i >= 0; i--) {
      let min = Infinity
      let target = null
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] > nums[i] && nums[j] < min) {
          min = nums[j]
          target = j
        }
      }

      if (target !== null) {
        swap(i, target)
        return i + 1
      }
    }
    return 0
  }

  const sort = start => {
    for (let i = start, len = nums.length; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (nums[i] > nums[j]) {
          swap(i, j)
        }
      }
    }
  }

  sort(swapAndGetStart())
}
// @lc code=end
module.exports = nextPermutation
