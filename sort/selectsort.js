function selectSort(array) {
    let len = array.length;
    let minIndex,temp;
    for(let i = 0;i<len-1;i++){
        minIndex = i;
        for(let j = i+1;j<len;j++){
            if(array[j]<array[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex!=i){
            temp=array[i];
            array[i]=array[minIndex];
            array[minIndex]=temp;
        }
    }
    return array;
}
let array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 4];
console.log(selectSort(array));
