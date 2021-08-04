// for in returned string no number
// let obj = {x: 1, y: 2, z: 3};
// for (let a in obj) {
//   console.log(a);
// }

//for of

// var names = ['Aaron', 'James', 'Oliver'];
// // var a;

// for (i of names) {
//   console.log(i);
// }


//            iterators

// // from string
// Array.from('foo');
// console.log(Array.from('foo'));

// // from set
// const set = new Set(['foo', 'bar', 'baz', 'foo']);
// console.log(Array.from(set));
// console.log(set);
// // [ "foo", "bar", "baz" ]

// // from map
// const map = new Map([
//     [1, 2],
//     [2, 4],
//     [4, 8],
// ]);
// Array.from(map);
// console.log(map);


// // from a nodelist
// const savings = Array.from(document.querySelectorAll('.savings'));
// console.log(savings);

// // using mapFn function
// const movements = Array.from(document.querySelectorAll('.savings'), (el) =>
//     Number(el.textContent.replace('$', ''))
// );
// // we take textContent of each nodelist and put it into newly created array
// console.log(movements);

// // Using an arrow function as the map function to
// // manipulate the elements
// console.log(Array.from([1, 2, 3], (x) => x * x)); //lambda benzeri
// // [1, 4, 9]

// // from new Array object
// console.log(Array.from(new Array(5)));

// // new syntax
// console.log(Array.from({
//     length: 5
// }));
// // [undefined, undefined, undefined, undefined, undefined]
// // creates an array with 5 elements with assigning length property of an object
// // all of them are undefined again


// console.log(Array.from({
//     length: 5
// }, (_, i) => i));
// // [0, 1, 2, 3, 4]
// // as we used mapFn function now we assigned index values as values to this array.

// const range = (start, stop, step=1) =>
//   Array.from(
//     { length: Math.ceil((stop - start) / step) },
//       // setting length property of this new array
//     (_, i) => start + i * step
//       // adding values from start and every time increasing it with step
//   )
// console.log(range(4, 10, 1));
// console.log(range(4, 12));


// //makes iterator

// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;
//     const rangeIterator = {
//         next: function () {
//             let result;
//             if (nextIndex < end) {
//                 result = { value: nextIndex, done: false };
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//             }
//             return { value: iterationCount, done: true };
//             // this time we assinged number of elements to value. 
//         },
//     };
//     return rangeIterator;
// }

// const it = makeRangeIterator(1, 10, 2);
// let result = it.next();
// while (!result.done) {
//     console.log(result.value); // 1 3 5 7 9
//     result = it.next();
// }
// console.log('Iterated over sequence of size: ', result.value); // [5 numbers returned, that took interval in between: 0 to 10]

//           GENERATORS

// function* generateSequence() {
//     yield 1;
//     console.log('I start working from here');
//     yield 2;
//     yield 3;
// };

// const genSeq = generateSequence(); // cağrıldığında dönmez
// console.log(genSeq);

// let item = genSeq.next();
// while (!item.done) {
//     console.log(item);
//     item = genSeq.next();
// }

// console.log(item);
// console.log(Array.from(generateSequence()));


// making range method with generators
// function* makeRangeIterator(start = 0, end = 100, step = 1) {
//     let iterationCount = 0;
//     let currentVal = start;
//     while (currentVal < end) {
//         iterationCount++;
//         yield currentVal;
//         // every time code execution will stop here
//         // and it will return value done pair with an object
//         // value is currentVal
//         // done is false
//         currentVal += step;
//     }
//     return iterationCount;
//     // here it will return again an object with value and done properties
//     // this time value will have number of elements that we store in iterationCount variable
//     // done will be true
// };
// const it = makeRangeIterator(1, 10, 2);
// let result = it.next();
// while (!result.done) {
//     console.log(result.value); // 1 3 5 7 9
//     result = it.next();
// };
// console.log('Iterated over sequence of size: ', result.value)
// // [5 numbers returned, that took interval in between: 0 to 10]
// // let arr = Array.from(makeRangeIterator(1, 10, 2));
// let arr = Array.from(makeRangeIterator(1, 100, 4));
// console.log(arr);

// RECAP
//iterators
// let i = [1,2,3,4,5 ]
// let iterator  =i[Symbol.iterator]();
// // console.log(iterator.next());

// for( x in i ){
//     console.log(iterator.next());
    
// }


//GENERATORS

// function *generator(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// let iterator = generator();
// console.log(iterator.next());

function *infiniteMaker(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

let iterator = infiniteMaker();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// for (let i=0;i<100;i++){
//     console.log(iterator.next());
// }