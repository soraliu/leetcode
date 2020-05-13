/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (39.03%)
 * Likes:    561
 * Dislikes: 0
 * Total Accepted:    78.4K
 * Total Submissions: 200.3K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回-1。
 *
 *
 *
 * 示例1:
 *
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3
 * 解释: 11 = 5 + 5 + 1
 *
 * 示例 2:
 *
 * 输入: coins = [2], amount = 3
 * 输出: -1
 *
 *
 *
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 *
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const cache = { 0: 0 }

  const dp = (coins, amount) => {
    if (cache[amount] !== undefined) return cache[amount]

    let min = Infinity
    coins.forEach(coin => {
      const curr = amount - coin

      if (curr >= 0) {
        const num = dp(coins, curr)

        if (num > -1) {
          min = Math.min(min, num)
        }
      }
    })

    const result = Number.isFinite(min) ? min + 1 : -1
    cache[amount] = result

    return result
  }

  return dp(coins, amount)
}
// @lc code=end
export default coinChange
