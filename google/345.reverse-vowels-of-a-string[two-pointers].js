/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (49.58%)
 * Likes:    84
 * Dislikes: 0
 * Total Accepted:    32.6K
 * Total Submissions: 65.7K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明:
 * 元音字母不包含字母"y"。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if (typeof s !== 'string') return ''

  s = s.split('')

  const vowel = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
  }

  let i = 0
  let j = s.length - 1

  while (i <= j) {
    if (vowel[s[i]] && vowel[s[j]]) {
      let tmp = s[j]
      s[j--] = s[i]
      s[i++] = tmp
    }

    if (!vowel[s[i]]) i++
    if (!vowel[s[j]]) j--
  }

  return s.join('')
};
// @lc code=end
