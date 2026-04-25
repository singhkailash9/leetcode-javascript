/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let res = 0;
    
    for (let i = 1; i < points.length; i++) {
        let [x1, y1] = points[i - 1];
        let [x2, y2] = points[i];
        res += Math.max(Math.abs(y2-y1), Math.abs(x2-x1));
    }
    return res;
};