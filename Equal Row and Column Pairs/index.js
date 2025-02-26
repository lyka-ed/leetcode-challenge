/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;
    let n = grid.length;
    let rowCount = {};

    for (let row of grid) {
        let key = row.join("|");
        rowCount[key] = (rowCount[key] || 0) + 1;
    }
    
    for (let j = 0; j < n; j++) {
        let col = [];
        for (let i = 0; i < n; i++) {
            col.push(grid[i][j]);
        }
        let key = col.join("|");
        if (rowCount[key]) count += rowCount[key];
    }

    return count;
};


const grid = [
    [11, 2, 1],
    [1, 11, 18],
    [15, 12, 8]
];

console.log(equalPairs(grid));