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

export function caesarCipher() {

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

            console.log(obj.min);
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

            console.log(obj.max);
        };

    // for length
    obj.length = arr.length;

            return obj;
};