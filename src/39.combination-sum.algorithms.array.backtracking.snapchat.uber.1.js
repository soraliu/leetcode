/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (68.85%)
 * Likes:    653
 * Dislikes: 0
 * Total Accepted:    90.3K
 * Total Submissions: 131K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的数组candidates和一个目标数target，找出candidates中所有可以使数字和为target的组合。
 *
 * candidates中的数字可以无限制重复被选取。
 *
 * 说明：
 *
 *
 * 所有数字（包括target）都是正整数。
 * 解集不能包含重复的组合。
 *
 *
 * 示例1:
 *
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 *
 *
 * 示例2:
 *
 * 输入: candidates = [2,3,5], target = 8,
 * 所求解集为:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []

  const mapping = {}
  const isExist = (nums) => {
    const keys = nums.reduce((obj, next) => {
      if (obj[next] === undefined) {
        obj[next] = 1
      } else {
        obj[next] += 1
      }

      return obj
    }, {})

    const keyDividedByDash = Object.keys(keys).sort().reduce((key, num) => `${key}_${num}_${keys[num]}`, '')

    if (!mapping[keyDividedByDash]) {
      mapping[keyDividedByDash] = true
      return false
    }

    return true
  }

  const dfs = (sum, nums) => {
    candidates.forEach(candidate => {
      const s = sum + candidate
      const curr = [...nums, candidate]

      if (s === target && !isExist(curr)) result.push(curr)

      if (s < target) {
        dfs(s, curr)
      }
    })
  }

  dfs(0, [])

  return result
}
// @lc code=end
module.exports = combinationSum
