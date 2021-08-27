// 394. 字符串解码

/**
 * @param {string} s
 * @return {string}
 * 双栈法
 */
 var decodeString = function(s) {
    let strStack = [];
    let numStack = [];
    let result = ''
    let multiple = 0
    for(let c of s) {
        if(isNaN(c)) {
            if(c == '[') {
                strStack.push(result);
                result = '';
                numStack.push(multiple);
                multiple = 0               
            } else if(c == ']'){
               result = strStack.pop() + result.repeat(numStack.pop())
            } else {
                result = result + c
            }
        } else {
            multiple = multiple * 10 + Number(c);
        }
    }
    return result;
};


// 单栈法
var decodeString = function(s) {
    let stack = []
    for (const char of s) {
        if(char !== ']') {
            stack.push(char)
        } else {
            let tem = stack.pop();
            let str = '';
            while(tem !== '[') {
                str = tem + str;
                tem = stack.pop();
            }
            let num = '';
            let numTem = stack.pop();
            while(!isNaN(numTem)) {
                num = numTem + num;
                numTem = stack.pop();
            }
            stack.push(numTem);
            stack.push(str.repeat(num))
        }
    }
    return stack.join('')
}
