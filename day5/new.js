console.log(1);

setTimeout(() => {
    console.log(5);
}, 2000)
setTimeout(() => {
    console.log(6);
}, 0)
setTimeout(() => {
    console.log(2);
}, 0)
setTimeout(() => {
    console.log(4)
}, 1000)

console.log(3)