function quicksort(array) {
    if(array.length<=1){
        return array;
    }
    let index = Math.floor(array.length/2);
    let num = array.splice(index,1);
    let left=[],right=[];
    for(let i = 0;i<array.length;i++){
        if(array[i]<num){
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return quicksort(left).concat(num,quicksort(right));
}
let array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 4];
console.log(quicksort(array));
