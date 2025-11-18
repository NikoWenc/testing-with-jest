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
}