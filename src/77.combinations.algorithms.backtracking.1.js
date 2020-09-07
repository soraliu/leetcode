/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (73.52%)
 * Likes:    338
 * Dislikes: 0
 * Total Accepted:    73.7K
 * Total Submissions: 98.8K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 *
 * 示例:
 *
 * 输入:n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = []

  const bt = (ret, nums, level) => {
    if (level === 0) {
      ans.push(ret)
      return
    }

    if (nums.length === 0) return

    nums.forEach(num => {
      bt(ret.concat([num]), new Array(n - num).fill(null).map((v, i) => num + i + 1), level - 1)
    })
  }

  bt([], new Array(n).fill(null).map((v, i) => i + 1), k)

  return ans
}
// @lc code=end
module.exports = combine
