// 300. 最长递增子序列

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划 时间复杂度O(n2) 空间复杂度O(n)
var lengthOfLIS = function(nums) {
    if(nums.length < 2) {
        return nums.length;
    }
    const dp = []
    dp[0] = 1;
    let max = 1
    for(let i = 1; i <nums.length; i++) {
        dp[i] = 1;
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        max= Math.max(max, dp[i])
    }
    return max
};

// 贪心 + 二分法 时间复杂度O(nlogn) 空间复杂度O(n)
var lengthOfLIS = function(nums) {
    if(nums.length < 2) {
        return nums.length
    }
    const cell = [nums[0]]
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > cell[cell.length - 1]) {
            cell.push(nums[i])
        } else {
            let left = 0,
                right = cell.length - 1,
                dest = 0;
                while(left <= right) {
                    let middle = (left + right) >> 1;
                    if(cell[middle] < nums[i]) {
                        dest = middle + 1;
                        left = middle + 1;
                    } else {
                        right = middle - 1
                    }
                }
                cell[dest] = nums[i]
        }
    }
    return cell.length
}