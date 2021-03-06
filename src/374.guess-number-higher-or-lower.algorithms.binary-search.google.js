/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 *
 * https://leetcode-cn.com/problems/guess-number-higher-or-lower/description/
 *
 * algorithms
 * Easy (43.79%)
 * Likes:    58
 * Dislikes: 0
 * Total Accepted:    21.1K
 * Total Submissions: 48.1K
 * Testcase Example:  '10\n6'
 *
 * 我们正在玩一个猜数字游戏。 游戏规则如下：
 * 我从1到n选择一个数字。 你需要猜我选择了哪个数字。
 * 每次你猜错了，我会告诉你这个数字是大了还是小了。
 * 你调用一个预先定义好的接口guess(int num)，它会返回 3 个可能的结果（-1，1或 0）：
 *
 * -1 : 我的数字比较小
 * ⁠1 : 我的数字比较大
 * ⁠0 : 恭喜！你猜对了！
 *
 *
 * 示例 :
 *
 * 输入: n = 10, pick = 6
 * 输出: 6
 *
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return             -1 if num is lower than the guess number
 *                     1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1
  let right = n

  while (left <= right) {
    const pick = Math.floor((left + right) / 2)
    /* eslint-disable no-undef */
    const judge = guess(pick)

    if (judge < 0) {
      right = pick - 1
    } else if (judge > 0) {
      left = pick + 1
    } else {
      return pick
    }
  }
}
// @lc code=end
module.exports = guessNumber
