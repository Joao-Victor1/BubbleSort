//BubbleSort
function bubbleSort(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] > array[j + 1]){
                let x = array[j];
                array[j] = array[j+1];
                array[j+1] = x;
            }
                
        }
    }
}

let data = [6,5,3,1,2,7,4,8];
bubbleSort(data);
console.log(data);