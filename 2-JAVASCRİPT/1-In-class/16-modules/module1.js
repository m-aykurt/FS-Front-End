function add(n1, n2) {
  return n1 + n2;
}

const WORKING_HOURS_WEEK = 40;

let counter = 0;

const moduleName = "this is module 1";

// export default function greet(name){
//     console.log(`hello ${name}`)
// }

function inc(amount = 1) {
  counter += amount;
  return counter;
}
function dec(amount = 1) {
  counter -= amount;
  return counter
}

export default moduleName;
export { WORKING_HOURS_WEEK as WHW, add as sum, counter, dec, inc };
