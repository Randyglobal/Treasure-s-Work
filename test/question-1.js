// question 1

//write a word converter fuction that converts words written in snake case to camel case
//e.g level_2=level2 , first_name=firstName.

function wordConverter(word){
    var seperated = word.split('_');
    var newStr = seperated[0] + seperated[1][0].toUpperCase();

    for(var i=1;i<seperated[1].length;i++){
        newStr = newStr + seperated[1][i];
    }
    
    console.log(newStr);

}


//change the value of the funnction to test for other cases
wordConverter('first_name');