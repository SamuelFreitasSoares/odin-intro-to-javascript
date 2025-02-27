const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);
};

const multiply = function(array) {
    return array.reduce((total, currentItem) => {
        return total*currentItem;
    }, 1)
};

const power = function(x,y) {
	return x ** y;
};

const factorial = function(number) {
    let total = 1;
    if(number===0){
        return 1;
    }else{
        for(number; number >= 1; number--){
            total = total*number;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};