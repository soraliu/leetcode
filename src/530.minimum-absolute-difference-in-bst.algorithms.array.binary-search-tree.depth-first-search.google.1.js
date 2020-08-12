/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 *
 * https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (56.80%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    18.9K
 * Total Submissions: 32.8K
 * Testcase Example:  '[1,null,3,2]'
 *
 * 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
 *
 *
 *
 * 示例：
 *
 * 输入：
 *
 * ⁠  1
 * ⁠   \
 * ⁠    3
 * ⁠   /
 * ⁠  2
 *
 * 输出：
 * 1
 *
 * 解释：
 * 最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中至少有 2 个节点。
 * 本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
 * 相同
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  if (!root) return Infinity

  /**
   * @return {number}
   */
  const getLargestOfLeft = node => {
    if (!node.left) return Infinity

    let max = node.left

    while (max.right) {
      max = max.right
    }

    return max.val
  }

  /**
   * @return {number}
   */
  const getLowerestOfRight = node => {
    if (!node.right) return Infinity

    let min = node.right

    while (min.left) {
      min = min.left
    }

    return min.val
  }

  return Math.min(
    Math.abs(root.val - getLargestOfLeft(root)),
    Math.abs(getLowerestOfRight(root) - root.val),
    getMinimumDifference(root.left),
    getMinimumDifference(root.right)
  )
}
// @lc code=end
module.exports = getMinimumDifference
