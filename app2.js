let a = 3;
for (let i = 0; i < a; i += 1) {
  console.log("Executed in the parent thread ", i);
}

let arr = [];
let num = 40;
console.log(`Main thread ${num}th Fib: `, getFib(num));

function getFib(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    arr[0] = arr[1] ? arr[1] : getFib(num - 2);
    arr[1] = arr[1] ? arr[0] + arr[1] : getFib(num - 1);

    return arr[1] + arr[0];
  }
}
