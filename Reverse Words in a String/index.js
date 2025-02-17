/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

console.log(reverseWords("My name is Glory Lyka I love food"));
