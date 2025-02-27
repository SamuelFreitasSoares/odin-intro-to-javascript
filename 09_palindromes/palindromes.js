const palindromes = function (words) {
    
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    filteredWords = words.replace(punctuationRegex,"");
    lettersArray = filteredWords.toLowerCase()
    .split('')
    .filter((letter) => {
        if(letter === " ")
        {
            return '';
        }else{
            return letter;
        }
    })
    .join('');

    if(lettersArray === lettersArray.split('').reverse().join(''))
    {
        return true;
    }else{
        console.log(lettersArray.split('').reverse().join(''));
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;