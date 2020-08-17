/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 *
 * https://leetcode-cn.com/problems/student-attendance-record-i/description/
 *
 * algorithms
 * Easy (51.06%)
 * Likes:    49
 * Dislikes: 0
 * Total Accepted:    17.4K
 * Total Submissions: 33.7K
 * Testcase Example:  '"PPALLP"'
 *
 * 给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：
 *
 *
 * 'A' : Absent，缺勤
 * 'L' : Late，迟到
 * 'P' : Present，到场
 *
 *
 * 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
 *
 * 你需要根据这个学生的出勤记录判断他是否会被奖赏。
 *
 * 示例 1:
 *
 * 输入: "PPALLP"
 * 输出: True
 *
 *
 * 示例 2:
 *
 * 输入: "PPALLL"
 * 输出: False
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absentCount = 0
  let lateCount = 0

  for (let i = 0, len = s.length; i < len; i++) {
    switch (s[i]) {
      case 'A':
        if (++absentCount > 1) return false
        lateCount = 0
        break
      case 'L':
        if (++lateCount > 2) return false
        break
      default:
        lateCount = 0
    }
  }

  return true
}
// @lc code=end
module.exports = checkRecord
