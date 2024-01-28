function compareJSON(obj1, obj2) {
    // Get the keys of both objects
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if each key and value are the same
    for (let i = 0; i < keys1.length; i++) {
        const key1 = keys1[i];
        const key2 = keys2[i];

        // Check if the keys are the same
        if (key1 !== key2) {
            return false;
        }

        // Check if the values are the same
        if (obj1[key1] !== obj2[key2]) {
            return false;
        }
    }

    return true;
}

// Example JSON objects
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

// Compare JSON objects
console.log(compareJSON(obj1, obj2)); // Output: true
