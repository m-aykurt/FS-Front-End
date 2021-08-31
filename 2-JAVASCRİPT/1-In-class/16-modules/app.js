// name import

import {WHW,counter,inc,dec,sum} from "./module1.js";

console.log('WHW :>> ', WHW);

inc()
inc(55)
console.log('counter :>> ', counter);
dec(44)
console.log(counter)
sum(11,2)
console.log(sum(11,2))

// default import

import mn from "./module1.js";
console.log(mn)