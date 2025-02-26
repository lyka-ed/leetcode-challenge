/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let text = [];
    for (let char of s) {
        if (char === '*') {
            text.pop(); 
        } else {
            text.push(char); 
        }
    }
    return text.join('');
};

console.log(removeStars("glory**ede*m")); 
