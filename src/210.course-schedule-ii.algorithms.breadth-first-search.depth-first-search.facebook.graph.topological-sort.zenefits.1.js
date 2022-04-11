/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 *
 * https://leetcode.com/problems/course-schedule-ii/description/
 *
 * algorithms
 * Medium (46.40%)
 * Likes:    6438
 * Dislikes: 231
 * Total Accepted:    602.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '2\n[[1,0]]'
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where prerequisites[i]
 * = [ai, bi] indicates that you must take course bi first if you want to take
 * course ai.
 *
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to
 * first take course 1.
 *
 *
 * Return the ordering of courses you should take to finish all courses. If
 * there are many valid answers, return any of them. If it is impossible to
 * finish all courses, return an empty array.
 *
 *
 * Example 1:
 *
 *
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: [0,1]
 * Explanation: There are a total of 2 courses to take. To take course 1 you
 * should have finished course 0. So the correct course order is [0,1].
 *
 *
 * Example 2:
 *
 *
 * Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 * Output: [0,2,1,3]
 * Explanation: There are a total of 4 courses to take. To take course 3 you
 * should have finished both courses 1 and 2. Both courses 1 and 2 should be
 * taken after you finished course 0.
 * So one correct course order is [0,1,2,3]. Another correct ordering is
 * [0,2,1,3].
 *
 *
 * Example 3:
 *
 *
 * Input: numCourses = 1, prerequisites = []
 * Output: [0]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= numCourses <= 2000
 * 0 <= prerequisites.length <= numCourses * (numCourses - 1)
 * prerequisites[i].length == 2
 * 0 <= ai, bi < numCourses
 * ai != bi
 * All the pairs [ai, bi] are distinct.
 *
 *
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // 1. init a indegress map
  // 2. loop prereuisites
  // 3. loop indegress map and push those vetices whose ingress is zero to a stack
  // 4. loop stack and pop the item to result, then minus one number of outdegree vertices

  const indegressMap = {}
  for (let i = 0; i < numCourses; i++) {
    indegressMap[i] = 0
  }

  const prerequisiteMap = {}
  for (let i = 0, len = prerequisites.length; i < len; i++) {
    indegressMap[prerequisites[i][0]] += 1

    if (!prerequisiteMap[prerequisites[i][1]]) {
      prerequisiteMap[prerequisites[i][1]] = []
    }
    prerequisiteMap[prerequisites[i][1]].push(prerequisites[i][0])
  }

  const stack = []
  Object.keys(indegressMap).forEach(course => {
    if (indegressMap[course] === 0) {
      stack.push(course)
      delete indegressMap[course]
    }
  })

  console.log('stack', stack)

  const result = []
  while (stack.length > 0) {
    const course = stack.shift()
    result.push(course)

    if (prerequisiteMap[course]) {
      prerequisiteMap[course].forEach(next => {
        indegressMap[next] -= 1
      })
    }

    if (Object.keys(indegressMap).length > 0) {
      Object.keys(indegressMap).forEach(course => {
        if (indegressMap[course] === 0) {
          stack.push(course)
          delete indegressMap[course]
        }
      })
    }
  }

  if (Object.keys(indegressMap).length > 0) {
    return []
  }

  return result
}
// @lc code=end
module.exports = findOrder
