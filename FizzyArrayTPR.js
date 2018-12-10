// This Function creates a program that displays an array of given variables

function numarray(n) {
    resultArr = [n];
    for (i = 0; i < n; i++) {
        resultArr[i] = i ;
    }
    console.log(resultArr);
}
// This is the method that calls the function

numarray(5);
numarray(12);