function findSubarray(array, target) {
    let sum = 0;
    let start = 0;
    let i=0;
    for (let i ; i < array.length; i++) {
        sum += array[i];
        
        while (sum > target && start <= i) {
            sum -= array[start];
            start++;
        }

        if (sum === target) {
            return true;
        }
    }

    return false;
}

// Sample tests
const arr1 = [4, 2, 7, 1, 9, 5];
const target1 = 10;
console.log(findSubarray(arr1, target1)); // Output: true

const arr2 = [1, 2, 3, 4, 5];
const target2 = 10;
console.log(findSubarray(arr2, target2)); // Output: true
