export function sum(a, b) {
  return a + b;
};

export function capitalized(string) {
    if (!string) return " ";

    return string[0].toUpperCase() + string.slice(1);
};

export function reverseString(string) {

    if (!string) return " ";

    let newString = '';

    for (i = string.length - 1; i > -1; i--){

        newString += string[i];
    };
    
    return newString;
};

export class Calculator {

    add(num1, num2){
        return num1 + num2;
    };

    sub(num1, num2){
        return num1 - num2;
    };

    mul(num1, num2){
        return num1 * num2;
    };

    div(num1, num2){
        return num1 / num2;
    };
};

export function caesarCipher(str, key) {

    const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let decryptedWord = '';

        for (i = 0; i < str.length; i++){

            if (lower.includes(str[i])){
                // to wrap back to start of array if result is longer than the arr length
                if (lower.indexOf(str[i]) + key > lower.length - 1) {
                    decryptedWord = decryptedWord + lower[(lower.indexOf(str[i]) + key) - lower.length];
                }else {
                    decryptedWord = decryptedWord + lower[lower.indexOf(str[i]) + key];
                };
            };

            if (upper.includes(str[i])){
                // to wrap back to start of array if result is longer than the arr length
                if (upper.indexOf(str[i]) + key > upper.length - 1) {
                    decryptedWord = decryptedWord + upper[(upper.indexOf(str[i]) + key) - upper.length];
                }else {
                    decryptedWord = decryptedWord + upper[upper.indexOf(str[i]) + key];
                };  
            };

        };
        return decryptedWord;

};

export function analyzeArray(arr){

    let obj = [];
    // for avarage
    obj.average = arr.reduce((sum, cur) => sum + cur, 0) / arr.length;

    // for min
    let min = arr[0];
        for(i = 0; i < arr.length; i++){
            let cur = arr[i];

                if (min < cur) {
                    min = min;
                }else {
                    min = cur;
                };

            obj.min = min;
        };

    // for max
    let max = arr[0];
        for(i = 0; i < arr.length; i++){
            let cur = arr[i];

                if (max > cur) {
                    max = max;
                }else {
                    max = cur;
                };

            obj.max = max;
        };

    // for length
    obj.length = arr.length;

            return obj;
};