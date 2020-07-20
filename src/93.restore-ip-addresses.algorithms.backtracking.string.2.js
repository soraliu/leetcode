/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (46.52%)
 * Likes:    260
 * Dislikes: 0
 * Total Accepted:    39.8K
 * Total Submissions: 85.5K
 * Testcase Example:  '"25525511135"'
 *
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 *
 * 有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。
 *
 *
 *
 * 示例:
 *
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = []

  const tracking = (ip, depth, start) => {
    const offset = s.length - start

    if (depth >= 5) {
      if (offset === 0) {
        result.push(ip.join('.'))
      }
      return
    }

    if (offset >= 1) {
      if (s[start] === '0') {
        return
      }

      const num = parseInt(s[start])
      if (num >= 0 && num <= 255) {
        tracking(ip.concat([num]), depth + 1, start + 1)
      }
    }
    if (offset >= 2) {
      const num = parseInt(s[start] + s[start + 1])
      if (num >= 0 && num <= 255) {
        tracking(ip.concat([num]), depth + 1, start + 2)
      }
    }
    if (offset >= 3) {
      const num = parseInt(s[start] + s[start + 1] + s[start + 2])
      if (num >= 0 && num <= 255) {
        tracking(ip.concat([num]), depth + 1, start + 3)
      }
    }
  }

  tracking([], 1, 0)

  return result
}
// @lc code=end
module.exports = restoreIpAddresses
