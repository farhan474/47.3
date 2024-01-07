function sortedFrequency(arr, target) {
    function findFirstOccurrence(target) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                result = mid;
                right = mid - 1; // Continue searching in the left half for the first occurrence
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    function findLastOccurrence(target) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                result = mid;
                left = mid + 1; // Continue searching in the right half for the last occurrence
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    const firstIndex = findFirstOccurrence(num);
    
    // If the first occurrence is not found, the number is not presen in the array
    if (firstIndex === -1) {
        return 0;
    }

    const lastIndex = findLastOccurrence(num);

    // Return the frequency
    return lastIndex - firstIndex + 1;
}
