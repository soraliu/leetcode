/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (49.68%)
 * Likes:    158
 * Dislikes: 0
 * Total Accepted:    32.7K
 * Total Submissions: 65.5K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 注意：
 * 
 * 
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = []

  let longer = num1.length > num2.length ? num1 : num2
  let longerLength = longer.length
  let shorter = num1.length > num2.length ? num2 : num1
  let shorterLength = shorter.length

  let flag = 0
  for (let i = 0, len = longerLength; i < len; i++) {
    let sum = +(i < shorterLength ? shorter[shorterLength - 1 - i] : 0) + +longer[longerLength - 1 - i] + flag

    result[i] = sum % 10
    flag = Math.floor(sum / 10)
  }

  if (flag > 0) result.push(1)

  return result.reverse().join('')
};
// @lc code=end
