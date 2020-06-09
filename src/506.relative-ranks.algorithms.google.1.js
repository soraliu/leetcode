/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 *
 * https://leetcode-cn.com/problems/relative-ranks/description/
 *
 * algorithms
 * Easy (53.80%)
 * Likes:    46
 * Dislikes: 0
 * Total Accepted:    9.2K
 * Total Submissions: 17.1K
 * Testcase Example:  '[5,4,3,2,1]'
 *
 * 给出N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold
 * Medal", "Silver Medal", "Bronze Medal"）。
 *
 * (注：分数越高的选手，排名越靠前。)
 *
 * 示例 1:
 *
 *
 * 输入: [5, 4, 3, 2, 1]
 * 输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 * 解释: 前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” ("Gold Medal", "Silver Medal"
 * and "Bronze Medal").
 * 余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。
 *
 * 提示:
 *
 *
 * N 是一个正整数并且不会超过10000。
 * 所有运动员的成绩都不相同。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  const mapping = [...nums].sort((a, b) => b - a).reduce((map, num, rank) => {
    switch (rank) {
      case 0:
        map[num] = 'Gold Medal'
        break
      case 1:
        map[num] = 'Silver Medal'
        break
      case 2:
        map[num] = 'Bronze Medal'
        break
      default:
        map[num] = `${rank + 1}`
    }

    return map
  }, {})

  return nums.map(num => mapping[num])
}
// @lc code=end
module.exports = findRelativeRanks
