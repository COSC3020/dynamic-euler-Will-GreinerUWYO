const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

//assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

//assert(factorial(1) === 1);
assert(e(1) === 2);

//assert(factorial(8) === 40320);
assert(e(8) === 2.71827876984127);
