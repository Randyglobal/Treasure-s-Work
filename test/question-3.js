//function to sum the elements of an array using looping construct and returns the sum

function sumArray(array){
    sum = 0;
    for(var i=0;i<array.length;i++){
        sum = sum + array[i];
    }
    console.log(sum);
}

//please change the array to get results for other array
sumArray([1,2,6]);