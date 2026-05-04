/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let maxLength = 0;
    const n = arr.length;

    if (n < 3) return 0;

    for (let i = 1; i < n - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            let left = i - 1;
            let right = i + 1;

            while (left > 0 && arr[left] > arr[left - 1]) {
                left--;
            }

            while (right < n - 1 && arr[right] > arr[right + 1]) {
                right++;
            }

            let currentLength = right - left + 1;
            maxLength = Math.max(maxLength, currentLength);
            
            i = right;
        }
    }
    return maxLength;
};