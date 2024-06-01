function hasSubarrayWithSum(arr, target) {
    let sum = 0;
    const sumMap = new Map();
    sumMap.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sumMap.has(sum - target)) {
            return true;
        }
        sumMap.set(sum, i);
    }

    return false;
}
