// a) Print odd numbers in an array

// Anonymous function
(function(arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]); // Output: 1, 3, 5

// IIFE
(function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5]); // Output: 1, 3, 5


// b) Convert all the strings to title caps in a string array

// Anonymous function
(function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})(["ruthrapathi", "murugan"]); // Output: [ 'Ruthrapathi', 'Murugan' ]

// IIFE
(function(arr) {
    var titleCase = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    console.log(titleCase);
})(["ruthrapathi", "murugan"]); // Output: [ 'Ruthrapathi', 'Murugan' ]


// c) Sum of all numbers in an array

// Anonymous function
(function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
})([1, 2, 3, 4, 5]); // Output: 15

// IIFE
(function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})([1, 2, 3, 4, 5]); // Output: 15


// d) Return all the prime numbers in an array

// Anonymous function
(function(arr) {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return arr.filter(num => isPrime(num));
})([1, 2, 3, 4, 5]); // Output: [2, 3, 5]

// IIFE
(function(arr) {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    var primes = arr.filter(num => isPrime(num));
    console.log(primes);
})([1, 2, 3, 4, 5]); // Output: [2, 3, 5]


// e) Return all the palindromes in an array

// Anonymous function
(function(arr) {
    const isPalindrome = (str) => {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    };

    return arr.filter(str => isPalindrome(str));
})(["racecar", "hello", "level"]); // Output: ["racecar", "level"]

// IIFE
(function(arr) {
    const isPalindrome = (str) => {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    };

    var palindromes = arr.filter(str => isPalindrome(str));
    console.log(palindromes);
})(["racecar", "hello", "level"]); // Output: ["racecar", "level"]


// f) Return median of two sorted arrays of the same size.

// Anonymous function
(function(arr1, arr2) {
    const mergeArrays = [...arr1, ...arr2];
    mergeArrays.sort((a, b) => a - b);
    const length = mergeArrays.length;
    if (length % 2 === 0) {
        return (mergeArrays[length / 2 - 1] + mergeArrays[length / 2]) / 2;
    } else {
        return mergeArrays[Math.floor(length / 2)];
    }
})([1, 3, 5], [2, 4, 6]); // Output: 3.5

// IIFE
(function(arr1, arr2) {
    const mergeArrays = [...arr1, ...arr2];
    mergeArrays.sort((a, b) => a - b);
    const length = mergeArrays.length;
    var median;
    if (length % 2 === 0) {
        median = (mergeArrays[length / 2 - 1] + mergeArrays[length / 2]) / 2;
    } else {
        median = mergeArrays[Math.floor(length / 2)];
    }
    console.log(median);
})([1, 3, 5], [2, 4, 6]); // Output: 3.5


// g) Remove duplicates from an array

// Anonymous function
(function(arr) {
    return [...new Set(arr)];
})([1, 1, 2, 3, 4]); // Output: [1, 2, 3, 4]

// IIFE
(function(arr) {
    var uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
})([1, 1, 2, 3, 4]); // Output: [1, 2, 3, 4]


// h) Rotate an array by k times

// Anonymous function
(function(arr, k) {
    k = k % arr.length;
    if (k < 0) {
        k += arr.length;
    }

    reverse(arr, 0, arr.length - k - 1);
    reverse(arr, arr.length - k, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
})([1, 2, 3, 4], 2); // Output: [3, 4, 1, 2]

// IIFE
(function(arr, k) {
    k = k % arr.length;
    if (k < 0) {
        k += arr.length;
    }

    reverse(arr, 0, arr.length - k - 1);
    reverse(arr, arr.length - k, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
    console.log(arr);
})([1, 2, 3, 4], 2); // Output: [3, 4, 1, 2]

// Helper function for rotating array
function reverse(array, li, ri) {
    while (li < ri) {
        let temp = array[li];
        array[li] = array[ri];
        array[ri] = temp;

        li++;
        ri--;
    }
}

// Arrow function implementations

// Print odd numbers in an array
const printOddNumbers = (arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
printOddNumbers([1, 2, 3, 4, 5]); // Output: 1, 3, 5


// Convert all the strings to title caps in a string array
const convertToTitleCaps = (arr) => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};
console.log(convertToTitleCaps(["hello", "world"])); // Output: ["Hello", "World"]


// Sum of all numbers in an array
const sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


// Return all the prime numbers in an array
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimeNumbers = (arr) => {
    return arr.filter(num => isPrime(num));
};
console.log(getPrimeNumbers([1, 2, 3, 4, 5])); // Output: [2, 3, 5]


// Return all the palindromes in an array
const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

const getPalindromes = (arr) => {
    return arr.filter(str => isPalindrome(str));
};
console.log(getPalindromes(["level", "hello", "racecar"])); // Output: ["level", "racecar"]
