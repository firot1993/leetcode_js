/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    var stack = [];
    for (var x of tokens) {
        if (x == '+') {
            var a = stack.pop();
            var b = stack.pop();
            stack.push(a + b);
        } else if (x == '-') {
            var a = stack.pop();
            var b = stack.pop();
            stack.push(b - a);
        } else if (x == '*') {
            var a = stack.pop();
            var b = stack.pop();
            stack.push(a * b);
        } else if (x == '/') {
            var a = stack.pop();
            var b = stack.pop();
            stack.push(parseInt(b / a));
        } else {
            stack.push(parseInt(x));
        }
    }
    return stack.pop();
};


console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]))