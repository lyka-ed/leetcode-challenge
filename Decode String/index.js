/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
  const stack = [];

  for (let asteroid of asteroids) {
    let isDestroyed = false;

    while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
      let top = stack.pop();
      if (top > Math.abs(asteroid)) {
        stack.push(top);
        isDestroyed = true;
        break;
      } else if (top === Math.abs(asteroid)) {
        isDestroyed = true;
        break;
      }
    }

    if (!isDestroyed) stack.push(asteroid);
  }

  return stack;
}

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
      stack.pop(); // Remove "["

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
