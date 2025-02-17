/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = s.match(/[aeiouAEIOU]/g);
  return s.replace(/[aeiouAEIOU]/g, () => vowels.pop());
};

console.log(reverseVowels("AaEeIiOoUu"));
