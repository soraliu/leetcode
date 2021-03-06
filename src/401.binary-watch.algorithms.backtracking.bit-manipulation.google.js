/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 *
 * https://leetcode-cn.com/problems/binary-watch/description/
 *
 * algorithms
 * Easy (51.89%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    13.3K
 * Total Submissions: 25.6K
 * Testcase Example:  '0'
 *
 * 二进制手表顶部有 4 个 LED 代表小时（0-11），底部的 6 个 LED 代表分钟（0-59）。
 *
 * 每个 LED 代表一个 0 或 1，最低位在右侧。
 *
 *
 *
 * 例如，上面的二进制手表读取 “3:25”。
 *
 * 给定一个非负整数 n代表当前 LED 亮着的数量，返回所有可能的时间。
 *
 * 案例:
 *
 *
 * 输入: n = 1
 * 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16",
 * "0:32"]
 *
 *
 *
 * 注意事项:
 *
 *
 * 输出的顺序没有要求。
 * 小时不会以零开头，比如 “01:00”是不允许的，应为 “1:00”。
 * 分钟必须由两位数组成，可能会以零开头，比如 “10:2”是无效的，应为 “10:02”。
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  const toDate = str => {
    const hour = parseInt(str.slice(0, 4), 2)
    const minute = parseInt(str.slice(4), 2)

    if (hour > 11 || minute > 59) return ''

    const result = `${hour}:${minute <= 9 ? '0' : ''}${minute}`
    return result
  }

  // f(n, m) = g(f(n, m-1)) + h(f(n - 1, m))
  const getPermutations = (n, m) => {
    let result = []

    if (n === 0 && m === 1) result.push('0')
    if (n === 1 && m === 1) result.push('1')

    if (m > 1) result = result.concat(getPermutations(n, m - 1).map(p => `0${p}`))
    if (n > 0) result = result.concat(getPermutations(n - 1, m).map(p => `1${p}`))

    return result
  }

  return getPermutations(num, 10).map(toDate).filter(Boolean)
}
// @lc code=end
module.exports = readBinaryWatch
