function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    let middle = parseInt(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left,right) {
    let result = [];
    while (left.length&&right.length){
        if(left[0]<right[0]){
            result.push(left.shift());
        }
        else{
            result.push(right.shift());
        }
    }
    while (left.length){
        result.push(left.shift());
    }
    while (right.length){
        result.push(right.shift());
    }
    return result;
}
let array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 4];
console.log(mergeSort(array));
