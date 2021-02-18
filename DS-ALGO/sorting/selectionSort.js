const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 203, 4, 0]

function selectionSort(arr) {
    let len = arr.length;
    for (let i=0; i<len; i++) {
      let temp = arr[i];
      let tempIndex = i;
      for (let j=i+1; j<len; j++) {
        if (temp > arr[j]) {
            temp = arr[j];
            tempIndex = j;
        }
      }  
      arr[tempIndex] = arr[i];
      arr[i] = temp;
    }
}

selectionSort(numbers);
console.log(numbers);
