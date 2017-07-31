function insertSort(array) {
    let len = array.length;
    let key;
    for (let i = 1; i < len; i++) {
        key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}
let array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 4];
console.log(insertSort(array));