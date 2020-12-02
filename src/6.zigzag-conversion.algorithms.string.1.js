/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (49.10%)
 * Likes:    924
 * Dislikes: 0
 * Total Accepted:    193.7K
 * Total Submissions: 394.5K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行Z 字形排列。
 *
 * 比如输入字符串为 "LEETCODEISHIRING"行数为 3 时，排列如下：
 *
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 *
 *
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 *
 * 请你实现这个将字符串进行指定行数变换的函数：
 *
 * string convert(string s, int numRows);
 *
 * 示例1:
 *
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 *
 *
 * 示例2:
 *
 * 输入: s = "LEETCODEISHIRING", numRows =4
 * 输出:"LDREOEIIECIHNTSG"
 * 解释:
 *
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1) {
    return s
  }

  // calculate columns
  const lastNums = s.length % (numRows * 2 - 2)
  const lastColumns = lastNums > numRows ? (lastNums % numRows) + 1 : 1
  const numColumns = Math.ceil(s.length / (numRows * 2 - 2)) * (numRows - 1) + lastColumns

  // init zArr
  const zArr = new Array(numRows).fill(false).map(() => new Array(numColumns).fill(false))

  let isMovingDown = true
  let x = 0
  let y = 0
  for (let i = 0, len = s.length; i < len; i++) {
    zArr[y][x] = s[i]

    if (isMovingDown) {
      if (y < numRows - 1) {
        y++
      } else if (y === numRows - 1) {
        x++
        y--
        isMovingDown = false
      }
    } else {
      if (y > 0) {
        x++
        y--
      } else if (y === 0) {
        y++
        isMovingDown = true
      }
    }
  }

  return zArr.map(row => row.filter(item => item !== false).join('')).join('')
}
// @lc code=end
module.exports = convert
