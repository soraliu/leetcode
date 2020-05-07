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
var restoreIpAddresses = function(s) {
  let result = []

  let valid = ip => {
    let ranges = ip.split('.')
    if (ranges.length === 4 && ranges.reduce((prev, next) => {
      if (
        next === ''
        || +next < 0
        || +next > 255
        || (next.length > 1 && next[0] === '0')
      ) return false

      return prev
    }, true)) return true

    return false
  }

  let ips = (ip, n) => [`${ip}${n}`, `${ip}.${n}`]

  let bt = (rest, ip) => {
    if (rest.length === 0) {
      valid(ip) && result.push(ip)
    } else {
      ips(ip, rest[0]).forEach(newIP => bt(rest.slice(1), newIP))
    }
  }

  bt(s.split(''), '')

  return result
};
// @lc code=end
