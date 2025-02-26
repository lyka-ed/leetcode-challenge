/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
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
};

console.log(asteroidCollision([8, -8, 11, -2]));
