/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (53.24%)
 * Likes:    683
 * Dislikes: 0
 * Total Accepted:    105.2K
 * Total Submissions: 197.7K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []

  const result = []

  const mapping = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const backtrack = (nums, str) => {
    if (!nums) {
      result.push(str)
      return
    }

    const alphabets = mapping[nums[0]]
    for (let i = 0, len = alphabets.length; i < len; i++) {
      backtrack(nums.slice(1), `${str}${alphabets[i]}`)
    }
  }

  backtrack(digits, '')

  return result
}
// @lc code=end
module.exports = letterCombinations
