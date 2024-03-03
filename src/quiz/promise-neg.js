const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9],
];

function logRowsWithNegatives(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("BAD INPUT: Expected array as input");
            return;
        }

        Promise.all(
            arr.map((row) => {
                return new Promise((resolveRow) => {
                    setTimeout(() => {
                        const hasNegative = row.some((num) => num < 0);
                        if (hasNegative) {
                            resolveRow(row);
                        } else {
                            resolveRow(null);
                        }
                    }, 0);
                });
            })
        )
            .then((rowsWithNegatives) => {
                const rowsWithNegativesFiltered = rowsWithNegatives.filter(
                    (row) => row !== null
                );
                rowsWithNegativesFiltered.forEach((row) => {
                    console.log("Row with negative number:", row);
                });
                resolve(rowsWithNegativesFiltered);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const logPromise = logRowsWithNegatives(array2D);
logPromise
    .then((rowsWithNegatives) => {
        console.log("Rows with negative numbers:", rowsWithNegatives);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
