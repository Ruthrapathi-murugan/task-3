//Do the below programs in anonymous function & IIFE


// a)Print odd numbers in an array
//anonymous function
function odd(arr){
    for(var i=0;i<arr.length;i++)
    {
      if(arr[i]%2!==0)
    {
      console.log(arr[i]);
    }}}
    var num=[1,2,3,4]
    odd(num);

//IIFE
(function() {
    function odd(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                console.log(arr[i]);
            }
        }
    }
    
    var num = [1, 2, 3, 4];
    odd(num);
})();


//b.Convert all the strings to title caps in a string array
//anonymous function
var titleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
};
var inputString = "this is ruthra";
var result = titleCase(inputString);
console.log(result); 

//IIFE
(function() {
    var titleCase = function (str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        } 
        return str.join(' ');
    };

    var inputString = "this is ruthra";
    var result = titleCase(inputString);
    console.log(result); 
})();


//c.Sum of all numbers in an array

//anonymous function
function foo(...arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
    sum = sum+arr[i]
    }
    return sum;
    
    }
    console.log(foo(12,13))
    console.log(foo(121,131))
    console.log(foo(12111,13111,1441,1551))



//IIFE
(function() {
    function foo(...arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    console.log(foo(12, 13));
    console.log(foo(121, 131));
    console.log(foo(12111, 13111, 1441, 1551));
})();


// d.Return all the prime numbers in an array

//anonymous function
var findPrimes = function(array) {
    array = array.filter((number) => {
        if (number < 2) return false; 
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false; 
        }
        return true;
    });
    console.log(array);
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findPrimes(numbers);

//IIFE

(function(array) {
    array = array.filter((number) => {
        if (number < 2) return false; 
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false; 
        }
        return true;
    });
    console.log(array);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Return all the palindromes in an array

//anonymous function
function isPalindrome(N) {
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++) {
        if (str[i] != str[len - 1 - i])
            return false;
    }
    return true;
}

console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false




//anonymous function

(function(N) {
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++) {
        if (str[i] != str[len - 1 - i])
            return false;
    }
    console.log(true);
    return true;
})(12321);


//F.Return median of two sorted arrays of the same size.
//anonymous function


//IIFE function




//G.Remove duplicates from an array
//anonymous function
var removeDuplicates = function(array) {
    var dup = [...new Set(array)];
    console.log(dup);
};
removeDuplicates([1, 1, 2, 3, 4]); // Output: [1, 2, 3, 4]




//IIFE function
(function(array) {
    let dup = [...new Set(array)];
    console.log(dup);
})([1, 1, 2, 3, 4]); // Output: [1, 2, 3, 4]

// h.Rotate an array by k times
 
//anonymous function
function rotateArray(array, k) {
    k = k % array.length;
    if (k < 0) {
        k += array.length;
    }

    reverse(array, 0, array.length - k - 1);
    reverse(array, array.length - k, array.length - 1);
    reverse(array, 0, array.length - 1);
}

function reverse(array, li, ri) {
    while (li < ri) {
        let temp = array[li];
        array[li] = array[ri];
        array[ri] = temp;

        li++;
        ri--;
    }
}
let arr = [1, 2, 3, 4];
rotateArray(arr, 2);
console.log(arr); // Output: [3, 4, 1, 2]


    //Do the below programs in arrow functions. 

    //a.Print odd numbers in an array

    var OddNumber = (arr) => {
        arr.forEach(num => {
            if (num % 2 !== 0) {
                console.log(num);
            }
        });
    };
         OddNumber([1, 2, 3, 4, 5]); // Output: 1, 3, 5


        //b. Convert all the strings to title caps in a string array

        var Title = (arr) => {
            return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
        };
        console.log(Title(["ruthrapathi", "murugan"])); // Output: [ 'Ruthrapathi', 'Murugan' ]

        //c.Sum of all numbers in an array

        var sumArray = (arr) => {
            return arr.reduce((acc, curr) => acc + curr, 0);
        };
        console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


        //d.Return all the prime numbers in an array

        var Prime = (num) => {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        };
        
        const getPrimeNumbers = (arr) => {
            return arr.filter(num => Prime(num));
        };
        console.log(getPrimeNumbers([1, 2, 3, 4, 5])); // Output: [2, 3, 5]

        //e.Return all the palindromes in an array

        var isPalindrome = (str) => {
            const reversedStr = str.split('').reverse().join('');
            return str === reversedStr;
        };
        
        const getPalindromes = (arr) => {
            return arr.filter(str => isPalindrome(str));
        };
        
        console.log(getPalindromes(["racecar", "hello", "level"])); // Output: ["racecar", "level"]

