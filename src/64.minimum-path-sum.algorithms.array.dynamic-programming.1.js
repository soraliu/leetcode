/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (65.37%)
 * Likes:    461
 * Dislikes: 0
 * Total Accepted:    83.4K
 * Total Submissions: 127.4K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 mxn网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 *
 * 说明：每次只能向下或者向右移动一步。
 *
 * 示例:
 *
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const dp = []

  for (var i = 0, n = grid.length; i < n; i++) {
    dp[i] = []
    for (var j = 0, m = grid[i].length; j < m; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j]
        continue
      }

      if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j]
        continue
      }

      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j]
        continue
      }

      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
    }
  }

  return dp[n - 1][m - 1] || 0
}
// @lc code=end
export default minPathSum
