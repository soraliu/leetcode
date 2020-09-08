/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (58.11%)
 * Likes:    390
 * Dislikes: 0
 * Total Accepted:    86.9K
 * Total Submissions: 145.2K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 *
 * 示例:
 *
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = []

  const uniq = arr => Array.from(new Set(arr))

  const remove = (arr, item) => {
    let removed = false

    return arr.filter(i => {
      if (!removed && i === item) {
        removed = true
        return false
      }

      return true
    })
  }

  const bt = (per, rest) => {
    if (rest.length === 0) {
      ans.push(per)
      return
    }

    const uniqRest = uniq(rest)

    uniqRest.forEach(num => {
      bt(per.concat([num]), remove(rest, num))
    })
  }

  bt([], nums)

  return ans
}
// @lc code=end
console.log(permuteUnique([1, 1, 2]))
module.exports = permuteUnique
