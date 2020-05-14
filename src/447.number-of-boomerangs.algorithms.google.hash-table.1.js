/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 *
 * https://leetcode-cn.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Easy (57.46%)
 * Likes:    86
 * Dislikes: 0
 * Total Accepted:    11.6K
 * Total Submissions: 20.3K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * 给定平面上n 对不同的点，“回旋镖” 是由点表示的元组(i, j, k)，其中i和j之间的距离和i和k
 * 之间的距离相等（需要考虑元组的顺序）。
 *
 * 找到所有回旋镖的数量。你可以假设n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。
 *
 * 示例:
 *
 *
 * 输入:
 * [[0,0],[1,0],[2,0]]
 *
 * 输出:
 * 2
 *
 * 解释:
 * 两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  const getDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2))
  }

  const getCompose = n => {

  }

  const map = {}
  points.forEach(i => {
    points.forEach(j => {
      if (i === j) {
        return
      }

      const dist = `${i[0]}_${i[1]}_${getDistance(i, j)}`
      map[dist] = map[dist] ? map[dist] + 1 : 1
    })
  })

  return Object.values(map).reduce((sum, num) => {
    return sum + num * (num - 1)
  }, 0)
}

// @lc code=end
export default numberOfBoomerangs
