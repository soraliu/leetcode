/*
 * @lc app=leetcode.cn id=526 lang=javascript
 *
 * [526] 优美的排列
 *
 * https://leetcode-cn.com/problems/beautiful-arrangement/description/
 *
 * algorithms
 * Medium (61.59%)
 * Likes:    69
 * Dislikes: 0
 * Total Accepted:    5.1K
 * Total Submissions: 8.3K
 * Testcase Example:  '2'
 *
 * 假设有从 1 到 N 的N个整数，如果从这N个数字中成功构造出一个数组，使得数组的第 i位 (1 <= i <= N)
 * 满足如下两个条件中的一个，我们就称这个数组为一个优美的排列。条件：
 *
 *
 * 第i位的数字能被i整除
 * i 能被第 i 位上的数字整除
 *
 *
 * 现在给定一个整数 N，请问可以构造多少个优美的排列？
 *
 * 示例1:
 *
 *
 * 输入: 2
 * 输出: 2
 * 解释:
 *
 * 第 1 个优美的排列是 [1, 2]:
 * ⁠ 第 1 个位置（i=1）上的数字是1，1能被 i（i=1）整除
 * ⁠ 第 2 个位置（i=2）上的数字是2，2能被 i（i=2）整除
 *
 * 第 2 个优美的排列是 [2, 1]:
 * ⁠ 第 1 个位置（i=1）上的数字是2，2能被 i（i=1）整除
 * ⁠ 第 2 个位置（i=2）上的数字是1，i（i=2）能被 1 整除
 *
 *
 * 说明:
 *
 *
 * N 是一个正整数，并且不会超过15。
 *
 *
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
  let count = 0

  const backtracking = (rest, n) => {
    if (rest.length === 0) {
      count++
      return
    }

    const former = []
    for (let i = 0, len = rest.length; i < len; i++) {
      if (rest[i] % n === 0 || n % rest[i] === 0) {
        backtracking(former.concat(rest.slice(i + 1)), n + 1)
      }

      former.push(rest[i])
    }
  }

  backtracking(new Array(N).fill(0).map((_, index) => index + 1), 1)

  return count
}
// @lc code=end
module.exports = countArrangement
