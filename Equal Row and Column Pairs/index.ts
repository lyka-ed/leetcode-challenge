function equalPairs(grid: number[][]): number {
    let count = 0;
    let n: number = grid.length;
    let rowCount: Record<string, number> = {};

    for (let row of grid) {
        let key: string = row.join("|");
        rowCount[key] = (rowCount[key] || 0) + 1;
    }
    
    for (let j = 0; j < n; j++) {
        let col: number[] = [];
        for (let i = 0; i < n; i++) {
            col.push(grid[i][j]);
        }
        let key: string = col.join("|");
        if (rowCount[key]) count += rowCount[key];
    }

    return count;
}
