function e(n){
    // base case, when n = 0, 1 is the only output
    if(n === 0){
        return 1;
    }
    // set equal to basecase
    eulersNum = 1;
    // set factorial to be equal to 1
    factorial = 1;
    // iterates once for each number
    for(let i = 1; i <= n; i++){
        // factorial is solved by multiplying the factorial by the number of variables at the current spot, where factorial starts at the last spot.
        factorial = factorial * i;
        // add the specific number for each loop.
        eulersNum = eulersNum + 1 / factorial;
    }
    return eulersNum;
}

// Lars Code Below!
//function factorial(n) {
//    if(n === 0) return 1;
//    else return n * factorial(n - 1);
//}

//function e(n) {
//    if(n === 0) return 1;
//   else return 1.0 / factorial(n) + e(n - 1);
//}
