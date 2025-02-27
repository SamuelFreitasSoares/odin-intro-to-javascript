const fibonacci = function(number) {
    
    let arr = [];
    arr[0] = 1;
    arr[1] = 1;
    function fib(num){
        for(let i = 2; i < num+2; i++){
            arr[i] = arr[i-1] + arr[i-2]
        }
    }
    if(number === 0){
        return 0;
    }else if (number < 0){
        return "OOPS";
    }else if (typeof number === "string"){
        number = parseInt(number);
        if(number === 0){
            return 0;
        }
        fib(number);
    }else {
        fib(number);
    }
    
    return arr[number-1];
};

// Do not edit below this line
module.exports = fibonacci;