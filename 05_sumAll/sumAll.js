const sumAll = function(numberOne, numberTwo) {
    let big;
    let small;
    let sum = 0;
    if(numberOne > numberTwo){
        big = numberOne;
        small = numberTwo;
    } else{
        big = numberTwo;
        small = numberOne;
    }

    if(numberOne < 0 || numberTwo < 0){
        return "ERROR"
    } else if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo)){
        return "ERROR";
    } else if (typeof(numberOne) != "number" || typeof(numberTwo) != "number"){
        return "ERROR";
    } else{
        for (let i = small; i <= big; i++){
            sum += i
        }
    }
        
    

    return sum;


};

// Do not edit below this line
module.exports = sumAll;