/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
    } else {
      let decodedStr = "";
      while (stack.length > 0 && stack[stack.length - 1] !== "[") {
        decodedStr = stack.pop() + decodedStr;
      }
      stack.pop(); =

      let num = "";
      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }
      stack.push(decodedStr.repeat(Number(num)));
    }
  }

  return stack.join("");
};

console.log(asteroidCollision([5, 10, -5]));
