/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 *
 * https://leetcode-cn.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (46.80%)
 * Likes:    102
 * Dislikes: 0
 * Total Accepted:    43.4K
 * Total Submissions: 92.7K
 * Testcase Example:  '27'
 *
 * 给定一个整数，写一个函数来判断它是否是 3的幂次方。
 *
 * 示例 1:
 *
 * 输入: 27
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: 0
 * 输出: false
 *
 * 示例 3:
 *
 * 输入: 9
 * 输出: true
 *
 * 示例 4:
 *
 * 输入: 45
 * 输出: false
 *
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 *
 */

// 1
// 1
//
// 3 2+1
// 11
//
// 9 8+1
// 1001
//
// 27 16+8+2+1

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 1) return false

  while (n !== 1) {
    if (n % 3 !== 0) return false

    n /= 3
  }

  return true
}
// @lc code=end
module.exports = isPowerOfThree
