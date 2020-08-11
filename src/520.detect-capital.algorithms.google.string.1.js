/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 *
 * https://leetcode-cn.com/problems/detect-capital/description/
 *
 * algorithms
 * Easy (55.31%)
 * Likes:    102
 * Dislikes: 0
 * Total Accepted:    24K
 * Total Submissions: 43.5K
 * Testcase Example:  '"USA"'
 *
 * 给定一个单词，你需要判断单词的大写使用是否正确。
 *
 * 我们定义，在以下情况时，单词的大写用法是正确的：
 *
 *
 * 全部字母都是大写，比如"USA"。
 * 单词中所有字母都不是大写，比如"leetcode"。
 * 如果单词不只含有一个字母，只有首字母大写，比如"Google"。
 *
 *
 * 否则，我们定义这个单词没有正确使用大写字母。
 *
 * 示例 1:
 *
 *
 * 输入: "USA"
 * 输出: True
 *
 *
 * 示例 2:
 *
 *
 * 输入: "FlaG"
 * 输出: False
 *
 *
 * 注意: 输入是由大写和小写拉丁字母组成的非空单词。
 *
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const isAllLower = w => {
    for (let i = 0, len = w.length; i < len; i++) {
      if (w.charCodeAt(i) < 'a'.charCodeAt(0)) return false
    }

    return true
  }

  const isAllUpper = w => {
    for (let i = 0, len = w.length; i < len; i++) {
      if (w.charCodeAt(i) > 'Z'.charCodeAt(0)) return false
    }

    return true
  }

  const isFirstUpper = w => {
    return w.charCodeAt(0) < 'a'.charCodeAt(0) && isAllLower(w.slice(1))
  }

  return isAllUpper(word) || isAllLower(word) || isFirstUpper(word)
}
// @lc code=end
module.exports = detectCapitalUse
