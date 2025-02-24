const removeFromArray = function(array, ...args) {

    for(let j = 0; j < args.length; j++){
        console.log(args[j]);
        for (let i = 0; i < array.length; i++){
            console.log(array[i]);
            if(array[i] === args[j])
            {
                array.splice(i,1);
                i--;
            }
        }
    }
    
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;