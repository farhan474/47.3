function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if the mid element is 1
        if (arr[mid] === 1) {
            left = mid + 1;  // Move to the right half
        } else {
            // If mid element is 0 we move to the left half
            right = mid - 1;
        }
    }

    // left is now the first occurrence of 0 or the index after the last 1
    return arr.length - left;
}

