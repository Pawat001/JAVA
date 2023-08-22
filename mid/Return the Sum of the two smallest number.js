function sumOfTwoSmallest(arr) {
    if (arr.length < 2) {
        throw new Error("Array should have at least two elements");
    }

    arr.sort((a, b) => a - b);
    return arr[0] + arr[1];
}

// Test cases
const numbers1 = [5, 2, 8, 1, 9, 3];
const numbers2 = [10, 20, 5, 8, 15];

const sum1 = sumOfTwoSmallest(numbers1);
const sum2 = sumOfTwoSmallest(numbers2);

console.log(`Sum of two smallest numbers in [${numbers1}] is ${sum1}`);
console.log(`Sum of two smallest numbers in [${numbers2}] is ${sum2}`);
