/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    let islandCount = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    // Depth First Search
    const dfs = (r, c) => {
        // Base cases: Stop searching if we go out of bounds, 
        // or if we hit water ('0')
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return;
        }
        
        // We are on land. "Sink" it so we don't count it again.
        grid[r][c] = '0';

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1); 
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                islandCount++;
                dfs(r, c);
            }
        }
    }
    return islandCount;
};