// This function takes numbers and places them in a array

function numarray(n) {
    resultArr = [n];
    for (i = 0; i < n; i++) {
        resultArr[i] = i ;
    }
    console.log(resultArr);
    
}
  // This is the method that calls numArray Function
    numarray(7);
    numarray(4);