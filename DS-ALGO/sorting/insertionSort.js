const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 203, 4, 0];

function insertionSort(arr) {
    let len = arr.length;
    for (let i=1; i<len; i++) {
        for (let j=i; j>0; j--) {
            if (arr[j] < arr[j-1]) {
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);