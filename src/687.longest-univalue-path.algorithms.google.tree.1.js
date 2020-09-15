/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
 *
 * https://leetcode-cn.com/problems/longest-univalue-path/description/
 *
 * algorithms
 * Easy (39.83%)
 * Likes:    354
 * Dislikes: 0
 * Total Accepted:    23.3K
 * Total Submissions: 55.8K
 * Testcase Example:  '[5,4,5,1,1,5]'
 *
 * 给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。
 *
 * 注意：两个节点之间的路径长度由它们之间的边数表示。
 *
 * 示例 1:
 *
 * 输入:
 *
 *
 * ⁠             5
 * ⁠            / \
 * ⁠           4   5
 * ⁠          / \   \
 * ⁠         1   1   5
 *
 *
 * 输出:
 *
 *
 * 2
 *
 *
 * 示例 2:
 *
 * 输入:
 *
 *
 * ⁠             1
 * ⁠            / \
 * ⁠           4   5
 * ⁠          / \   \
 * ⁠         4   4   5
 *
 *
 * 输出:
 *
 *
 * 2
 *
 *
 * 注意: 给定的二叉树不超过10000个结点。树的高度不超过1000。
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
var longestUnivaluePath = function (root) {
  if (!root) return 0

  const getLongestPath = node => {
    const left = node.left && node.val === node.left.val ? getLongestPath(node.left) + 1 : 0
    const right = node.right && node.val === node.right.val ? getLongestPath(node.right) + 1 : 0
    return Math.max(left, right)
  }

  let paths = 0
  if (root.left && root.val === root.left.val) {
    paths += getLongestPath(root.left) + 1
  }
  if (root.right && root.val === root.right.val) {
    paths += getLongestPath(root.right) + 1
  }

  return Math.max(paths, longestUnivaluePath(root.left), longestUnivaluePath(root.right))
}
// @lc code=end
module.exports = longestUnivaluePath
