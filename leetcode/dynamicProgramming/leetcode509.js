// 509. 斐波那契数

/**
 * @param {number} n
 * @return {number}
 */
//递归 + 函数尾调用优化
// 基础框架 
function fib(n) { 
 return fibImpl(0, 1, n); 
} 
// 执行递归
function fibImpl(a, b, n) { 
 if (n === 0) { 
 return a; 
 } 
 return fibImpl(b, a + b, n - 1); 
}

// 动态规划
var fib = function(n) { 
    if(n < 2) {
        return n
    }
    let p = 0, q = 1, r;
    for(let i = 1; i < n; i++) {
        r = p + q
        p = q
        q = r
    } 
    return r
} 