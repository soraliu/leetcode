/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (53.30%)
 * Likes:    1843
 * Dislikes: 0
 * Total Accepted:    170.6K
 * Total Submissions: 319.7K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 0
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ret = 0

  const maxHeightOfLeft = []
  const maxHeightOfRight = []

  maxHeightOfLeft[0] = height[0]
  maxHeightOfRight[height.length - 1] = height[height.length - 1]

  for (let i = 1, len = height.length; i < len; i++) {
    maxHeightOfLeft[i] = height[i] >= maxHeightOfLeft[i - 1] ? height[i] : maxHeightOfLeft[i - 1]
    maxHeightOfRight[len - 1 - i] = height[len - 1 - i] >= maxHeightOfRight[len - i] ? height[len - 1 - i] : maxHeightOfRight[len - i]
  }

  for (let i = 1, len = height.length; i < len - 1; i++) {
    if (maxHeightOfLeft[i - 1] > height[i] && height[i] < maxHeightOfRight[i + 1]) {
      // console.log(maxHeightOfLeft[i - 1], height[i], maxHeightOfRight[i + 1])
      ret += Math.min(maxHeightOfLeft[i - 1], maxHeightOfRight[i + 1]) - height[i]
    }
  }

  return ret
}
// @lc code=end
console.log(trap([4, 2, 0, 3, 2, 5]))
module.exports = trap

//      1
// 1    1
// 1  1 1
// 11 111
// 11 111
