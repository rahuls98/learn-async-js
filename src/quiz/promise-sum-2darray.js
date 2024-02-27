const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function sum2DArrayConcurrent(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("BAD INPUT: Expected array as input");
            return;
        }

        const flattenedArray = arr.flat();

        Promise.all(flattenedArray.map((value) => Promise.resolve(value)))
            .then((values) => {
                const sum = values.reduce((acc, curr) => acc + curr, 0);
                resolve(sum);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const sumPromise = sum2DArrayConcurrent(array2D);
sumPromise
    .then((result) => {
        console.log("Sum of array2D:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
