/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (32.84%)
 * Likes:    270
 * Dislikes: 0
 * Total Accepted:    55.4K
 * Total Submissions: 168.7K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 
 * 
 * 
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 
 * 说明：m 和 n 的值均不超过 100。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * 输出: 2
 * 解释:
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length

  if (obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1]) return 0

  let dp = new Array()
  for (let i = 0, len = n; i < len; i++) {
    if (!dp[i]) dp[i] = new Array(m).fill(0)
    for (let j = 0, len = m; j < len; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1
        continue
      }

      if (i - 1 >= 0 && obstacleGrid[i - 1][j] !== 1) dp[i][j] += dp[i - 1][j]
      if (j - 1 >= 0 && obstacleGrid[i][j - 1] !== 1) dp[i][j] += dp[i][j - 1]
    }
  }
  return dp[n - 1][m - 1]
};
// @lc code=end
