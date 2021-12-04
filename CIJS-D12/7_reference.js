let x = 10;
let y = "abc";
let a = x;
let b = y;
console.log(a, b);

x = 20;

let reference = [1];
let redCopy = reference;
// console.log(refCopy);

reference.push(2)

console.log(reference)
// console.log(refCopy)

let obj = {
    first: 'reference'
}