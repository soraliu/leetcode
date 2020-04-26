/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (61.41%)
 * Likes:    121
 * Dislikes: 0
 * Total Accepted:    25.5K
 * Total Submissions: 41.5K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * s = "abcd"
 * t = "abcde"
 * 
 * 输出：
 * e
 * 
 * 解释：
 * 'e' 是那个被添加的字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let mapping = {}
  for (let i = 0, len = s.length; i < len; i++) {
    mapping[s[i]] = mapping[s[i]] ? mapping[s[i]] + 1 : 1;
  }

  for (let i = 0, len = t.length; i < len; i++) {
    if (!mapping[t[i]] || mapping[t[i]] === 0) return t[i]

    mapping[t[i]] -= 1;
  }

  return '';
};
// @lc code=end
